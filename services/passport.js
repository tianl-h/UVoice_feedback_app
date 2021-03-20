/*
* @Author: tianl
* @Date:   2021-03-15 01:23:23
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-16 18:38:31
*/

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
            // callbackURL: 'https://floating-journey-49522.herokuapp.com/auth/google/callback'
        }, 
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                // we already have a record with the given id
                return done(null, existingUser);
            } 

            // we don't have a user record with this ID, make a new record
            const user = await new User({ googleId: profile.id}).save()
            done(null, user);

        }
    )
);



// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback'
//         }, 
//         (accessToken, refreshToken, profile, done) => {
//             console.log('access token', accessToken);
//             console.log('refresh token', refreshToken);
//             console.log('profile', profile);
//         }
//     )
// );