const postgres = require('../db/queries.js')

async function getMsgsByAccessLvl(user) {
    if(user){
        if(user.member_status){
            return await postgres.getAllMessagesForMembers();
        }
    }
    return await postgres.getAllMessagesForNonMembers();
}

module.exports = {
    getMsgsByAccessLvl,
}