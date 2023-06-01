const ProductModel=require("../models/ProductModel")

const createProduct=async (req,res)=>{
try {
let data=req.body
let{Product_name,price,description,category}=data

if(!Product_name) return res.status(400).send({ status: false, msg: "Product Name is required" })
if(!price) return res.status(400).send({ status: false, msg: "Product price is required" })
if(!description) return res.status(400).send({ status: false, msg: "Product description is required" })
if(!category) return res.status(400).send({ status: false, msg: "Product category is required" })

let createProd=await ProductModel.create(data)
return res.status(201).send({ status: true, message: "Success", data: createProd })

} catch (error) {
    return res.status(500).send({ status: false, msg: error.message })

}


}

module.exports = {createProduct}
