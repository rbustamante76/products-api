const ProductUseCases = require('../use-cases/product');
const { validateQuery } = require('../adapters/GETProductsByBrand.validators')
const HTTPCodes = require('http-status-codes');

const GetProductsByBrand = {
  method: 'GET',
  route: '/products/brand/:brand',
  action,
}

async function action(ctx) {
  try {
    const { brand } = ctx.params
    const validation = validateQuery({ brand });
    
    if (validation.error) {
      setHttpResponse(ctx, { error: validation.error }, HTTPCodes.BAD_REQUEST);
      return;
    }

    const response = await ProductUseCases.findByBrand(brand) 
    setHttpResponse(ctx, response, HTTPCodes.OK);
  
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