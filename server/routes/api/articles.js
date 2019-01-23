var _ = require('lodash');
var express = require('express');
var passport = require('passport');

var Article = require('../../models/article');

var router = express.Router();

router.get('/', function(req, res) {
  Article.findOne({}, function(err, articles) {
    if (_.isEmpty(err)) {
      res.json(articles);
    } else {
      res.json({ err });
      res.sendStatus(404);
    }
  });
});

router.get('/:url', function(req, res) {
  Article.findOne({ url: req.params.url }, function(err, article) {
    if (_.isEmpty(err)) {
      res.json(article);
    } else {
      res.json({ err });
      res.sendStatus(404);
    }
  });
});

router.post('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  const article = new Article({
    title: req.params.title,
    body: req.params.body,
    image: req.params.image,
    url: req.params.url
  });

  article.save().then(function(err, article) {
    if (_.isEmpty(err)) {
      res.json(article);
    } else {
      res.json({ err });
      res.sendStatus(400);
    }
  });
});

router.patch('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  Article.updateOne({ id: req.params.id }, function(err, article) {
    if (_.isEmpty(err)) {
      res.json(article);
    } else {
      res.json({ err });
      res.sendStatus(400);
    }
  });
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  Article.deleteOne({ id: req.params.id }, function(err) {
    if (_.isEmpty(err)) {
      res.json({ success: 'ok' });
    } else {
      res.json({ err });
      res.sendStatus(400);
    }
  });
});

module.exports = router;
