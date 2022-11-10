import { useContext } from "react";
import { SignInContext } from "../SignInState";
import { auth, setupNewUser } from "../../utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { SET_UID } from "../types";
import useUser from "./useUser";

export default function useSignIn() {
  const [signedIn, setSignedIn] = useContext(SignInContext);
  const { dispatch } = useUser();

  function signIn() {
    signInWithPopup(auth, new GoogleAuthProvider()).then(res => {
      const uid = res.user.uid;
      dispatch({ type: SET_UID, payload: uid });
      setupNewUser(uid).then(_ => {
        setSignedIn(true);
      });
    });
  }

  function signOutFunc() {
    signOut(auth).then(res => {
      setSignedIn(false);
    });
  }

  return {
    isSignedIn: signedIn,
    signIn,
    signOut: signOutFunc,
  };
}
