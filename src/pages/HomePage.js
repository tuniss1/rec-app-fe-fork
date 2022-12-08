import React, { useEffect, useState, } from "react";

import LockScreen from "../components/LockScreen";
import MainScreen from "./MainScreen";

function HomePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [passcode, setPasscode] = useState('')

    const loginPasscode = '1234';

    useEffect(() => {
        if (passcode.length === loginPasscode.length) {
            if (passcode !== loginPasscode) {
                const bounce = document.getElementById('bounce');
                bounce.style.animation = 'wobble 0.4s ease'
                bounce.style.animationFillMode = 'forwards'
                setTimeout(() => {
                    bounce.style.animation = 'none'
                    bounce.style.animationFillMode = 'none'
                    setPasscode('')
                }, 350)
            }
            else setIsAuthenticated(true);
        }
    }, [passcode])


    if (!isAuthenticated) {
        return <LockScreen passcode={passcode} setPasscode={setPasscode} setIsAuthenticated={setIsAuthenticated} />
    }

    return (
        <MainScreen/>
    );
}

export default HomePage;
