const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Repository = require('../../../src/products/infrastructure/Repository')
const ProductUseCases = require('../../../src/products/use-cases/product')
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

describe('Test products by id use cases', () => {

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

    sinon.stub(Repository, 'findById').returns(expected)
    const result = await ProductUseCases.findById('4')

    expect(result).toEqual(expected)

  })

  test('should return undefined when product not exist', async()  => {

    sinon.stub(Repository, 'findById').returns(null)
    const result = await ProductUseCases.findById('1000')

    expect(result).toEqual(null)

  })

 test('should return udefined when id is invalid', async()  => {

   await expect(ProductUseCases.findById('x')).rejects.toThrow()

  })

})

describe('Test products by brand use cases', () => {

  afterEach(async () => {
    sinon.restore()
  })

  test('should return a products by brand', async()  => {
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

    sinon.stub(Repository, 'findByBrand').returns(expected)
    const result = await ProductUseCases.findByBrand('Marca')

    expect(result).toEqual(expected)

  })

  test('should return empty when neithert product contains brand', async()  => {

    sinon.stub(Repository, 'findByBrand').returns([])
    const result = await ProductUseCases.findByBrand('xxx')

    expect(result).toEqual([])

  })

})

describe('Test products by description use cases', () => {

  afterEach(async () => {
    sinon.restore()
  })

  test('should return a products by description', async()  => {
    const expected = [{
      _id:'5fe7a9f5bfeda8b21a8e74cb',
      id: 4,
      brand: 'Marca2',
      description: 'Refrigerador',
      image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
      price: 20000
    }
   ]

    sinon.stub(Repository, 'findByDescription').returns(expected)
    const result = await ProductUseCases.findByDescription('Refri')

    expect(result).toEqual(expected)

  })

  test('should return null when neithert product contains description', async()  => {

    sinon.stub(Repository, 'findByDescription').returns([])
    const result = await ProductUseCases.findByDescription('xxx')

    expect(result).toEqual([])

  })

})

describe('Test get products use cases', () => {

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

    sinon.stub(Repository, 'findAll').returns(expected)
    const result = await ProductUseCases.findAll()

    expect(result).toEqual(expected)

  })

})
