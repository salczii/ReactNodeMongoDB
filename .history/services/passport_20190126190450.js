const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users')


// passport.serializeUser((user, done) => {
//     console.log('jestem serialize')
//     done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//     console.log('jestem deserialize')
//     User.findById()
//         .then(user => {
//             done(null, user)
//         })
// })


passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
}, (accesToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {
                console.log('jestem')
                // done(null, existingUser);
            }
            else {
                new User({ googleId: profile.id })
                    .save()
                // .then(user => done(null, user))
            }
        })
        .catch(err => console.log(err))
}));