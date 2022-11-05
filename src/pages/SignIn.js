import { useState } from "react";
import tw, { styled, css } from "twin.macro";
import Image from "../assets/images/BLISS.png";
import useSignIn from "../context/hooks/useSignIn";

export default function SignIn() {
  const { signIn } = useSignIn();

  const [showSignIn, setShowSignIn] = useState(true);

  //     @container sidebar (min-width: 400px) {
  //   .card {
  //     display: grid;
  //     grid-template-columns: 2fr 1fr;
  //   }
  // }

  return (
    <Body>
      <ImageContainer Image={Image}>T W</ImageContainer>
      <SignInContainer>
        <SignInBox>
          <FormSpacer>
            <Label>{showSignIn ? "Sign In" : "Create Account"}</Label>
            {!showSignIn && <Email type="email" placeholder="E-Mail"></Email>}
            <Username placeholder="Username"></Username>
            <Password type="password" placeholder="Password"></Password>
            {!showSignIn && (
              <PasswordConfirm
                type="password"
                placeholder="Confirm Password"
              ></PasswordConfirm>
            )}
            <SubmitButton onClick={signIn}>
              {showSignIn ? "Sign In" : "Create Account"}
            </SubmitButton>
            <ToggleSignIn onClick={() => setShowSignIn(!showSignIn)}>
              {showSignIn ? "Create Account" : "Sign In"}
            </ToggleSignIn>
          </FormSpacer>
        </SignInBox>
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

const FormSpacer = tw.div`flex flex-col items-center gap-8`;

const SignInContainer = tw.div`w-full md:w-1/2 lg:w-2/5  px-8 bg-green-500 h-screen flex flex-col justify-center`;
const SignInBox = tw.div`border-4 border-purple-800 py-8 px-20 rounded-3xl bg-purple-500`;
const Label = tw.span`mx-auto items-center text-white text-2xl font-semibold`;
const InputStyles = `w-full outline-none rounded-lg py-2 px-5`;
const Email = tw.input`${InputStyles}`;
const Username = tw.input`${InputStyles}`;
const Password = tw.input`${InputStyles}`;
const PasswordConfirm = tw.input`${InputStyles}`;
const SubmitButton = tw.button`px-8 py-2 rounded-lg bg-purple-800 text-white transition-all ease-in-out hover:scale-110`;
const ToggleSignIn = tw.button` w-28 text-white`;
