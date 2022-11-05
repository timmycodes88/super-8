import tw, { styled, css } from "twin.macro"
import Image from '../assets/images/name.png'

export default function SignIn() {
  return (
    <Body>
        <ImageContainer Image={Image}>
            as
        </ImageContainer>
        <SignInContainer>
            fdssfd
        </SignInContainer>
    </Body>
  )
}

const Body = tw.div`flex flex-col md:flex-row`
const ImageContainer = styled.div(({ Image }) => [
    tw`w-full md:w-1/2 lg:w-3/5 bg-cover`,
    css`
        background-image: url(${Image});
    `,
])
const SignInContainer = tw.div`w-full md:w-1/2 lg:w-2/5 bg-purple-600`
