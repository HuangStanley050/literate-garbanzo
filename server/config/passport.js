const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use("jwt", new JwtStrategy(opts, (jwt_payload, done) => {}));

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`
    },
    (accessToken, refreshToken, profile, done) => {
      const googleID = profile.id;
      const email = profile.emails[0].value;
      const name = profile.displayName;
      const userInfo = { googleID, email, name };
      return done(null, userInfo);
    }
  )
);
