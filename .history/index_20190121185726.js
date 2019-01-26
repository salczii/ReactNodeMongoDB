const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express()

passport.use(new GoogleStrategy());

//10441063309-rsjccb8trv1k4optk55h1kiakv3th6nb.apps.googleusercontent.com

const PORT = process.env.PORT || 5000
app.listen(PORT)