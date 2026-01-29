//import tools
const {matchedData, validationResult} = require('express-validator');
const postgres = require('../db/queries.js');

const session = require("express-session");
const pgSession = require('connect-pg-simple');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
//code:
async function getHomePage(res, res) {
    res.render('homepage')
}
async function getRegisterPage(req, res){
    res.render('sign-up');
}
module.exports = {
    getRegisterPage,
    getHomePage,
}