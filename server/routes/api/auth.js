var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/login', function(req, res) {
    if (req.body.name && req.body.password) {
        var name = req.body.name;
        var password = req.body.password;
    }
    // usually this would be a database call:
    var user = users[_.findIndex(users, { name: name })];
    if (!user) {
        res.status(401).json({ message: 'no such user found' });
    }

    if (user.password === req.body.password) {
        var payload = { id: user.id };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);

        res.json({ message: 'ok', token: token });
    } else {
        res.status(401).json({ message: 'passwords did not match' });
    }
});

module.exports = router;
