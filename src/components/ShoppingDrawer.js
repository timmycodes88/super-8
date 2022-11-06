import tw from "twin.macro";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";

export default function ShoppingDrawer({ setDrawerOpen }) {
  return (
    <DrawerWrapper>
      <button onClick={() => setDrawerOpen(curr => !curr)}>
        <StyledCloseIcon />
      </button>
    </DrawerWrapper>
  );
}
const DrawerWrapper = tw.div`flex w-[25rem] h-screen flex-col`;
const StyledCloseIcon = tw(CloseIcon)`text-red-600 hover:text-red-400 h-10`;
