//tools
const {Router}= require('express');
const action = require('./indexController.js')

//routers
const indexRouter =Router();
//get
indexRouter.get('/', action.getHomePage)
indexRouter.get('/sign-up',action.getRegisterPage);
indexRouter.get('/log-in', action.getLogInPage);

module.exports = indexRouter
