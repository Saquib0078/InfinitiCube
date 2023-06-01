const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Product_name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  created_at: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
