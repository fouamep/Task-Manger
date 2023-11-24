"use client"
import React from 'react'
import Form, { FormActions, Input, MultiSelect, SubmitButton, TextArea } from 'react-form-component'

const page = () => {
  return (
    <div className=' flex place-content-center h-full w-full px-[0px] md:px-[50px] lg:px-[40px] items-center'>
      <div className=' bg-[#181818] py-10 w-full 2xl:w-[60%] px-[20px] md:px-[50px] lg:px-[70px] rounded-2xl drop-shadow-xl '>
        <h1 className=' font-black text-[30px]'>Create a Task</h1>
        <form action="" className=' mt-10 flex flex-col space-y-10'>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Title</label>
            <input type="text" name="" id="" placeholder='e.g, schedule a team meeting' className=' placeholder:text-[#898789] px-4 w-full 2xl:w-[60%] h-[40px] rounded-lg bg-[#212022] ' />
          </div>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Description</label>
            <textarea
              // onChange={e => setBio(e.target.value)}
              placeholder='e.g, This task involves coordinating and arranging a meeting...'
              rows={3}
              name="comment"
              id="comment"
              className=" resize-none no-scrollbar placeholder:text-[#898789] h-[100px] w-full 2xl:w-[60%] bg-[#212022] rounded-lg px-4 py-2"
            />
          </div>
          <div className=' flex flex-col space-y-3'>
            <label htmlFor="" className=' font-bold text-[20px]'>Date</label>
            <input type="date" name="" id="" className=" placeholder:text-[#898789] bg-[#212022] block w-full 2xl:w-[60%] h-[40px] rounded-lg px-4 dark:bg-[#212022]" />
          </div>
          <div className=" flex flex-col space-y-3">
            <label htmlFor="" className=' font-bold text-[20px]'>Type</label>
            <select 
              // onChange={e => setPrivacy(e.target.value)}
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
            <button className=' py-1 px-4 bg-[#436BF4] hover:bg-[#436BF4]/[0.8] duration-200 rounded-xl'>
              Save

            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page