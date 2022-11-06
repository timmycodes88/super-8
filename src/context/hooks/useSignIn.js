import { useContext } from "react";
import { SignInContext } from "../SignInState";
import { auth, setupNewUser } from "../../utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { UserContext } from "../UserState";
import { SET_UID } from "../types";

export default function useSignIn() {
  const [signedIn, setSignedIn] = useContext(SignInContext);
  const { dispatch } = useContext(UserContext);

  function signIn() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(res => {
        const uid = res.user.uid;
        dispatch({ type: SET_UID, payload: uid });
        setupNewUser(uid).then(res => {
          setSignedIn(true);
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  function signOutFunc() {
    signOut(auth)
      .then(res => {
        setSignedIn(false);
      })
      .catch(err => {
        alert(err);
      });
  }

  return {
    isSignedIn: signedIn,
    signIn,
    signOut: signOutFunc,
  };
}
