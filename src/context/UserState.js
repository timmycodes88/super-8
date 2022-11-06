import { createContext, useReducer } from "react";
import userReducer from "./userReducer";

export const UserContext = createContext();

const initialUserState = {
  loading: false,
  uid: "",
  profile: {},
  friends: [],
  shoppingCart: [],
};

export default function UserState({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
