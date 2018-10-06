var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.generateToken = () => {
    return jwt.sign({ id: this.local.id }, jwtOptions.secretOrKey, { expiresInMinutes: 120 });
};

module.exports = mongoose.model('User', userSchema);
