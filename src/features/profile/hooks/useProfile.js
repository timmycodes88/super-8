import { useState } from "react";
import useUser from "../../../context/hooks/useUser";
import { SET_USERNAME } from "../../../context/types";
import { postUserName } from "../../../utils/FirebaseConfig";

export default function useProfile() {
  const [usernameValue, setUsernameValue] = useState("");
  const { dispatch, profile, uid } = useUser();

  //Calls Server and Updates profile.username in Context
  function setUsername() {
    postUserName(uid, usernameValue).then(_ => {
      dispatch({ type: SET_USERNAME, payload: usernameValue });
      setUsernameValue("");
    });
  }

  function changeUsername(e) {
    setUsernameValue(e.target.value);
  }

  return {
    usernameValue,
    changeUsername,
    profile,
    setUsername,
  };
}
