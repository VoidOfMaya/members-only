const { validationResult, matchedData } = require('express-validator')
const postgres = require('../db/queries.js')

async function sendMsg(req, res) {
    console.log('message access')

    const errors = validationResult(req);
    if(!errors.isEmpty){
        console.lod(errors)
        res.redirect('/');

    }
    data = matchedData(req);
    try{
        //expects user.id and message{title,  content}
        await postgres.addMsg(req.user.id, data);
    }catch(err){
        console.log(err);
    }
    res.redirect('/')
}

module.exports={
    sendMsg,
}