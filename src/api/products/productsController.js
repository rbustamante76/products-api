const productsRepository = require('./productsRepository')
exports.findById = async id => { 
  
  return await productsRepository.findById(id)
}

exports.findByBrand = async brand => {
  
 return await productsRepository.findByBrand(brand)
}
