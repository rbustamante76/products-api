const ProductUseCases = require('../use-cases/product');
const HTTPCodes = require('http-status-codes');

const GetProducts = {
  method: 'GET',
  route: '/products',
  action,
}

async function action(ctx) {
  try {
    const response = await ProductUseCases.listAllProducts()

    setHttpResponse(ctx, response, HTTPCodes.OK)
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

  module.exports =  GetProducts