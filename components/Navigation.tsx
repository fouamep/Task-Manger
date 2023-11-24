"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const items = [
    {
        name:"All Tasks",
        href:"/AllTasks",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M19.001 15.7999V9.65855C19.001 9.06706 19.0005 8.77115 18.9274 8.49591C18.8626 8.252 18.7563 8.02117 18.6124 7.81259C18.45 7.57722 18.2242 7.38203 17.7718 6.99253L12.3718 2.34326C11.5319 1.6201 11.1119 1.2587 10.6393 1.12116C10.2228 0.999977 9.77891 0.999977 9.36245 1.12116C8.89017 1.25859 8.47081 1.61965 7.63213 2.34172L2.23035 6.99253C1.77795 7.38204 1.55227 7.57722 1.38989 7.81259C1.24599 8.02117 1.13884 8.252 1.07407 8.49591C1.00098 8.77115 1.00098 9.06705 1.00098 9.65855V15.7999C1.00098 16.8315 1.00098 17.3471 1.17225 17.754C1.40061 18.2964 1.83834 18.728 2.38965 18.9527C2.80313 19.1212 3.32732 19.1212 4.37569 19.1212C5.42405 19.1212 5.94882 19.1212 6.3623 18.9527C6.91362 18.728 7.35123 18.2965 7.57959 17.7541C7.75086 17.3472 7.75098 16.8314 7.75098 15.7998V14.6929C7.75098 13.4702 8.75834 12.4789 10.001 12.4789C11.2436 12.4789 12.251 13.4702 12.251 14.6929V15.7998C12.251 16.8314 12.251 17.3472 12.4222 17.7541C12.6506 18.2965 13.0883 18.728 13.6396 18.9527C14.0531 19.1212 14.5773 19.1212 15.6257 19.1212C16.6741 19.1212 17.1988 19.1212 17.6123 18.9527C18.1636 18.728 18.6012 18.2964 18.8296 17.754C19.0009 17.3471 19.001 16.8315 19.001 15.7999Z" stroke={"white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>),
        svg1: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M19.001 15.7999V9.65855C19.001 9.06706 19.0005 8.77115 18.9274 8.49591C18.8626 8.252 18.7563 8.02117 18.6124 7.81259C18.45 7.57722 18.2242 7.38203 17.7718 6.99253L12.3718 2.34326C11.5319 1.6201 11.1119 1.2587 10.6393 1.12116C10.2228 0.999977 9.77891 0.999977 9.36245 1.12116C8.89017 1.25859 8.47081 1.61965 7.63213 2.34172L2.23035 6.99253C1.77795 7.38204 1.55227 7.57722 1.38989 7.81259C1.24599 8.02117 1.13884 8.252 1.07407 8.49591C1.00098 8.77115 1.00098 9.06705 1.00098 9.65855V15.7999C1.00098 16.8315 1.00098 17.3471 1.17225 17.754C1.40061 18.2964 1.83834 18.728 2.38965 18.9527C2.80313 19.1212 3.32732 19.1212 4.37569 19.1212C5.42405 19.1212 5.94882 19.1212 6.3623 18.9527C6.91362 18.728 7.35123 18.2965 7.57959 17.7541C7.75086 17.3472 7.75098 16.8314 7.75098 15.7998V14.6929C7.75098 13.4702 8.75834 12.4789 10.001 12.4789C11.2436 12.4789 12.251 13.4702 12.251 14.6929V15.7998C12.251 16.8314 12.251 17.3472 12.4222 17.7541C12.6506 18.2965 13.0883 18.728 13.6396 18.9527C14.0531 19.1212 14.5773 19.1212 15.6257 19.1212C16.6741 19.1212 17.1988 19.1212 17.6123 18.9527C18.1636 18.728 18.6012 18.2964 18.8296 17.754C19.0009 17.3471 19.001 16.8315 19.001 15.7999Z" stroke={"#436BF4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>)
    },
    {
        name:"Completed",
        href:"/Completed",
        svg:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
                <path d="M4 17H11M20 14L16 18L14 16M4 12H15M4 7H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>),
        svg1:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
                <path d="M4 17H11M20 14L16 18L14 16M4 12H15M4 7H15" stroke="#436BF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>)
    },
    {
        name:"Add Task",
        href:"/AddTask",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
        svg1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="#436BF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    },
]

const Navigation = () => {
    const CurrentNav = ""
    const pathName = usePathname();
  return (
    <div className=' font-Poppins flex flex-col space-y-[20px]'>
        {items.map((nav, index):any => {
            return (
                <div key={index} className={` ${pathName === nav.href ? ("bg-[#436BF4]/20") : ("hover:bg-[#181818]/[0.8] ease-in-out transition-all duration-300")} relative`}>
                    {pathName === nav.href ? (
                        <>
                            <div className=' w-[8px] h-full bg-[#436BF4] right-0 rounded-l-lg absolute'/>
                            <Link  className=' flex space-x-[10px] items-center px-[30px] py-3 text-center ' href={nav.href}>
                                {nav.svg1}
                                <p className={` text-[#436BF4] text-[20px] font-medium leading-[24px]`}>{nav.name}</p>
                            </Link>
                        </>
                    ) : (
                        <Link  className=' px-[30px] flex space-x-[10px] items-center py-3 text-center ' href={nav.href}>
                            {nav.svg}
                            <p className={` text-[20px] font-medium leading-[24px]`}>{nav.name}</p>
                        </Link>
                    ) }
                </div>
            )
        })}
    </div>
  )
}

export default Navigation