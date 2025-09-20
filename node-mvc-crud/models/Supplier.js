 const mongoose = require('mongoose');
 const SupplierSchema = new mongoose.Schema({
     name: { type: String, required: true, trim: true },
     address: { type: String },
     phone: { type: String, required: true }
 }, { timestamps: true });

 module.exports = mongoose.model('Supplier', SupplierSchema);