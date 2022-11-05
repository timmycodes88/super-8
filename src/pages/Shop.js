import tw from 'twin.macro'

export default function Shop() {
    
    const products = [
        {
            name: 'Shoes',
            image: 'WILL BE A AN IMAGE'
        },
        {
            name: 'Hat',
            image: 'WILL BE A AN IMAGE'
        },
        {
            name: 'Bucket Hat',
            image: 'WILL BE A AN IMAGE'
        },
        {
            name: 'Hoodie',
            image: 'WILL BE A AN IMAGE'
        },
    ]
    
    return (
      <>
          <ShopHeader>Shop</ShopHeader>
          <ProductGrid>
            {
                products.map((product) => {
                    return (
                        <ProductContainer>
                            {product.name}
                        </ProductContainer>
                    )
                })
            }

          </ProductGrid>
      </>
    )
  }
  
  const ShopHeader = tw.h1`text-3xl`
  const ProductGrid = tw.div`grid grid-cols-6`

  const ProductContainer = tw.div`p-8 border-4 border-blue-400`
