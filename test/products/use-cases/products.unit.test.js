const Repository = require('../../../src/products/infrastructure/Repository')
const ProductUseCases = require('../../../src/products/use-cases/product')
const sinon = require('sinon')

describe('Test products by id controller', () => {

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
    console.log(result)
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

describe('Test products by brand controller', () => {

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
    console.log(result)
    expect(result).toEqual(expected)

  })

  test('should return null when neithert product contains brand', async()  => {

    sinon.stub(Repository, 'findByBrand').returns(null)
    const result = await ProductUseCases.findByBrand('xxx')

    expect(result).toEqual(null)

  })

})
