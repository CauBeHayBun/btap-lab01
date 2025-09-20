const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI).then(async() => {
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    const s1 = await Supplier.create({ name: 'ABC Co', address: 'HN', phone: '0123' });
    const s2 = await Supplier.create({ name: 'XYZ Ltd', address: 'HCM', phone: '0456' });

    await Product.create({ name: 'AirPods', price: 199, quantity: 10, supplier: s1._id });
    await Product.create({ name: 'Cable', price: 9, quantity: 50, supplier: s2._id });

    console.log('Seed xong');
    process.exit();
});