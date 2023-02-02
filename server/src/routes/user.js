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
      res.status(500).json({ error });
    }
  }
});

// * 로그인 api
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: '없는 사용자 입니다.' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({ message: '잘못된 비밀번호입니다.' });
    }
    const secret = process.env.JWT || 'eligance';
    const token = jwt.sign({ email: existingUser.email, _id: existingUser._id, name: existingUser.name }, secret, {
      expiresIn: '6h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// TODO 회원 정보 조회
// * 사용자는 개인 페이지에서 자신의 회원정보를 조회할 수 있다.
// /:user_id 로 유저 id 값을 받아온다.
// id 값으로 db에서 데이터를 조회한다.
// 조회한 데이터에서 { id email name password address phone bank_account } 값을 'user'로 전달한다.
router.get('/user/:user_id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ userId });
  } catch (error) {
    res.status(500).json({ error });
  };
});

// TODO 회원 정보 수정
// 사용자는 개인 페이지에서 자신의 회원정보를 수정할 수 있다.
router.patch('/user/:user_id', async (req, res) => {
  
})

// TODO 회원 정보 삭제
// 사용자는 개인 페이지에서 자신의 회원정보를 삭제(탈퇴)할 수 있다.
router.delete('/user/:user_id', async (req, res) => {
  
})

export default router;
