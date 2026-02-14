// app.js - Secured Node.js Application

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet()); // Security headers
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

const csrfProtection = csrf({ cookie: true });

// SQLite database
const db = new sqlite3.Database(":memory:");
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
    db.run("INSERT INTO users (username, password) VALUES ('admin', 'admin123')");
});

// Home route with CSRF token
app.get("/", csrfProtection, (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            <input type="hidden" name="_csrf" value="${req.csrfToken()}">
            Username: <input name="username"><br>
            Password: <input name="password"><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Secure login route with prepared statements + CSRF
app.post("/login", csrfProtection, (req, res) => {
    const { username, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, row) => {
            if (err) return res.status(500).send("Server error");
            if (row) res.send("Login successful!");
            else res.send("Login failed!");
        }
    );
});

// Start server
app.listen(3000, () => {
    console.log("Secured app running on http://localhost:3000");
});
