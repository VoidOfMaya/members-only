
# MEMBERS-ONLY-CLUB
- project requirments page: https://www.theodinproject.com/lessons/node-path-nodejs-members-only

## about project:
this project is a message board (much like the mini message board created previously),HOWEVER
this one adds the element of user based authentication /session management allowing anonymous
viewing of the message board for guests  but posting and additional info relating to the messages
is accessible to users only after they sign up and log in!

### mvp goals/working mental model:
- [X]database:
    - [X]has members(id, first_name,last_name, username, password, member_status, is_admin)
    - [X]has  message(id, title, posted_on, content, user_id)
    - [X]has session(sid, sess, expire)
    - [X]QUERIES(msg:{ addMsg, getAllMessagesForMembers, getAllMessagesForNonMembers, deleteMsg(adminPrev true?)} 
                 members{addMemeber, activateMembership, getMember, toggleAdminMod})
- [ ]server:
    #### [ ]sign up
    - [X]action => on load
    - [X]view- sign-up form(fName, lName, username, password, confirmPassword) *validate with validation-api
    - [X]router- GET/sign-up 
    - [X]router- POST/auth/sign-up *validate sanitize 
    - [X]controller-  confirmPasswod and register member use addMember query * bcrypt password 
    - [ ]controllerRes- GET/Log-in
    #### log in
    - [ ]action => prompt login
    - [ ]view- login-page(username, password) *validate  with validation-api
    - [ ]router- GET/log-in
    - [ ]router- POST/authenticate *validate sanitize 
    - [ ]controllerRes -auth/activate-membership
    - [ ]controller- compareCreds(user) use getMember query *set session with passport.js 
    - [ ]controllerRes- GET/homepage
    #### [ ]activate membership
    - [ ]action => on register member_status: false =>  
    - [ ]view- activateMembership with input named passcode *validate  with validation-api
    - [ ]router- GET/activate-membership
    - [ ]router- POST/membership-stat *validate sanitize
    - [ ]controller- setMembershipStat use activateMembership query
    - [ ]controllerRes- GET/log-in

    #### [ ]display home page
    - [ ]action => display member messages
    - [ ]view- homepage
    - [ ]router- GET/homepage
    - [ ]controller- checkMembership if true return(message, author, date) else return(null, message, date)
    - [ ]controllerRes- GET/homepager {note to self figure out how to censor the messages from the server without reaching the front end}
    #### [ ]post new message
    - [ ]action => postMessage
    - [ ]view- add-message(title, content) *validate  with validation-api
    - [ ]router POST/msg
    - [ ]controller- ismember? => createNewMsg use addMsg query
    - [ ]controllerRes- GET/homepage
    #### [ ]delete message
    - [ ]action => delete a message
    - [ ]view- partial{deletebtn}
    - [ ]router- DELETE/msg
    - [ ]controller-  isAdmin? use deleteMsg query : throw err(unable to preform action,no admin privilages)
    ### [ ]Enable Admin
    - [ ]action => click on member name to view details
    - [ ]view- any member set as a button for a stat dialog + button to become admin
    - [ ]router- POST/adminPrev
    - [ ]controller- change admin status use 






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



