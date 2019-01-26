const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accesToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            existingUser ? console.log('s') : new User({ googleId: profile.id }).save()
        })
}));