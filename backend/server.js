import express, { json } from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
// import appRouter from "./routes/app-router";
import bodyParser from "body-parser";
import session from "express-session";

import bcrypt from "bcrypt";
const saltRounds = 10;

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "path_t",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.use("/v1", appRouter);

// User login API

//  check if user has tokes to skip him from login

app.get("/login", (req, res) => {
  if (req.session.user) {
    return res.json({ user: req.session.user, loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

// Login API

app.post("/login", (req, res) => {
  const checkEmailExistence = "SELECT * FROM user WHERE `email` = ?";
  db.query(checkEmailExistence, [req.body.email], (err, data) => {
    if (err) return console.log(err);
    if (data.length > 0) {
      bcrypt.compare(req.body.password, data[0].password, (error, response) => {
        if (response) {
          req.session.user = data[0];
          return res.json({ data, msg: "Login successfully" });
        } else {
          return res.json("Password not correct !");
        }
      });
    } else {
      return res.json("Email does not exist !");
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
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const sql =
          "INSERT INTO user (`full_name`, `email`, `password`, `role`) VALUES (?)";
        const values = [req.body.displayName, req.body.email, hash, "user"];
        db.query(sql, [values], (err, resData) => {
          if (resData) {
            const sendData =
              "SELECT * FROM user WHERE email= ? AND password= ?";
            db.query(sendData, [req.body.email, hash], (err, data) => {
              if (data) {
                req.session.user = data[0];
                return res.json(data);
              }
            });
          }
          if (err) return res.json(err);
        });
      });
    }
  });
});

// Survey API SetChoice

app.put("/survey", (req, res) => {
  const sql = "UPDATE user SET path= ? WHERE id= ? ";
  db.query(sql, [req.body.choice, req.body.User], (req, data) => {
    if (data) {
      return res.json(data);
    }
  });
});

app.delete("/getuserbyid", (req, res) => {
  const id = req.body.id; // Assuming id is sent as a query parameter
  console.log(req.body.id);
  console.log("getuser id", id);

  if (!id) {
    return res.status(400).json({ error: "Missing id parameter" }); // Handle missing id
  }

  const sql = "SELECT * FROM user WHERE id=?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      // Handle database error appropriately
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.status(404).json({ error: "User not found" }); // Handle user not found
    }
  });
});

app.get("/get-all-users", (req, res) => {
  const sql = "SELECT * FROM user WHERE role='user'";
  db.query(sql, (e, data) => {
    return res.send(data);
  });
});

app.delete("/delete", (req, res) => {
  try {
    // Assuming you want to delete the user by ID from the 'id' column
    const sql = "DELETE FROM user WHERE id=?";
    console.log("id", req.body.id);
    db.query(sql, [req.body.id], (error, result) => {
      if (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("User deleted:", result);
        res.status(200).json({ message: "User deleted successfully" });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/updatetoadmin", (req, res) => {
  const sql = "UPDATE user SET role='admin' WHERE id=?";
  console.log(req.body.id);
  db.query(sql, [req.body.id], (error, result) => {
    console.log(result);
    if (error) {
      console.error("Error updating user role:", error.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ message: "User role updated successfully" });
    }
  });
});

app.put("/nextstand", (req, res) => {
  const sql = `UPDATE user SET current_stand = current_stand + 1 WHERE id = ? AND current_stand < 4`;
  console.log(req.body.id);
  db.query(sql, [req.body.id], (error, result) => {
    if (error) {
      console.error("Error updating user stand:", error.message);
      res.status(500).json({ error: "Internal server error" }); // Send an error response
    } else {
      res.json({ message: "User stand updated successfully" }); // Send a success response
    }
  });
});

const PORT = 5555;

app.listen(PORT, () => {
  console.log("server working on port:", PORT);
});
