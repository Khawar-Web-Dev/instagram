import { useEffect, useState } from "react"
import { AuthLayout, RootLayout } from "./layoutExports"

const LayoutSelector = () => {

    const [authScreen, setAuthScreen] = useState<'auth' | 'root'>('auth')

    useEffect(() => setAuthScreen('root'), [])

    return (
        <>
            {authScreen === 'auth' ? (
                <AuthLayout />
            ) : (
                <RootLayout />
            )}
        </>
    )
}

export default LayoutSelector