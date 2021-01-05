const app = require('../../../src/app')
const request = require('supertest')
const sinon = require('sinon')
const ProductUseCases = require('../../../src/products/use-cases/product')

describe('routes:  get products by brand', () => {

  afterEach(() => {
   sinon.restore()
  });


 test('should respond success get products by brand ', async () => {
   const mockResult = [{
     _id:'5fe7a9f5bfeda8b21a8e74cb',
     id: 4,
     brand: 'Marca2',
     description: 'Refrigerador',
     image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
     price: 20000
   },
   {
    _id:'5fe7a9f5bfeda8b21a8e74c9',
    id: 3,
    brand: 'Marca1',
    description: 'Horno Gas Premium',
    image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 30000
  }
  ]

   sinon.stub(ProductUseCases, 'findByBrand').returns(mockResult)

   const response = await request(app.callback()).get('/products/brand/Marca')

  expect(response.status).toBe(200)


 })

 test('should respond not found get product by brand ', async () => {

     sinon.stub(ProductUseCases, 'findByBrand').returns([])

     const response = await request(app.callback()).get('/products/brand/xxx')

     expect(response.status).toBe(200)

 })


})
