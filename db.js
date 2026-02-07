import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // Enter your MySQL password here
  database: process.env.DB_NAME || 'mood_tracker_db',
  waitForConnections: true,
  connectionLimit: 10
});

export default pool;