const Repository = require('../infrastructure/Repository')
exports.findById = async id => { 
  
  return await Repository.findById(id)
}

exports.findByBrand = async brand => {
  
 return await Repository.findByBrand(brand)
}
