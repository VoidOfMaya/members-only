
# MEMBERS-ONLY-CLUB
- project requirments page: https://www.theodinproject.com/lessons/node-path-nodejs-members-only

## about project:
this project is a message board (much like the mini message board created previously),HOWEVER
this one adds the element of user based authentication /session management allowing anonymous
viewing of the message board for guests  but posting and additional info relating to the messages
is accessible to users only after they sign up and log in!

### mvp goals/working mental model:
- database:
    - has members(id, first_name,last_name, username, password, member_status, is_admin)
    - has  message(id, title, posted_on, content, user_id)
    - has session(sid, sess, expire)
    - QUERIES(addMemeber, addMsg, activateMembership, getMember, getAllMessages, deleteMsg)
- server:
    - action => on load
    - view- sign-up form(fName, lName, username, password, confirmPassword, setAsAdmin) *validate
    - router- GET/sign-up 
    - router- POST/sign-up *validate sanitize 
    - controller-  confirmPasswod and register member use addMember query * bcrypt password 
    - controllerRes- GET/activate-membership

    - action => on register member_status: false =>  
    - view- activateMembership with input named passcode *validate
    - router- GET/activate-membership
    - router- POST/membership-stat *validate sanitize
    - controller- setMembershipStat use activateMembership query
    - controllerRes- GET/log-in

    - action => prompt login
    - view- login-page(username, password) *validate
    - router- GET/log-in
    - router- POST/authenticate *validate sanitize 
    - controller- compareCreds(user) use getMember query *set session with passport.js 
    - controllerRes- GET/homepage

    - action => display member messages
    - view- homepage
    - router- GET/homepage
    - controller- checkMembership if true return(message, author, date) else return(null, message, date)
    - controllerRes- GET/homepager {note to self figure out how to censor the messages from the server without reaching the front end}


    - action => postMessage
    - view- add-message(title, content) *validate
    - router POST/msg
    - controller- ismember? => createNewMsg use addMsg query
    - controllerRes- GET/homepage

    - action => delete a message
    - view- partial{deletebtn}
    - router- DELETE/msg
    - controller-  isAdmin? use deleteMsg query : throw err(unable to preform action,no admin privilages)






# base Node /Express app: MVC archeticture
 keynote no database passwords or users set up , please set manuly 
### build instructions
- in CLI: npm install

- connect-pg-simple requires a session table in the database with the following schema:
    - sid VARCHAR- NOT NULL - PRIMARY KEY
    - sess JSON -NOT NULL
    - expire TIMESTAMP(6) - NOT NULL


## included tools:

node
express
express-validation
ejs templating
ng (postgreSQL)
public folder(for static elements)
MVC folder structure that includes
    - controllers
    - views
    - routes
    - errors
    -db
bcryptjs
connect-pg-simple
express-session
passport
passport-local



