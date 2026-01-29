const {Router}= require('express');
const validate = require('../validations/validate.js');
const action= require('./authControllers.js');
const passport = require("passport");
const authRouter = Router();

//setting up passport and rsession
authRouter.post('/sign-up',
    validate.registery, 
    action.registerUser);

authRouter.post('/log-in',
    validate.logIn,
    passport.authenticate('local',{successRedirect: '/', failureRedirect: '/'})
);
authRouter.get('/log-out', action.logout)
authRouter.post('/activate-membership',action.activateMemberShip);



module.exports= authRouter
