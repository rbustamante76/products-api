const Router = require('koa-router')
const products = require('./api/products/routes')

const router = new Router()

router.use('/products', products)

module.exports = router