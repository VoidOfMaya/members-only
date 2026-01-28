//import tools
const postgres = require('../db/queries.js');
//code:
async function getHomePage(res, res) {
    res.render('homepage')
}
async function getRegisterPage(req, res){
    res.render('sign-up');
}

async function registerUser(req, res) {
    console.log(req.body);
    res.redirect('/');
}

module.exports = {
    getRegisterPage,
    getHomePage,
    registerUser
}