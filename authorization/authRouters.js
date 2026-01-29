const {Router}= require('express');
const validate = require('../validations/validate.js')
const action= require('./authControllers.js')
const midWare = require('./authMiddleware.js')

const authRouter = Router();

//setting up passport and rsession
midWare.setupPassport();
midWare.startSession(authRouter);

authRouter.post('/sign-up',validate.registery, action.registerUser);


module.exports= authRouter
