const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: 'localhost',
  database: 'TopCat_Game',
  password: process.env.DB_PASS || 'password',
  port: 5432,
});

module.exports = pool;