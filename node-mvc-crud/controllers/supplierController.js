const Supplier = require('../models/Supplier');
const Product = require('../models/Product');

exports.index = async(req, res) => {
    try {
        const suppliers = await Supplier.find({});
        res.render('suppliers/index', { suppliers });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.newForm = (req, res) => res.render('suppliers/new');

exports.create = async(req, res) => {
    try {
        const { name, address, email, phone } = req.body; // thêm phone
        const supplier = new Supplier({ name, address, email, phone });
        await supplier.save();
        res.redirect('/suppliers');
    } catch (err) {
        res.status(400).render('suppliers/new', { error: err.message });
    }
};

exports.show = async(req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        const products = await Product.find({ supplier: supplier._id });
        res.render('suppliers/show', { supplier, products });
    } catch (err) {
        res.status(404).send(err.message);
    }
};

exports.editForm = async(req, res) => {
    const supplier = await Supplier.findById(req.params.id);
    res.render('suppliers/edit', { supplier });
};

exports.update = async(req, res) => {
    try {
        const { name, address, email, phone } = req.body; // thêm phone
        await Supplier.findByIdAndUpdate(
            req.params.id, { name, address, email, phone }, { runValidators: true }
        );
        res.redirect('/suppliers');
    } catch (err) {
        res.status(400).render('suppliers/edit', { error: err.message });
    }
};

exports.delete = async(req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.redirect('/suppliers');
    } catch (err) {
        res.status(500).send(err.message);
    }
};