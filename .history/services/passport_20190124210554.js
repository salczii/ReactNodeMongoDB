const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret, mongoURI } = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

mongoose.Promise = global.Promise

mongoose.connect(mongoURI, {
    useMongoClient: true
})

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
}, (accesToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {

            } else {
                new User({ googleId: profile.id }).save()
            }
        })
}));