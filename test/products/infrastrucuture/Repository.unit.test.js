const Repository = require('../../../src/products/infrastructure/Repository')
const ProductModel  = require('../../../src/products/entities/product.model');
const sinon = require('sinon')

describe('Test products by id repository', () => {
  beforeEach(() => {
    jest.useFakeTimers()
   });

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
    const result = await Repository.findById('4')
    
    expect(result).toEqual(expected)

  })

  test('should return undefined when product not exist', async()  => {

    sinon.stub(ProductModel, 'findOne').returns(null)
    const result = await Repository.findById('1000')

    expect(result).toEqual(null)

  })

 test('should return error when id is invalid', async()  => {
   await expect(Repository.findById('x')).rejects.toThrow()

  })

})

describe('Test products by brand repository', () => {

  beforeEach(() => {
    jest.useFakeTimers()
   });

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
    const result = await Repository.findByBrand('Marca')
    
    expect(result).toEqual(expected)

  })

  test('should return null when neither product contains a brand', async()  => {

    sinon.stub(ProductModel, 'find').returns([])
    const result = await Repository.findByBrand('xxx')

    expect(result).toEqual([])

  })

})

describe('Test products by description repository', () => {
    beforeEach(() => {
    jest.useFakeTimers()
   });

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
        const result = await Repository.findByDescription('Marca')
        
        expect(result).toEqual(expected)

    })

    test('should return null when neither product contains a description', async()  => {

        sinon.stub(ProductModel, 'find').returns([])
        const result = await Repository.findByDescription('xxx')

        expect(result).toEqual([])

    })

})
