const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/User");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (jwt_payload) {
      return done(null, jwt_payload);
    }
    return done(null, false);
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleID = profile.id;
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const userInfo = { googleID, email, name };

        const existingUser = await User.findOne({ googleID: profile.id });
        if (existingUser) {
          const { credits, googleID, email, name } = existingUser;
          const user = {
            credits,
            googleID,
            email,
            name
          };
          return done(null, user);
        }
        await new User({
          ...userInfo
        }).save();
        return done(null, userInfo);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
