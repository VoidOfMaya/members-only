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
    if(!errors.isEmpty()){
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

}
async function logout(req, res) {
    req.logout(err => {
        if(err){
            console.lofg(`passport logout error: ${err}`);
            return
        };
        req.session.destroy(err => {
        if(err){
            console.lofg(`session destroy error: ${err}`);
            return
        };
        res.clearCookie('connect.sid');
        res.redirect('/');
        });
    });
}
async function activateMember(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()})
        return res.status(400).json({errors: errors.array()});
    }
    const data = matchedData(req);
    try{
        await postgres.activateMembership(data.memberCode);
        console.log('membership activated at id: ' + data.memberCode);
    }catch(err){
        console.log('membership_activation failed!')
    }
    //console.log(data);
    res.redirect('/');
}
async function becomeAdmin(req, res) {

    if(req.user){
        try{
            await postgres.toggleAdminMod(req.user.id);
        }catch(err){
            console.log(err);
        }        
    }else{
        console.log('user not found');
    }


    res.redirect('/');
}

module.exports={
    registerUser,
    login,
    logout,
    activateMember,
    becomeAdmin
}