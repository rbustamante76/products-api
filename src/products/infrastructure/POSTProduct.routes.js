const ProductUseCases = require('../use-cases/product');
const {validateQuery} = require('../validators/POSTProduct.validators')
const HTTPCodes = require('http-status-codes');

const PostProduct = {
  method: 'POST',
  route: '/products',
  action,
}

async function action(ctx) {
  try {
    const requestBody = ctx.request.body;
    const validation = validateQuery(requestBody);
    
    if (validation.error) {
      setHttpResponse(ctx, { error: validation.error }, HTTPCodes.BAD_REQUEST);
      return;
    }

    const response = await ProductUseCases.insertProduct(requestBody) 
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

  module.exports =  PostProduct