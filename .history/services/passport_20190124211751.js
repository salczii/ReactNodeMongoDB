const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret, mongoURI } = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(mongoURI, { useNewUrlParser: true });

const User = mongoose.model('users')


passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
}, (accesToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {
                console.log(accesToken)

            } else {
                new User({ googleId: profile.id }).save()
            }
        })
}));