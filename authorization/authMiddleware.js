const session = require("express-session");
const pgSession = require('connect-pg-simple');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const postgres = require('../db/queries.js');
const pool = require('../db/pool.js')

//sets up passport local strategy
async function setupPassport(){
passport.use(
    new LocalStrategy(async(username, password, done)=>{
        try{
            const user = await postgres.getMember(username);          
            if(!user){
                return done(null, false,{message: 'Incorrect username'});
            }
            const match = await bcrypt.compare(password, user.password);

            if(!match){
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        }catch(err){
            return done(err);
        }
    })
)
passport.serializeUser((user,done)=>{
    done(null, user.id);
});
passport.deserializeUser(async(id, done)=>{
    try{

        const user = await postgres.getMemberById(id);
        done(null, user);
    }catch(err){
        done(err);
    }
});    
}
// sets up new session
function startSession(router) {
    const PgSession = pgSession(session);
    //intializes a new session
    router.use(
        session({                   // takes in session table from db
            store: new PgSession({pool, tableName: 'session'}),
            secret: process.env.SESSION_SECRET,
            resave:false,
            saveUninitialized: false,
            cookie:{maxAge: 1000 * 60 * 60 *24} // one day time
        })
    )
}

module.exports={
    startSession,
    setupPassport,
}