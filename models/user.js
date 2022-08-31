const {Schema, model} = require('mysql');

const userSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String},
}, {collection: 'users'});

const User = model('User', userSchema);

module.exports = User;