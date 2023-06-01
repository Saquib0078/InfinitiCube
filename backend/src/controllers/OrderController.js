
const OrderModel=require('../models/OrderModel')
const User = require('../models/UserModel')

const createOrder = async (req, res) => {
    try {
      const userId = req.params.user_id;
      const data = req.body;
  
      const { user_id, items, status } = data;
  
      if (!user_id) return res.status(400).send({ status: false, msg: "userId is required" });
      if (!status) return res.status(400).send({ status: false, msg: "status is required" });
  
      const createdOrder = await OrderModel.create(data);
      const populatedOrder = await createdOrder.populate('productId');
      const user = await User.findById(user_id)
       user.orders.push(populatedOrder);
       await user.save();

      res.status(201).send({ status: true, message: "Success", data: populatedOrder });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };
  
  const getOrder=async(req,res)=>{
    try {

        const order=await OrderModel.find().populate('user_id',['orders']) 
        return res.status(200).send({status:true,msg:order})
    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})

    }

  }

module.exports={createOrder,getOrder}