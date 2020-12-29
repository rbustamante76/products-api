const router = require('koa-router')()
const productController = require('./productsController');


router.get('/:id', async ctx => {
  try {
    const { id } = ctx.params
    const response = await productController.findById(id)
    if (response){
      ctx.body = response
    }else {
      ctx.status = 204
      ctx. body = bodyResponseBuild(ctx.status, 'Product whit id '+id+' not Found')
    }
    console.log(ctx.status)
      }catch(error){
        ctx.status = 500
        ctx. body = ctx. body = bodyResponseBuild(ctx.status, error.message)
    }
  })

  router.get('/brand/:brand', async ctx => {
    try {
      const { brand } = ctx.params
      console.log(brand)
      const response = await productController.findByBrand(brand)
      if (response){
        ctx.body = response
      }else {
        ctx.status = 204
        ctx. body = bodyResponseBuild(ctx.status, 'Products with contains ' +brand+ ' in brand not fround')
      }
      console.log(ctx.status)
        }catch(error){
          ctx.status = 500
          ctx. body = bodyResponseBuild(ctx.status, error.message)
      }
    })

    const bodyResponseBuild = (statusCode,message) => {
      return { statusCode, message}
    }

module.exports = router.routes()
