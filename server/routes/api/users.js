var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        email: 'jake.kinsella@gmail.com',
        name: 'Jake Kinsella'
    });
});

module.exports = router;
