const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "654070101235-u3p50b5og6ior9na0n63a6jv153lgdlu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "360692729537816";
const FACEBOOK_APP_SECRET = "a1c6bbe50feee1115dbc06aab2736950";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
