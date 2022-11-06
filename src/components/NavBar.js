import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/svg/cart.svg";
import useSignIn from "../context/hooks/useSignIn";

export default function NavBar({ setDrawerOpen }) {
  const navigate = useNavigate();

  const { signOut } = useSignIn();

  return (
    <Bar>
      <Logo>TW App</Logo>
      <Nav>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/shop")}>Shop</Button>
        <Button onClick={() => navigate("/profile")}>Profile</Button>
        <Button onClick={signOut}>Sign Out</Button>
        <DrawerButton onClick={() => setDrawerOpen(curr => !curr)}>
          <StyledCartIcon />
        </DrawerButton>
      </Nav>
    </Bar>
  );
}

const Bar = tw.div`flex items-center justify-around sticky top-0 w-full h-24 bg-red-500`;
const Logo = tw.h1`text-5xl text-white`;
const Nav = tw.div`flex gap-x-8 text-white underline text-xl`;

const Button = tw.button`items-baseline`;
const DrawerButton = tw.button``;
const StyledCartIcon = tw(CartIcon)`h-10`;
