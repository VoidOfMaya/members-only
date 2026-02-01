const { Router } = require('express');
const action = require('./messageController.js')
const validate = require('../validations/validate.js')
const msgRouter = Router();

msgRouter.post('/send',validate.messageSend, action.sendMsg);
msgRouter.post('/delete', action.deleteMsg);

module.exports = msgRouter