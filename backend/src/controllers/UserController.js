const UserModel=require("../models/UserModel")



const createUser=async (req,res)=>{
try {
    let data=req.body

    let {first_name,last_name,email}=data
    
    if(!first_name) return res.status(400).send({status:false,msg:"first_name is required"})
    if(!last_name) return res.status(400).send({status:false,msg:"last_name is required"})
    if(!email) return res.status(400).send({status:false,msg:"email is required"})
    
    const UniqueEmail=await UserModel.find({email:email}) 
    if (!UniqueEmail) {
        return res.status(400).send({ status: false, message: "email is already present" })
    }

    const Create=  await UserModel.create(data)

    return res.status(200).send({ status: true, data: Create })

} catch (error) {
    res.status(500).send({ status: false, message: error.message })

}

}

const getUser=async(req,res)=>{
    try {
        const user_id=req.params.user_id
        const users=await UserModel.find().populate({path:'orders', populate: {
            path: 'productId',
            model: 'Product'
          }})
        return res.status(200).send({status:true,msg:users})
    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})

    }

}

module.exports={createUser,getUser}