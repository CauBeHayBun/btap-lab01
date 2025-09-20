const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// controllers/productController.js

exports.getAllProducts = (req, res) => {
    res.send("Danh sách sản phẩm");
};

exports.getNewProductForm = (req, res) => {
    res.send("Form thêm sản phẩm");
};

exports.createProduct = (req, res) => {
    res.send("Tạo sản phẩm mới");
};

exports.getEditProductForm = (req, res) => {
    res.send("Form chỉnh sửa sản phẩm");
};

exports.updateProduct = (req, res) => {
    res.send("Cập nhật sản phẩm");
};

exports.deleteProduct = (req, res) => {
    res.send("Xóa sản phẩm");
};

;

// show, editForm, update, delete tương tự