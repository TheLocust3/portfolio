let userResolver = require('./user-resolver');

let root = (req) => {
  return {
    ...userResolver(req)
  };
};

module.exports = root;
