const {Router} = require('express');
const router = new Router();

const authLoginController = require('../controllers/authLogin.ctrl');

router.get('/login', authLoginController.createAuthLogin);

module.exports = {router};