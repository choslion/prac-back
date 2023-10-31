const express = require("express");
const app = express();
const PORT = 3000;

const mysql = require("mysql2"); // mysql 모듈 로드
const connection = mysql.createConnection({
  // mysql 접속 설정
  host: "localhost",
  port: "3306",
  user: "root",
  password: "cw2688hw",
  database: "lisnparty",
});

connection.connect();
app.get("/api/account", (req, res) => {
  res.send({
    mid: 3,
    memberName: "홍길동",
  });
});

connection.query("SELECT * from user_table", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();
// import db from "./db";

// console.log(db);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`서버가 실행됩니다. http://localhost:${PORT}`);
});
