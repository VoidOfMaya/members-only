//tools
const {Router}= require('express');
const validate = require('../validations/validate.js')
const action = require('../controllers/indexController.js')

//routers
const indexRouter =Router();
//get
indexRouter.get('/', action.getHomePage)
indexRouter.get('/sign-up',action.getRegisterPage);
indexRouter.post('/sign-up',validate.registery, action.registerUser)

module.exports = indexRouter
