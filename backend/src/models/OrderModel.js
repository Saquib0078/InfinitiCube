const mongoose = require('mongoose');
const Objectid = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   productId: { type: Objectid, ref: "Product", required: true },
  status: { type: String, enum: ['PENDING', 'DELIVERED'], default: 'PENDING' },
  created_date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
