const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Danh sách sản phẩm
router.get('/', productController.getAllProducts);

// Form thêm mới
router.get('/new', productController.getNewProductForm);
router.post('/new', productController.createProduct);

// Form chỉnh sửa
router.get('/edit/:id', productController.getEditProductForm);
router.post('/edit/:id', productController.updateProduct);

// Xóa
router.post('/delete/:id', productController.deleteProduct);

module.exports = router;