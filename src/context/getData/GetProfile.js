import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { getProfileData } from "../../utils/FirebaseConfig";
import { SET_LOADING, SET_PROFILE } from "../types";
import { UserContext } from "../UserState";

export default function GetProfile() {
  const { dispatch, uid, loading } = useContext(UserContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getProfileData(uid).then(res => {
      dispatch({ type: SET_PROFILE, payload: res });
    });
  }, [dispatch, uid]);

  if (loading) return <Loading />;
}
