import tw from "twin.macro";
//Hooks
import useProducts from "./hooks/useProducts";

export default function Products() {
  const products = useProducts();
  return (
    <>
      {products.map(product => {
        return (
          <ProductContainer>
            <ProductImage src={product.image} />
            {product.name}
          </ProductContainer>
        );
      })}
    </>
  );
}

const ProductContainer = tw.div`p-8 border-2 border-gray-500 rounded-3xl text-center font-semibold hover:cursor-pointer`;
const ProductImage = tw.img`h-48`;
