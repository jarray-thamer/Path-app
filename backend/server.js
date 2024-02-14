import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "path_event_website",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/survey", (req, res) => {
  const sql = "UPDATE user SET `path_id` = ? WHERE path_id = '' ";
  db.query(sql, req.body.choice, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      console.log(data);
      return res.json("Login successfully");
    } else {
      console.log(data);
      return res.json("check your inputs !");
    }
  });
});

app.post("/register", (req, res) => {
  const checkEmail = "SELECT * FROM user WHERE `email` = ?";
  db.query(checkEmail, req.body.email, (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) {
      return res.json("Email already exist !");
    } else {
      const sql =
        "INSERT INTO user (`full_name`, `email`, `password`, `role`) VALUES (?)";
      const values = [
        req.body.displayName,
        req.body.email,
        req.body.password,
        "user",
      ];
      db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
      });
    }
  });
});

app.listen(5555, () => {
  console.log("server working on port:5555");
});
