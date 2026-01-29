//tools
const {Router}= require('express');
const action = require('../controllers/indexController.js')

//routers
const indexRouter =Router();
//get
indexRouter.get('/', action.getHomePage)
indexRouter.get('/sign-up',action.getRegisterPage);

module.exports = indexRouter
