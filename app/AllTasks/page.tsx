"use client"
import Tasks from '@/components/Tasks'
import formatDate from "@/app/utils/formatDate"
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";

type Task = {
  title:string,
  description:string,
  date:string,
  isCompleted:boolean,
  id:String
}

const page = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      setTasks(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const {user} = useUser();
  return (
    <div className=' '>
      <p className=' text-[30px] font-extrabold'>Hello, <span className=' text-[#436BF4] uppercase '>{user?.firstName}</span></p>
      <div className=' mt-14  grid gap-10 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 w-full'>
        {tasks.map((task, index):any => {
          return (
            <Tasks title={task.title} description={task.description} date={task.date} type={(task.isCompleted) ? "completed" : "incompleted"} id={task.id} key={index}/>)
        })}
        <Link href={"/AddTask"} className=' h-[16rem] bg-[#181818] rounded-2xl drop-shadow-lg flex space-x-[10px] place-content-center items-center hover:bg-[#3e3c3f] duration-200 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className=' text-[16px] font-medium'>Add task</p>
        </Link >
      </div>
    </div>
  )
}

export default page