var mongoose = require('mongoose');

var User = require('../models/user');
var configDB = require('./database.js');

mongoose.connect('mongodb://localhost/portfolio', configDB);

var admin = new User();

admin.email = 'jake.kinsella@gmail.com';
admin.password = admin.generateHash('password');

admin.save();
