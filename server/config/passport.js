var _ = require('lodash');
var passportJWT = require('passport-jwt');

var User = require('../models/user');
var secrets = require('../config/secrets');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secrets.jwtSecret;

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);

    User.find({ id: jwt_payload.id }, (err, user) => {
        if (_.isEmpty(user)) {
            next(null, false);
        } else {
            next(null, user);
        }
    });
});

module.exports = strategy;
