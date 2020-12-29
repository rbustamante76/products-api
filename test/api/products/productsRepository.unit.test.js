const productsRepository = require('../../../src/api/products/productsRepository')
const sinon = require('sinon')

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

    sinon.stub(productsRepository, 'findById').returns(expected)
    const result = await productsRepository.findById('4')
    console.log(result)
    expect(result).toEqual(expected)

  })

  test('should return undefined when product not exist', async()  => {

    sinon.stub(productsRepository, 'findById').returns(null)
    const result = await productsRepository.findById('1000')

    expect(result).toEqual(null)

  })

  test('should return error when id is invalid', async()  => {
   await expect(productsRepository.findById('x')).rejects.toThrow()

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

    sinon.stub(productsRepository, 'findByBrand').returns(expected)
    const result = await productsRepository.findByBrand('Marca')
    console.log(result)
    expect(result).toEqual(expected)

  })

  test('should return null when neither product contains a brand', async()  => {

    sinon.stub(productsRepository, 'findByBrand').returns(null)
    const result = await productsRepository.findByBrand('xxx')

    expect(result).toEqual(null)

  })

})
