var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var secrets = require('../config/secrets');

var userSchema = mongoose.Schema({
    email: String,
    password: String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function() {
    return jwt.sign({ id: this.id }, secrets.jwtSecret);
};

module.exports = mongoose.model('User', userSchema);
