//import tools
const {matchedData, validationResult} = require('express-validator');

const postgres = require('../db/queries.js');
const msgWare = require('../messaging/messageMiddleware.js')

const session = require("express-session");
const pgSession = require('connect-pg-simple');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
//code:
async function getHomePage(req, res) {
    
    //manages information access to messages by access lvl
    const data = await msgWare.getMsgsByAccessLvl(req.user);

    console.log(data)
    res.render('homepage',{user: req.user, messages: data});
}
async function getRegisterPage(req, res){
    res.render('sign-up');
}
async function getLogInPage(req, res) {
    res.render('log-in');
}
module.exports = {
    getRegisterPage,
    getHomePage,
    getLogInPage,
}