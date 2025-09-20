// routes/sessionRoutes.js
const express = require('express');
const router = express.Router();

// Login (tạo session)
router.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    if (!username || !password) {
        return res.status(400).json({ message: 'Username và Password là bắt buộc!' });
    }

    // Ví dụ: hardcode user
    if (username === 'admin' && password === '123') {
        req.session.user = { username };
        return res.json({ message: 'Đăng nhập thành công', user: req.session.user });
    } else {
        return res.status(401).json({ message: 'Sai username hoặc password' });
    }
});

// Profile (check session)
router.get('/profile', (req, res) => {
    if (req.session.user) {
        return res.json({ message: 'Bạn đang đăng nhập', user: req.session.user });
    }
    res.status(401).json({ message: 'Bạn chưa đăng nhập' });
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ message: 'Đã đăng xuất' });
    });
});

module.exports = router;