let passport = require('passport');

function auth(req) {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, function(err, user, info) {
      if (err || !user) {
        reject('Incorrect email or password.');
      }

      resolve(user);
    })(req);
  });
}

module.exports = auth;
