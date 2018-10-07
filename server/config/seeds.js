var mongoose = require('mongoose');

var User = require('../models/user');
var configDB = require('./database.js');

mongoose.connect(configDB.url);

var admin = new User();

admin.email = 'jake.kinsella@gmail.com';
admin.password = admin.generateHash('password');

admin.save();
