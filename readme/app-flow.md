### mvp goals/working mental model:
- database:
    - has members(id, first_name,last_name, username, password, member_status, is_admin)
    - has  message(id, title, posted_on, content, user_id)
    - has session(sid, sess, expire)
    - QUERIES(msg:{ addMsg, getAllMessagesForMembers, getAllMessagesForNonMembers, deleteMsg(adminPrev true?)} 
                 members{addMemeber, activateMembership, getMember, toggleAdminMod})
- [ ]server:
    #### [ ]sign up
    - [X]action => on load
    - [X]view- sign-up form(fName, lName, username, password, confirmPassword) *validate with validation-api
    - [X]router- GET/sign-up 
    - [X]router- POST/auth/sign-up *validate sanitize 
    - [X]controller-  confirmPasswod and register member use addMember query * bcrypt password 
    - [X]controllerRes- GET/Log-in
    #### log in
    - [X]action => prompt login
    - [X]view- login-page(username, password) *validate  with validation-api
    - [X]router- GET/log-in
    - [X]router- POST/authenticate *validate sanitize 
    - [X]controller- compareCreds(user) use getMember query *set session with passport.js 
    - [X]controllerRes- GET/homepage
    #### log out
    - [X]action => user logged in => user logs out
    - [X]view- homepage log out link
    - [X]router- GET/auth/log-out
    - [X]controller- logout *clears user data /remove cookie / wipe session table
    - [X]controllRes- GET/homepage
    #### [ ]activate membership
    - [X]action => when logged in on clicking activate membership =>  
    - [X]view- activateMembership with input named membercode *validate  with validation-api
    - [X]router- POST/membership-stat *validate sanitize
    - [X]controller- setMembershipStat use activateMembership query
    - [X]controllerRes- GET/homepage

    #### [ ]display home page
    - [X]action => display member messages
    - [X]view- homepage
    - [X]router- GET/homepage
    - [X]controller- checkMembership if true return(message, author, date) else return(null, message, date)
    - [X]controllerRes- GET/homepager {note to self figure out how to censor the messages from the server without reaching the front end}
    #### [ ]post new message
    - [X]action => postMessage
    - [X]view- add-message(title, content) *validate  with validation-api
    - [X]router POST/msg
    - [X]controller- ismember? => createNewMsg use addMsg query
    - [X]controllerRes- GET/homepage
    #### [ ]delete message
    - [ ]action => delete a message
    - [X]view- partial{deletebtn}
    - [ ]router- DELETE/msg
    - [ ]controller-  isAdmin? use deleteMsg query : throw err(unable to preform action,no admin privilages)
    ### [ ]Enable Admin
    - [X]action => click on member name to view details
    - [X]view- any member set as a button for a stat dialog + button to become admin
    - [X]router- POST/adminPrev
    - [X]controller- change admin status use 