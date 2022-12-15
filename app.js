const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 몽고DB 연결
mongoose.connect("mongodb://mongo:27017/docker-node-mongo", {
  useNewUrlParser:true,
  useUnifiedTopology: true,
});

// 미들웨어 설정
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/home"));
app.use(require("./routes/todo"));

// 서버 설정
app.listen(3000, () => {
  console.log("Server started listening on port : 3000");
});