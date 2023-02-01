import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();

// * 회원가입 router
router.use('/signup', userController.signUp);

// * 로그인 router
router.use('/login', userController.logIn);

// * 회원가입 api

router.post('/signup', async (req, res) => {
    const { email, name, password, passwordConfirm} = await req.body;
    let errors = [];

    if ( !email || !name || !password || passwordConfirm ) {
        errors.push({ message : '모든 값을 입력해주세요.' });
    }

    if ( password != passwordConfirm ) {
        errors.push({ message : '비밀번호가 일치하지 않습니다.'})
    }

})

// * 로그인 api
router.post('/login', async (req, res, next) => {
    try {
        passport.authenticate('jwt', (passportErr, user, info) => {
            if (passportErr || !user ) {
                res.status(400).json({ message : info.message });
                return;
            }
            
            req.login(user, { session: false }, (loginErr) => {
                if (loginErr) {
                    res.send(loginErr);
                    return;
                }
            })

            const token = jwt.sign(
                { id : user.id, email: user.email, name: user.name, },
                'jwt-secret-key'
            );
            res.json({ token });
        })(req, res);
    } catch(err) {
        console.error(err);
        next(err);
    }
});


export default router;
