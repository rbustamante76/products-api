const app = require('../../../src/app')
const request = require('supertest')
const sinon = require('sinon')
const productController = require('../../../src/api/products/productsController')

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

    sinon.stub(productController, 'findById').returns(mockResult)

    const response = await request(app.callback()).get('/products/4')

   expect(response.status).toBe(200)

  })

  test('should respond not found get product by id ', async () => {

      sinon.stub(productController, 'findById').returns(null)

      const response = await request(app.callback()).get('/products/3000')

      expect(response.status).toBe(204)

  })

    test('should respond error get product by id  when id product is not numeric', async () => {

        const response = await request(app.callback()).get('/products/x')

        expect(response.status).toBe(500)

    })
})

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

   sinon.stub(productController, 'findByBrand').returns(mockResult)

   const response = await request(app.callback()).get('/products/brand/Marca')

  expect(response.status).toBe(200)

 })

 test('should respond not found get product by brand ', async () => {

     sinon.stub(productController, 'findByBrand').returns(null)

     const response = await request(app.callback()).get('/products/brand/Marca')

     expect(response.status).toBe(204)

 })


})
