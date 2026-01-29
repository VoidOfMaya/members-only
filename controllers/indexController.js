//import tools
const {matchedData, validationResult} = require('express-validator');
const postgres = require('../db/queries.js');
//code:
async function getHomePage(res, res) {
    res.render('homepage')
}
async function getRegisterPage(req, res){
    res.render('sign-up');
}

async function registerUser(req, res) {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()})
        return res.status(400).json({errors: errors.array()});
    }
    const  data = matchedData(req);
    console.log(data);
    res.redirect('/');
}

module.exports = {
    getRegisterPage,
    getHomePage,
    registerUser
}