let _ = require('lodash');
let auth = require('../auth');

var User = require('../models/user');

let userResolver = (req) => {
  return {
    currentUser: () => {
      return new Promise((resolve, reject) => {
        auth(req)
          .then((user) => {
            resolve(user);
          })
          .catch(() => {
            reject('Incorrect email or password.');
          });
      });
    },

    signIn: ({ email, password }) => {
      return new Promise((resolve, reject) => {
        User.findOne({ email: email }, function(err, user) {
          if (err || _.isNull(user)) {
            reject('Incorrect email or password.');
            return;
          }

          if (user.validPassword(password)) {
            resolve({
              id: user._id,
              email: user.email,
              caffeineEntries: [],
              token: user.generateToken()
            });
          } else {
            reject('Incorrect email or password.');
          }
        });
      });
    }
  };
};

module.exports = userResolver;
