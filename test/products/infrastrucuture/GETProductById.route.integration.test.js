const app = require('../../../src/app')
const request = require('supertest')
const sinon = require('sinon')
const ProductUseCases = require('../../../src/products/use-cases/product')

describe('routes:  get products by id', () => {

   afterEach(() => {
    sinon.restore()
   });


  test('should respond success get product by id ', async () => {
    const mockResult = {
      _id:'5fe7a9f5bfeda8b21a8e74cb',
      id: 4,
      brand: 'Marca2',
      description: 'Refrigerador',
      image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
      price: 20000
    }

    sinon.stub(ProductUseCases, 'searchProductById').returns(mockResult)

    const response = await request(app.callback()).get('/products/4')

   expect(response.status).toBe(200)

  })

  test('should respond not found get product by id ', async () => {

      sinon.stub(ProductUseCases, 'searchProductById').returns(null)

      const response = await request(app.callback()).get('/products/3000')

      expect(response.status).toBe(200)

  })

    test('should respond bad request get product by id  when product id is not numeric', async () => {

        const response = await request(app.callback()).get('/products/x')

        expect(response.status).toBe(400)

    })

})
