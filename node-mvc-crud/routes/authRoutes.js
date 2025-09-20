const express = require("express");
const router = express.Router();

// login -> lưu session
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "123") {
        req.session.user = username;
        res.json({ message: "Login successful", user: username });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// profile -> chỉ vào được nếu có session
router.get("/profile", (req, res) => {
    if (req.session.user) {
        res.json({ message: `Welcome ${req.session.user}` });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

// logout -> hủy session
router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: "Logout error" });
        res.clearCookie("connect.sid");
        res.json({ message: "Logout successful" });
    });
});

module.exports = router;