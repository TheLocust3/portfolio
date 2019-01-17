var _ = require('lodash');
var passportJWT = require('passport-jwt');

var User = require('../models/user');
var secrets = require('../config/secrets');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secrets.jwtSecret;

var strategy = new JwtStrategy(jwtOptions, function(jwtPayload, next) {
  console.log('payload received', jwtPayload);

  User.find({ _id: jwtPayload.id }, (err, users) => {
    if (_.isEmpty(users)) {
      next(null, false);
    } else {
      next(null, users[0]);
    }
  });
});

module.exports = strategy;
