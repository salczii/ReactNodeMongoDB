const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express()

passport.use(new GoogleStrategy());

//10441063309-9pqmjs30tempr33vmh6uacicr6cdp4pq.apps.googleusercontent.com
//-1Bn_jN1uVii_zjTzmaCyvbc

const PORT = process.env.PORT || 5000
app.listen(PORT)