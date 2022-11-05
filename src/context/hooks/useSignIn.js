import { useContext } from "react";
import { SignInContext } from "../SignInState";


export default function useSignIn() {
  const [signedIn, setSignedIn] = useContext(SignInContext)

    function signIn() {
        setSignedIn(true)
    }

    function signOut() {
        setSignedIn(false)
    }

  return {
    isSignedIn: signedIn,
    signIn,
    signOut,
  }
}
