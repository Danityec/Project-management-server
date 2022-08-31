const User = require('../models/user');
const UserCtrl = require('./user.ctrl')

getUsers = (req, res) => {
    if (req.query.email) {
        User.findOne({email: req.query.email} && {password: req.query.password})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

module.exports = {
    getUsers,
}