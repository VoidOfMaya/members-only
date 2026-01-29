//imports 
const {body, matchedData, validationResult}= require('express-validator');
//validations go here

//sign up form structure:{firstName: 'david',lastName: 'black',username: 'lulul',password: '123',confirmPassword: '123'};
//validation arrays:
const registery = [
    body('firstName').trim().notEmpty().withMessage('first name is required')
                     .matches(/^[A-Za-z\s'-]+$/).withMessage('can only contain letters, spaces, hyphens, apostrophes')
                     .isLength({min: 3, max: 12}).withMessage('range must be between 3- 12 characters'),

    body('lastName').trim().notEmpty().withMessage('last name is required')
                    .matches(/^[A-Za-z\s'-]+$/).withMessage('can only contain letters, spaces, hyphens, apostrophes')
                    .isLength({min: 3, max: 12}).withMessage('range must be between 3- 12 characters'),

    body('username').trim().notEmpty().withMessage('username is required')
                    .isAlphanumeric().withMessage('username can only contain letters and numbers'),

    body('password').trim().notEmpty().withMessage('password is required')
                    .isLength({min:8}).withMessage('password must atleast be 8 letters')
                    .matches(/^[A-Za-z0-9]+$/).withMessage('can only contain letters, numbers, hyphens, apostrophes'),
    
    body('confirmPassword').trim().notEmpty().withMessage('password is required')
                           .custom((password, {req}) =>{
                                        const ogPass = req.body.password
                                        if(password !== ogPass){
                                            throw new Error('passwords do not match');
                                        }
                                        return true;
                                    })]
module.exports={
    registery,
}