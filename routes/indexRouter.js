//tools
const {Router}= require('express');
const {body, matchedData, validationResult}= require('express-validator');
//controllers
const action = require('../controllers/indexController.js')
//validations go here


//routers
const indexRouter =Router();
//get
indexRouter.get('/', action.getHomePage)
indexRouter.get('/sign-up',action.getRegisterPage);
indexRouter.post('/sign-up', action.registerUser)

module.exports = indexRouter
