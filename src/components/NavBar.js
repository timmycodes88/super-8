import tw from 'twin.macro'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Bar>
        <Logo>
         TW App
        </Logo>
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/profile'>Profile</Link>
            <Button onClick={() => console.log('sign out func')}>Sign Out</Button>
        </Nav>
    </Bar>
  )
}

const Bar = tw.div`flex items-center justify-around sticky top-0 w-full h-24 bg-red-500`
const Logo = tw.h1`text-5xl text-white`
const Nav = tw.div`flex gap-x-8 text-white underline text-xl`

const Button = tw.button``
