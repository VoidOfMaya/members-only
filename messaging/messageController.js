const { validationResult, matchedData } = require('express-validator')
const postgres = require('../db/queries.js')

async function sendMsg(req, res) {

    if(!req.user){
        console.log('access denied');
        return
    }
    console.log('message access')

    const errors = validationResult(req);
    if(!errors.isEmpty){
        console.lod(errors)
        res.redirect('/');

    }
    const data = matchedData(req);
    try{
        //expects user.id and message{title,  content}
        await postgres.addMsg(req.user.id, data);
    }catch(err){
        console.log(err);
    }
    res.redirect('/')
}
async function deleteMsg(req, res) {

    if(!req.user && !req.user.member_status && !req.user.is_admin){
        console.log('delteMsg controller: access denied');
        res.redirect('/');    
    }
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.lod(errors)
        res.redirect('/');
    }
    const msgId = Number(matchedData(req))
    console.log(msgId);
    //await postgres.deleteMsg(msgId);
    res.redirect('/');
}
module.exports={
    sendMsg,
    deleteMsg,
}