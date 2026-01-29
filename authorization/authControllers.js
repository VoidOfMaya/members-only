const {matchedData, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const postgres = require('../db/queries.js')

async function registerUser(req, res) {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()})
        return res.status(400).json({errors: errors.array()});
    }
    const  data = matchedData(req);
    try{
            const secureData = {
                firstName: data.firstName,
                lastName: data.lastName, 
                username: data.username, 
                password: await bcrypt.hash(data.password, 10),
            };
            //console.log(secureData);
            await postgres.addMember(secureData);
            console.log(`Registration success`);
        res.redirect('/log-in');
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
    //console.log(data);
    res.redirect('/');
}
async function login(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()});
    }
    const data = matchedData(req);
    try{
        const login = {
            username: data.username,
        }
    }catch(err){
        console.log(err);
    }
    console.log(req.body);
}

module.exports={
    registerUser,
    login
}