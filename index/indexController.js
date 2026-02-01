//import tools

const msgWare = require('../messaging/messageMiddleware.js');
//code:
async function getHomePage(req, res) {
    
    //manages information access to messages by access lvl
    const data = await msgWare.getMsgsByAccessLvl(req.user);
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