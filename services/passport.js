const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = new mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
(accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {

      }
      else{
        // Creating new user here if an existingUser does not exist
        new User({ googleId: profile.id }).save();
      }
    })
    .catch(err => console.log('Something went horribly wrong, eat shit u idiot!'));
  })
);