const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = new mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  })
  .catch(err => console.log('Could not Deserialize the user id'));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, 
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        done(null, existingUser);
      }
      else {
          // Creating new user here if an existingUser does not exist
          await new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user))
            .catch(err => console.log('Could not create a new user'));
      }
  })
);