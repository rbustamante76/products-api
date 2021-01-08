const GetProductById = require('../src/products/infrastructure/GETProductById.routes') 
const GetProductsByBrand = require('../src/products/infrastructure/GETProductsByBrand.routes')
const GetProductsByDescription = require('../src/products/infrastructure/GETProductsByDescription.routes') 
const GetProducts = require('../src/products/infrastructure/GETProducts.routes')
const PostProduct = require('../src/products/infrastructure/POSTProduct.routes')

const Router = require('koa-router')
const router = new Router()

router[GetProductById.method.toLowerCase()](GetProductById.route, GetProductById.action)
router[GetProductsByBrand.method.toLowerCase()](GetProductsByBrand.route, GetProductsByBrand.action)
router[GetProductsByDescription.method.toLowerCase()](GetProductsByDescription.route, GetProductsByDescription.action)
router[GetProducts.method.toLowerCase()](GetProducts.route, GetProducts.action)
router[PostProduct.method.toLowerCase()](PostProduct.route, PostProduct.action)

module.exports = router
