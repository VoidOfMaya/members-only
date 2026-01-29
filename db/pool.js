const {Pool} = require('pg');

//note: all following variables should be taken from the environament
//but are hardwired replace 
module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  //when working with a hosted database
  //its likely a connection url is used like so:
   // connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});
