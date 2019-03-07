let userResolver = require('./user-resolver');
let articleResolver = require('./article-resolver');

let root = (req) => {
  return {
    ...userResolver(req),
    ...articleResolver(req)
  };
};

module.exports = root;
