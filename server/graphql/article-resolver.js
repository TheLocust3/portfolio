let _ = require('lodash');
let auth = require('../auth');

var Article = require('../models/article');

let articleResolver = (req) => {
  return {
    articles: () => {
      return new Promise((resolve, reject) => {
        auth(req).then(() => {
          Article.find((err, articles) => {
            if (err || !articles) {
              resolve([]);
            }

            resolve(articles);
          });
        });
      });
    },
    article: ({ url }) => {
      return new Promise((resolve, reject) => {
        auth(req).then(() => {
          Article.findOne({ url: url }, (err, article) => {
            if (err || !article) {
              reject(err);
            }

            resolve(article);
          });
        });
      });
    }
  };
};

module.exports = articleResolver;
