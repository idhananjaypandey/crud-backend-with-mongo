const Product = require('../models/product.model');

const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
      }catch(error){
        res.status(500).json({message:error.message});
      }
}

const getProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
         if (product) {
          res.status(200).json(product);
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
      }catch(error){
        res.status(500).json({messga: error.messgae});
      }
}

const createProduct = async(req,res)=>{
    try{
        const products = await Product.create(req.body);
        res.status(200).json(products);
    
      } catch(error){
        res.status(500).json({message:error.message});
      }
}

const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
          res.status(404).json({message:"product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch(error){
        res.status(500).json({message:error.message});
      }
}

const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
          res.status(404).json("product not found");
        }
        // deletedProduct = await Product.findById(id);
        res.status(200).json({message: "Product Deleted successfully"});
    
      } catch(error){
        res.status(500).json({message:error.messgae});
      }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}