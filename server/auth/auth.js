var passport = require('passport');
var RallyStrategy = require('passport-rally').Strategy;

module.exports = function(){

  passport.serializeUser(function(user, done) {
      done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
      done(null, obj);
  });

  passport.use(new RallyStrategy({
    clientID: process.env.coop_client_id,
    clientSecret: process.env.coop_client_secret,
    callbackURL: process.env.coop_server_name + ':' + process.env.coop_port + '/api/rally-callback',
    userAgent: 'nodejs-oauth-example',
    scope: 'alm',
  }, function (accessToken, refreshToken, profile, done) {
    user = profile._json.User;
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    process.nextTick(function () {
      return done(null, user);
    });
  }));

  return passport;
}