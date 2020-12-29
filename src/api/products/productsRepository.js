const ProductModel  = require('../../models/products');

exports.findById = async id => { 
  try{
    return await ProductModel.findOne({'id': id})
  }catch(error){
    throw new Error(error)
  }
}

exports.findByBrand = async brand => {
  try{
    const filter = `.*${brand}.*`
    return await ProductModel.find({'brand':{$regex : filter,'$options' : 'i' }})
  }catch(error){
    throw new Error(error)
  }
}