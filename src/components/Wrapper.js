import tw from 'twin.macro'

export default function Wrapper({children}) {
    return (
        <StyledWrapper>{children}</StyledWrapper>
    )
}

const StyledWrapper = tw.div`mx-4`
