"use client"
import Tasks from '@/components/Tasks'
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
            return(
              <div key={index}>
                {task.isCompleted && <Tasks title={task.title} description={task.description} date={task.date} type={(task.isCompleted) ? "completed" : "incompleted"} id={task.id} />}
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default page