var _ = require('lodash');
var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.post('/sign-in', (req, res) => {
    User.find({ email: req.body.email }, function(err, users) {
        if (_.isEmpty(users)) {
            res.status(401).json({ message: 'Incorrect email or password' });
            return;
        }

        let user = users[0];
        if (user.validPassword(req.body.password)) {
            res.json({ message: 'success', token: user.generateToken() });
        } else {
            res.status(401).json({ message: 'Incorrect email or password' });
        }
    });
});

module.exports = router;
