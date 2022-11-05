import { useState } from 'react';
import MainApp from './MainApp';
import SignIn from './pages/SignIn';

export default function App() {
  const [signedIn] = useState(false)

  return (
    <>
    {signedIn ? <MainApp /> : <SignIn />}
    </>
  );
}
