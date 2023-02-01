import passport from 'passport';
import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';
import JWTStrategy from 'passport-jwt';

import User from '../models/user';

export default function (passport) {
  passport.use(
    new LocalStrategy({ emailFiled: 'userEmail', passwordField: 'password'}, async (userEmail, password, done) => {
        try {
            const user = await User.findOne({ where: {email : userEmail }});
            if (!user) {
                done(null, false, { message: '존재하지 않는 사용자입니다.' });
                return;
            }
    
            const comparePassword = await bcrypt.compare(password, user.password);
            if (comparePassword) {
                done(null, user)
                return;
            } else {
                done(null, false, { message : '올바르지 않은 비밀번호 입니다.'})
            };
        } catch(err) {
            console.error(err)
            done(err)
        }
    })
  )
}