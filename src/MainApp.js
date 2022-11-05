import tw from 'twin.macro'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Wrapper from './components/Wrapper';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile';
import Shop from './pages/Shop';

export default function MainApp() {
    return (
      <Body>
        <NavBar />
        <Wrapper>
          <Routes>
            <>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/shop' element={<Shop />}/>
            </>
          </Routes>
        </Wrapper>
      </Body>
    );
  }
  
  const Body = tw.div``
