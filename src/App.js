import MainApp from "./MainApp";
import SignIn from "./pages/SignIn";
import useSignIn from "./context/hooks/useSignIn";

export default function App() {
  const { isSignedIn } = useSignIn(); //Better auth with server

  return <>{isSignedIn ? <MainApp /> : <SignIn />}</>;
}
