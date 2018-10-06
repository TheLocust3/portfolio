var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/login', (req, res) => {
    var user = User.find({ email: req.body.email });
    if (!user) {
        res.status(401).json({ message: 'Incorrect email or password' });
    }

    if (user.validPassword(req.body.password)) {
        res.json({ message: 'success', token: user.generateToken() });
    } else {
        res.status(401).json({ message: 'Incorrect email or password' });
    }
});

module.exports = router;
