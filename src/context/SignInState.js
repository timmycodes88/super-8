import { createContext, useState } from "react";

export const SignInContext = createContext()

export default function SignInState({children}) {
    const [signedIn, setSignedIn] = useState(false)

    return(
        <SignInContext.Provider value={[signedIn, setSignedIn]}>
            {children}
        </SignInContext.Provider>
    )
}
