"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, MouseEvent, useState } from 'react'
import Form, { FormActions, Input, MultiSelect, SubmitButton, TextArea } from 'react-form-component'

const page = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const router = useRouter();
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isCompleted = (type == "Completed") ? true : false;
    axios.post("/api/tasks", {
      title:title,
      description:description,
      date:date,
      completed:isCompleted,
    }).then(res => {
      console.log("res = ", res.data);
      router.push("/AllTasks")
    }).catch(err =>{console.log(err)})
  }

  return (
    <div className=' flex place-content-center h-full w-full px-[0px] md:px-[50px] lg:px-[40px] items-center'>
      <div className=' bg-[#181818] py-10 w-full 2xl:w-[60%] px-[20px] md:px-[50px] lg:px-[70px] rounded-2xl drop-shadow-xl '>
        <h1 className=' font-black text-[30px]'>Create a Task</h1>
        <form className=' mt-10 flex flex-col space-y-10'>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Title</label>
            <input onChange={e => {setTitle(e.target.value)}} type="text" name="" id="" placeholder='e.g, schedule a team meeting' className=' placeholder:text-[#898789] px-4 w-full 2xl:w-[60%] h-[40px] rounded-lg bg-[#212022] ' />
          </div>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Description</label>
            <textarea
              onChange={e => setDescription(e.target.value)}
              placeholder='e.g, This task involves coordinating and arranging a meeting...'
              rows={3}
              className=" resize-none no-scrollbar placeholder:text-[#898789] h-[100px] w-full 2xl:w-[60%] bg-[#212022] rounded-lg px-4 py-2"
            />
          </div>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Date</label>
            <input onChange={e => {setDate(e.target.value)}} type="date" name="" id="" className=" placeholder:text-[#898789] bg-[#212022] block w-full 2xl:w-[60%] h-[40px] rounded-lg px-4 dark:bg-[#212022]" />
          </div>
          <div className=" flex flex-col space-y-3">
            <label htmlFor="" className=' font-bold text-[20px]'>Type</label>
            <select 
              onChange={e => setType(e.target.value)}
              defaultValue="Type"  name="Privacy" autoComplete="off" className=" px-4 w-full 2xl:w-[60%] h-[40px] rounded-lg bg-[#212022]  ">
              <option className=" text-[#898789]" disabled value="Type">Type</option>
              <option value="Completed">Completed</option>
              <option value="Incompleted">Incompleted</option>
            </select>
          </div>
          <div className=' mt-8 flex space-x-5 place-content-end w-full 2xl:w-[60%]'>
            <button className=' py-1 px-2 border border-[#436BF4] rounded-xl'>
              Cancel
            </button>
            <button onClick={handleSubmit} className=' py-1 px-4 bg-[#436BF4] hover:bg-[#436BF4]/[0.8] duration-200 rounded-xl'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page