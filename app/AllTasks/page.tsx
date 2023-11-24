import Tasks from '@/components/Tasks'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-full '>
      <p className=' text-[30px] font-bold'>Hello, Fouad</p>
      <div className=' mt-14 h-[90%] overflow-auto no-scrollbar grid gap-10 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 w-full'>
        <Tasks title='Hello World' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' date='11/28/2023' type='completed' id={0}/>
        <Tasks title='Hello World' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' date='11/28/2023' type='incompleted' id={0}/>



        <Link href={"/AddTask"} className=' h-[16rem] bg-[#181818] rounded-2xl drop-shadow-lg flex space-x-[10px] place-content-center items-center hover:bg-[#3e3c3f] duration-200 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className=' text-[16px] font-medium'>Add task</p>
        </Link >
      </div>
    </div>
  )
}

export default page