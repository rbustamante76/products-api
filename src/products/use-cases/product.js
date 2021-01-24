const ProductRepository = require('../infrastructure/ProductRepository')

exports.searchProductById = async id => { 
  return await ProductRepository.findById(id)
}

exports.searchProductsByBrand = async brand => {
  return await ProductRepository.findByBrand(brand)
}

exports.searchProductsByDescription = async description => {
  return await ProductRepository.findByDescription(description)
 }

 exports.listAllProducts = async () => {
  return await ProductRepository.findAll()
 }

 exports.insertProduct = async (product) => {
   return await ProductRepository.create(product)
 }
