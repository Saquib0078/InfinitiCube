const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]

},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
