const app = require('../../../src/app')
const request = require('supertest')
const sinon = require('sinon')
const ProductUseCases = require('../../../src/products/use-cases/product')

describe('routes:  get products by description', () => {

  afterEach(() => {
   sinon.restore()
  });


 test('should respond success get products by description ', async () => {
   const mockResult = [{
     _id:'5fe7a9f5bfeda8b21a8e74cb',
     id: 4,
     brand: 'Marca2',
     description: 'Refrigerador',
     image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
     price: 20000
   }
  ]

   sinon.stub(ProductUseCases, 'searchProductsByDescription').returns(mockResult)

   const response = await request(app.callback()).get('/products/description/Refri')

  expect(response.status).toBe(200)

 })

 test('should respond not found get product by description ', async () => {

     sinon.stub(ProductUseCases, 'searchProductsByDescription').returns([])

     const response = await request(app.callback()).get('/products/description/Refri')

     expect(response.status).toBe(200)

 })


})
