//tools
require('dotenv').config();
const express = require('express');
const path = require('node:path');
const passport = require('passport')

//routing
const {setupPassport , startSession} = require('./authorization/authMiddleware.js');
const indexRouter = require ('./index/indexRouter.js')
const authRouter = require('./authorization/authRouters.js')
const msgRouter = require('./messaging/messageRoute.js')
const {main} = require('./db/populatedb.js')

//seed base db
main();

//=========> server setup <==========
const app = express(()=>{
    console.log('booting server')
});
//=========> generic asset and ejs setup <==========
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up static assets in ane xpress env
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

//==========> middleWare and setup <==========

//parse form data to a request body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setting up passport

startSession(app);


setupPassport();
app.use(passport.initialize());
app.use(passport.session());

//router setup

app.use('/auth',authRouter);
app.use('/msg',msgRouter)
app.use('/', indexRouter);


//error handeling
app.use((req, res)=>{
    res.render('404')
})

//listining setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})


