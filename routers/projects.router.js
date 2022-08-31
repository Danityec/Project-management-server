const {Router} = require('express');
const router = new Router();

const projectController = require('../controllers/project.ctrl');

router.get('/', projectController.getTasks);
router.post('/', projectController.createTask);


module.exports = {router};