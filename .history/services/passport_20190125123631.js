const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users')


passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
}, (accesToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {
                done(null, existingUser);

            }
            else {
                console.log('jestem')
                new User({ googleId: profile.id })
                    .save()
                // .then(user => done(null, user))
            }
        })
        .catch(err => console.log('error'))
}));