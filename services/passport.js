const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

/**
 * Create a new instance of the Google Passport Strategy method.
 * This allows us to authenticate users with Google's Authentication.
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      /**
       * This is the route we use after a user has granted permission to use their Google profile.
       * This route will be returned to the domain that is defined in the Google Console for this project.
       * Google will append a code string to the url that we can use to send back to Google when we request
       * this users profile.
       */
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log({ accessToken, refreshToken, profile });
    }
  )
);
