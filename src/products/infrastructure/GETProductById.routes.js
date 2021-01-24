const ProductUseCases = require('../use-cases/product');
const {validateQuery} = require('../validators/GETProductById.validators')
const HTTPCodes = require('http-status-codes');

const GetProductById = {
  method: 'GET',
  route: '/products/:id',
  action,
}

async function action(ctx) {
  try {

    let body = {}
    const { id } = ctx.params

    const validation = validateQuery({ id });
    if (validation.error) {
      setHttpResponse(ctx, { error: validation.error }, HTTPCodes.BAD_REQUEST);
      return;
    }
    const response = await ProductUseCases.getProductById(id)
    if (response){
      body = response
    }
    setHttpResponse(ctx, body, HTTPCodes.OK);
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