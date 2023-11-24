"use client"
import React, { useState } from 'react'
import Navigation from './Navigation'
import useMediaQuery from '@/app/hooks/useMediaQuery';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [Color, setColor] = useState("#fff");
    const [textColor, setTextColor] = useState("");
    const colorIn = () => {
        setColor("#FF4747")
        setTextColor("text-[#FF4747]")
    }
    const colorOut = () => {
        setColor("#fff")
        setTextColor("text-[#FFF]")
    }
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    const { signOut } = useClerk();
    const router = useRouter();

    return (
    // <nav className=' bg-[#212022] w-[268px] flex flex-col place-content-center items-center '>
    //     <div>gg</div>
    //     <div>ff</div>
    //     <div>fd</div>
    // </nav>
    <>
        {isAboveMediumScreens ? (
            <nav className=' bg-[#212022] rounded-3xl border border-[#436BF4]/[0.5] w-[300px] flex flex-col  py-[50px] justify-between'>
                <div className=' flex place-content-center w-full'>
                    <Link href={"/AllTasks"} className=' font-extrabold text-[40px] tracking-[7.5px] px-[30px]'>Tasks</Link>
                </div>
                <div className=' flex flex-col justify-between w-full '>
                    <Navigation/>
                </div>
                <button onClick={() => {signOut(() => {router.push("/signin")})}} onMouseEnter={colorIn} onMouseLeave={colorOut} className=' px-[30px] flex space-x-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.001 13.375L13.376 10M13.376 10L10.001 6.625M13.376 10H1.00098M1.00098 4.65402V4.60022C1.00098 3.3401 1.00098 2.70957 1.24621 2.22827C1.46193 1.80491 1.80588 1.46095 2.22925 1.24524C2.71055 1 3.34108 1 4.6012 1H15.4012C16.6613 1 17.2905 1 17.7718 1.24524C18.1952 1.46095 18.5403 1.80491 18.756 2.22827C19.001 2.7091 19.001 3.33887 19.001 4.59652V15.404C19.001 16.6617 19.001 17.2905 18.756 17.7714C18.5403 18.1947 18.1952 18.5393 17.7718 18.755C17.291 19 16.6621 19 15.4045 19H4.5975C3.33984 19 2.71008 19 2.22925 18.755C1.80588 18.5393 1.46193 18.1944 1.24621 17.771C1.00098 17.2897 1.00098 16.6601 1.00098 15.4V15.3438" stroke={Color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                    <p className={` text-[20px] ${textColor} font-medium leading-[24px] font-Poppins`}>Log Out</p>
                </button>
            </nav>

        ): ("")}
    </>
  )
}

export default Sidebar