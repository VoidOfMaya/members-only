
# MEMBERS-ONLY-CLUB
- project requirments page: https://www.theodinproject.com/lessons/node-path-nodejs-members-only

## about project:
this project is a message board (much like the mini message board created previously),HOWEVER
this one adds the element of user based authentication /session management allowing anonymous
viewing of the message board for guests  but posting and additional info relating to the messages
is accessible to users only after they sign up and log in!



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



