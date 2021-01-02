const GetProductById = require('../src/products/infrastructure/GETProductById.routes') 
const GetProductsByBrand = require('../src/products/infrastructure/GetProductsByBrand.routes') 
const Router = require('koa-router')

const router = new Router()

router[GetProductById.method.toLowerCase()](GetProductById.route, GetProductById.action)
router[GetProductsByBrand.method.toLowerCase()](GetProductsByBrand.route, GetProductsByBrand.action)

module.exports = router
