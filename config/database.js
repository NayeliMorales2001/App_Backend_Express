require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  ssl: {
    rejectUnauthorized: false
  },

  connectTimeout: 10000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// prueba conexión
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ ERROR DE CONEXIÓN MYSQL:");
    console.error(err);
  } else {
    console.log("✅ MYSQL CONECTADO CORRECTAMENTE");
    connection.release();
  }
});

module.exports = pool.promise();