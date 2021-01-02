const ProductUseCases = require('../use-cases/product');
const HTTPCodes = require('http-status-codes');

const GetProductsByBrand = {
  method: 'GET',
  route: '/products/brand/:brand',
  action,
}

async function action(ctx) {
  try {
    const { brand } = ctx.params
    const response = await ProductUseCases.findByBrand(brand)
    if (response){
      ctx.body = response
      setHttpResponse(ctx, response, HTTPCodes.OK);
    }else {
      const message = 'Product whit brand '+brand+' not Found'
      console.log(message)
      ctx.status = 204
      ctx.body = {
        codeStatus: ctx.status,
        message
      }
      setHttpResponse(ctx, response, HTTPCodes.NO_CONTENT);
    }
    console.log(ctx.status)
      }catch(error){
        ctx.throw(
          HTTPCodes.INTERNAL_SERVER_ERROR,
          HTTPCodes.getStatusText(HTTPCodes.INTERNAL_SERVER_ERROR),
        )
    }
  }

  function setHttpResponse(ctx, body, status) {
    ctx.body = body;
    ctx.status = status;
  }

  module.exports =  GetProductsByBrand