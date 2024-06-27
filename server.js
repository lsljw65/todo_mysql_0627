const express = require("express");
// const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
  console.log("서버실행");
  console.log(`Sever On : http://localhost:${PORT}`);
});
