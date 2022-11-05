import tw from 'twin.macro'
import { ReactComponent as FilterIcon } from '../assets/svg/filter.svg';
//Images
import PushP from '../assets/images/products/pushp.jpg'

export default function Shop() {
    
    const products = [
        {
            name: 'Shoes',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc'
        },
        {
            name: 'Hat',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc'
        },
        {
            name: 'Bucket Hat',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc'
        },
        {
            name: 'Hoodie',
            image: PushP
        },
    ]
    
    // modal with product onClick?

    return (
      <>
          <ShopHeaderRow>
              <ShopTitle>Shop</ShopTitle>
              <StyledFilterIcon/>
          </ShopHeaderRow>
          <ProductGrid>
            {
                products.map((product) => {
                    return (
                        <ProductContainer>
                            <ProductImage src={product.image}/>
                            {product.name}
                        </ProductContainer>
                    )
                })
            }
          </ProductGrid>
      </>
    )
  }

  const ShopHeaderRow = tw.div`flex justify-between py-12`
  const ShopTitle = tw.h1`text-3xl`
  const ProductGrid = tw.div`grid grid-cols-6 gap-x-6`

  const ProductContainer = tw.div`p-8 border-2 border-gray-500 rounded-3xl text-center font-semibold hover:cursor-pointer`
  const ProductImage = tw.img`h-48`

  const StyledFilterIcon = tw(FilterIcon)`h-6`
