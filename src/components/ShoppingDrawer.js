import tw from "twin.macro";

export default function ShoppingDrawer({ setDrawerOpen }) {
  return (
    <DrawerWrapper>
      <button onClick={() => setDrawerOpen(curr => !curr)}>X</button>
    </DrawerWrapper>
  );
}
const DrawerWrapper = tw.div`flex w-[25rem] h-screen flex-col`;
