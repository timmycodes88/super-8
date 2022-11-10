import { useState } from "react";
import tw from "twin.macro";
import useSignIn from "../../context/hooks/useSignIn";

export default function SignInBox() {
  const { signIn } = useSignIn();
  //Sign in or Create Account
  const [showSignIn, setShowSignIn] = useState(true);
  const toggleSignIn = () => setShowSignIn(!showSignIn);

  return (
    <Box>
      <FormSpacer>
        <HeaderText>{showSignIn ? "Sign In" : "Create Account"}</HeaderText>

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
        <ToggleSignIn onClick={toggleSignIn}>
          {showSignIn ? "Create Account" : "Sign In"}
        </ToggleSignIn>
      </FormSpacer>
    </Box>
  );
}

const Box = tw.div`border-2 py-8 px-20 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-400`;
const FormSpacer = tw.div`flex flex-col items-center gap-8`;

const HeaderText = tw.span`mx-auto items-center text-white text-2xl font-semibold`;

const InputStyles = `w-full outline-none rounded-lg py-2 px-5`;
const Email = tw.input`${InputStyles}`;
const Username = tw.input`${InputStyles}`;
const Password = tw.input`${InputStyles}`;
const PasswordConfirm = tw.input`${InputStyles}`;
const SubmitButton = tw.button`px-8 py-2 rounded-lg bg-gradient-to-l from-blue-900 to-blue-400 text-white transition-all ease-in-out hover:scale-110`;
const ToggleSignIn = tw.button` w-28 text-white`;
