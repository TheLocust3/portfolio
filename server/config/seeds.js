var User = require('../models/user');

var admin = new User();

admin.local.email = 'jake.kinsella@gmail.com';
admin.local.password = newUser.generateHash('password');

admin.save();
