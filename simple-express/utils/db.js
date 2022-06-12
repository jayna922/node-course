// exports = module.exports = {}; (隱藏)

//dotenv已經有抓到process.env是什麼了
//引用者兩個模組（就可以獨立使用這個模組）
require("dotenv").config();
const mysql = require("mysql2");

// 這裡不會像爬蟲那樣，只建立一個連線 (mysql.createConnection)
// 但是，也不會幫每一個 request 都分別建立連線
// ----> connection pool
let pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // 為了 pool 新增的參數
    connectionLimit: 10,
    dateStrings: true,
  })
  .promise();

module.exports = pool;
// return module.exports;(隱藏)
