const ProductModel  = require('../entities/product.model');

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

exports.findByDescription = async description => {
  try{
    const filter = `.*${description}.*`
    return await ProductModel.find({'description':{$regex : filter,'$options' : 'i' }})
  }catch(error){
    throw new Error(error)
  }
}

exports.findAll = async () => { 
  try{
    return await ProductModel.find()
  }catch(error){
    throw new Error(error)
  }
}

exports.create = async (product) =>{
  try{
    return await ProductModel.create(product)
  }catch(error){
    throw new Error(error)
  }
} 