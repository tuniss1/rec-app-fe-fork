import React, { useEffect, useState, } from "react";

import rec_logo from "../img/rec_logo.png";
import LockScreen from "../components/LockScreen";

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
        <div className="bg-[#ee5d00] h-screen w-screen flex flex-col items-center ">
            <div className="my-auto flex flex-col items-center ">
                <img
                    src={rec_logo}
                    alt="logo"
                    className=" sm:w-[400px] sm:h-[420px] w-[62%] h-auto "
                />
                <p className="sm:text-3xl font-extrabold sm:mt-[32px] sm:w-[296px] mt-[24px] w-[312px] text-[28px] text-center text-white leading-[30px]">
                    {" "}
                    WEBSITE IS UNDER DEVELOPMENT
                </p>
                <p className="font-normal sm:mt-[32px] sm:w-[360px] mt-[24px] w-[342px] text-[16px] text-white text-center">
                    {" "}
                    If you have cardboard boxes, aluminum cans or (unused) plastic bottles
                    you want to sell, please contact us +84 825 251 567
                </p>
                {/* <Link class=" hover:underline bg-white  text-gray-700 font-bold py-1 px-4 rounded mt-3" to="/">Month</Link> */}
            </div>
        </div>
    );
}

export default HomePage;
