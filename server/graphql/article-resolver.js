let _ = require('lodash');
let fs = require('fs');
let uuidv4 = require('uuid/v4');

let auth = require('../auth');
var Article = require('../models/article');

const UPLOAD_DIR = './images';

let articleResolver = (req) => {
  return {
    articles: () => {
      return new Promise((resolve, reject) => {
        Article.find((err, articles) => {
          if (err || !articles) {
            resolve([]);
            return;
          }

          resolve(articles);
        });
      });
    },
    article: ({ url }) => {
      return new Promise((resolve, reject) => {
        Article.findOne({ url: url }, (err, article) => {
          if (err || !article) {
            reject('Article not found!');
            return;
          }

          resolve(article);
        });
      });
    },

    createArticle: ({ input }) => {
      return new Promise((resolve, reject) => {
        auth(req).then(async () => {
          const { filename, createReadStream } = await input.image;
          const image = `${uuidv4()}-${filename}`;

          createReadStream()
            .pipe(fs.createWriteStream(`${UPLOAD_DIR}/${image}`))
            .on('error', (error) => reject(error))
            .on('finish', () => {
              const article = new Article({
                title: input.title,
                body: input.body,
                image: image,
                url: input.url
              });

              article.save((err, article) => {
                if (err || !article) {
                  reject('Failed to save!');
                  return;
                }

                resolve(article);
              });
            });
        });
      });
    },
    updateArticle: ({ id, input }) => {
      return new Promise((resolve, reject) => {
        auth(req).then(() => {
          Article.findOne({ _id: id }, (err, article) => {
            if (err || !article) {
              reject('Article not found!');
              return;
            }

            if (input.title) {
              article.title = input.title;
            }

            if (input.body) {
              article.body = input.body;
            }

            if (input.image) {
              article.image = input.image;
            }

            if (input.url) {
              article.url = input.url;
            }

            article.save((err, article) => {
              if (err || !article) {
                reject('Failed to save!');
              }

              resolve(article);
            });
          });
        });
      });
    },
    removeArticle: ({ id }) => {
      return new Promise((resolve, reject) => {
        auth(req).then(() => {
          Article.deleteOne({ _id: id }, function(err) {
            if (err) {
              reject('Failed to remove!');
              return;
            }

            resolve({ message: 'Deletion sucessful' });
          });
        });
      });
    }
  };
};

module.exports = articleResolver;
