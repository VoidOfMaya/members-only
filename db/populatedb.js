#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS member (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR (24),
  last_name VARCHAR (24),
  username VARCHAR (24),
  password VARCHAR ,
  member_status BOOLEAN DEFAULT false,
  is_admin BOOLEAN DEFAULT false
);
CREATE TABLE IF NOT EXISTS message (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR (100),
  posted_on TIMESTAMP  DEFAULT NOW(),
  content VARCHAR (255),
  user_id INTEGER NOT NULL REFERENCES member(id)
);
CREATE TABLE IF NOT EXISTS session (
  sid VARCHAR NOT NULL PRIMARY KEY,
  sess JSON NOT NULL,
  expire TIMESTAMP NOT NULL
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

module.exports = {main}