var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json(req.user);
});

module.exports = router;
