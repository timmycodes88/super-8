import tw, { styled, css } from "twin.macro";
import Image from "../assets/images/bg.png";
import SignInBox from "../features/signin/SignInBox";

export default function SignIn() {
  return (
    <Body>
      <ImageContainer Image={Image}>T W</ImageContainer>
      <SignInContainer>
        <SignInBox />
      </SignInContainer>
    </Body>
  );
}

const Body = tw.div`flex flex-col md:flex-row h-full`;
const ImageContainer = styled.div(({ Image }) => [
  tw`w-full h-screen md:w-1/2 lg:w-3/5 bg-cover flex justify-center items-center font-bold text-white text-9xl  sm:text-[16rem] md:text-[12rem]  lg:text-[20rem]`,
  css`
    background-image: url(${Image});
  `,
]);

const SignInContainer = tw.div`w-full md:w-1/2 lg:w-2/5  px-8 bg-gray-50 h-screen flex flex-col justify-center`;
