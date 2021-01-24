const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const ProductRepository = require('../../../src/products/infrastructure/ProductRepository')
const ProductModel  = require('../../../src/products/entities/product.model');
const sinon = require('sinon')

let mongoServer;
const opts = { useUnifiedTopology: true, useNewUrlParser: true };
beforeAll(async () => {
mongoServer = new MongoMemoryServer();
const mongoUri = await mongoServer.getUri();
await mongoose.connect(mongoUri, opts, (err) => {
if (err) console.error(err);
});

});
afterAll(async () => {
await mongoose.disconnect();
await mongoServer.stop();
});

describe('Test products by id repository', () => {

  afterEach(async () => {
    sinon.restore()
  })

  test('should return a product by id', async()  => {
    const expected = {
      _id:'5fe7a9f5bfeda8b21a8e74cb',
      id: 4,
      brand: 'Marca2',
      description: 'Refrigerador',
      image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
      price: 20000
    }

    sinon.stub(ProductModel, 'findOne').returns(expected)
    const result = await ProductRepository.findById('4')

    expect(result).toEqual(expected)

  })

  test('should return undefined when product not exist', async()  => {

    sinon.stub(ProductModel, 'findOne').returns(null)
    const result = await ProductRepository.findById('1000')

    expect(result).toEqual(null)

  })

 test('should return error when id is invalid', async()  => {
   await expect(ProductRepository.findById('x')).rejects.toThrow()

  })

})

describe('Test products by brand repository', () => {

  afterEach(async () => {
    sinon.restore()
  })

  test('should return a product by brand', async()  => {
    const expected = [{
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

    sinon.stub(ProductModel, 'find').returns(expected)
    const result = await ProductRepository.findByBrand('Marca')

    expect(result).toEqual(expected)

  })

  test('should return null when neither product contains a brand', async()  => {

    sinon.stub(ProductModel, 'find').returns([])
    const result = await ProductRepository.findByBrand('xxx')

    expect(result).toEqual([])

  })

})

describe('Test products by description repository', () => {


    afterEach(async () => {
        sinon.restore()
    })

    test('should return a product by description', async()  => {
        const expected = [{
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

        sinon.stub(ProductModel, 'find').returns(expected)
        const result = await ProductRepository.findByDescription('Marca')

        expect(result).toEqual(expected)

    })

    test('should return null when neither product contains a description', async()  => {

        sinon.stub(ProductModel, 'find').returns([])
        const result = await ProductRepository.findByDescription('xxx')

        expect(result).toEqual([])

    })

})

describe('Test get all products repository', () => {

  afterEach(async () => {
    sinon.restore()
  })

  test('should return all products', async()  => {
    const expected = [{
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

    sinon.stub(ProductModel, 'find').returns(expected)
    const result = await ProductRepository.findAll('Marca')

    expect(result).toEqual(expected)

  })
})  
