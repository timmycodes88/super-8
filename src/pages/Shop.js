import tw from "twin.macro";
import { ReactComponent as FilterIcon } from "../assets/svg/filter.svg";
import Products from "../features/shop/Products";
//Images

export default function Shop() {
  return (
    <>
      <ShopHeaderRow>
        <ShopTitle>Shop</ShopTitle>
        <StyledFilterIcon />
      </ShopHeaderRow>
      <ProductGrid>
        <Products />
      </ProductGrid>
    </>
  );
}

const ShopHeaderRow = tw.div`flex justify-between py-12`;
const ShopTitle = tw.h1`text-3xl`;
const ProductGrid = tw.div`grid grid-cols-6 gap-x-6`;

const StyledFilterIcon = tw(FilterIcon)`h-6`;
