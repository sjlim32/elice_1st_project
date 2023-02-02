import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../schemas/user.js';

const router = Router();

// * 회원가입 api
router.post('/signup', async (req, res) => {
  const { email, name, password, passwordConfirm } = await req.body;
  let errors = [];

  if (!email || !name || !password || passwordConfirm) {
    errors.push({ message: '모든 값을 입력해주세요.' });
  }

  if (password != passwordConfirm) {
    errors.push({ message: '비밀번호가 일치하지 않습니다.' });
  }

  if (password.length < 6) {
    errors.push({ message: '비밀번호는 최소 7자리 이상 입력해주세요.' });
  }

  if (errors.length > 0) {
    res.render('signup', {
      errors,
      email,
      name,
      password,
      passwordConfirm,
    });
  } else {
    const user = await User.findOne({ email: email });
    if (user) {
      errors.push({ message: '이미 존재하는 사용자입니다.' });
      res.render('signup', {
        errors,
        email,
        name,
        password,
        passwordConfirm,
      });
    } else {
      const newUser = new user({
        email,
        name,
        password,
      });

      // ! 비밀번호 해싱 필요
      // bcrypt.
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
