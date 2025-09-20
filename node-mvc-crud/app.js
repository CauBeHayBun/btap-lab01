// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const session = require('express-session');

// Load biến môi trường
dotenv.config();
const app = express();

// Cấu hình view EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

// ⚡ Cấu hình session đặt trước routes
app.use(session({
    secret: 'mySecretKey', // bí mật ký cookie
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 giờ
}));

// Import routes
const sessionRoutes = require('./routes/sessionRoutes');
const authRoutes = require('./routes/authRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

// Routes
app.use('/', sessionRoutes); // test session
app.use('/', authRoutes); // login/logout
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Kết nối MongoDB và chạy server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`🚀 Server chạy ở http://localhost:${PORT}`));
    })
    .catch(err => console.error('❌ MongoDB Error:', err));