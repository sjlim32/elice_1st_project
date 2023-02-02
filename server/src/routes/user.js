import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../schemas/user.js';
import bcrypt from 'bcryptjs';

const router = Router();

// * 회원가입 api
router.post('/signup', async (req, res) => {
  const { email, name, password, passwordConfirm } = req.body;

  if (!email || !name || !password || !passwordConfirm) {
    res.status(500).json({ message: '모든 항목을 입력해주세요.' });
  }

  if (password != passwordConfirm) {
    res.status(500).json({ message: '비밀번호가 일치하지 않습니다.' });
  }

  if (password.length < 6) {
    res.status(500).json({ message: '비밀번호는 최소 7자리 이상 입력해주세요.' });
  }
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(500).json({ message: '이미 존재하는 사용자입니다.' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = {
      email,
      name,
      password: hashedPassword,
      admin: false,
    };
    try {
      await User.create(newUser);
      res.json({ message: '사용자가 정상적으로 등록되었습니다.' });
    } catch (error) {
      res.json({ error });
    }
  }
});

// * 로그인 api
router.post('/login', async (req, res, next) => {
  try {
    passport.authenticate('jwt', (passportErr, user, info) => {
      if (passportErr || !user) {
        res.status(400).json({ message: info.message });
        return;
      }

      req.login(user, { session: false }, (loginErr) => {
        if (loginErr) {
          res.send(loginErr);
          return;
        }
      });

      const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, 'jwt-secret-key');
      res.json({ token });
    })(req, res);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
