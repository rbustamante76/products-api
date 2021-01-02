const ProductUseCases = require('../use-cases/product');
const HTTPCodes = require('http-status-codes');

const GetProductById = {
  method: 'GET',
  route: '/products/:id',
  action,
}

async function action(ctx) {
  try {
    const { id } = ctx.params
    const response = await ProductUseCases.findById(id)
    if (response){
      ctx.body = response
      setHttpResponse(ctx, response, HTTPCodes.OK);
    }else {
      const message = 'Product whit id '+id+' not Found'
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

  module.exports =  GetProductById