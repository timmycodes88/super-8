
import MainApp from './MainApp';
import SignIn from './pages/SignIn';
import useSignIn from './utils/hooks/useSignIn';

export default function App() {
  
  const { isSignedIn } = useSignIn()

  return (
    <>
    {isSignedIn ? <MainApp /> : <SignIn />}
    </>
  );
}
