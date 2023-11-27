import { Box, Modal, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { MouseEvent, useState } from 'react'
import toast from 'react-hot-toast'

type Props = {
    title:string,
    description:string,
    date:string,
    id: String
    type:string
}
const Tasks = ( {title, description, date, type , id }:Props ) => {
    const typeColor = (type == "completed") ? "bg-[#6cae65]" : "bg-[#d34343]"
    const typeColorHover = (type == "completed") ? "hover:bg-[#6cae65]/[0.5]" : "hover:bg-[#d34343]/[0.5]"
    const [isDeleted, setIsDeleted] = useState(false);
    const handleDelete = async (id:any) => {
        // e.preventDefault();
        setIsDeleted(!isDeleted);
        try {
            console.log("here")
            const res = await axios.delete(`/api/tasks/${id}`);
            toast.success("Task deleted");
    
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
        
    }

    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [updatedDate, setUpdatedDate] = useState(date);
    const [updatedType, setUpdatedType] = useState("");
    const router = useRouter();

    const handleUpdate = ( id:String,e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        toast("You Joined this Channel", {
            style: {
                borderRadius: '10px',
                background: '#810851',
                color: '#fff',
                fontFamily: 'Heading',
                fontSize: '1.2rem',
            },
            icon: '✅',
        })
        console.log("id  =  ", id);
        let isCompleted
        if (updatedType)
            isCompleted = (updatedType == "Completed") ? true : false;
        axios.put("/api/tasks", {
            id:id,
            isCompleted:isCompleted,
            title:updatedTitle,
            description:updatedDescription,
            date:updatedDate
        }).then(res => {
            handleClose();
            router.push("/");
            router.push("/AllTasks")
        })
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        {!isDeleted && 
            <div className=' h-[16rem] bg-[#181818] rounded-2xl drop-shadow-lg flex flex-col justify-between px-[1.2rem] py-[1rem]'>
                <div className=' space-y-[10px]'>
                <h1 className=' font-extrabold text-[24px]'>{title}</h1>
                <p className=' text-[16px] font-medium'>{description}</p>
                </div>
                <div className=' space-y-[8px]'>
                <p className=' text-[18px] font-semibold'>{date}</p>
                <div className=' px-[2px] flex justify-between'>
                    <button className={` ${typeColor} ${typeColorHover} duration-200 text-[16px] font-bold px-2 py-1 rounded-2xl`}>
                        {type}
                    </button>
                    <div className=' flex items-center space-x-3'>
                    <button className=' hover:bg-[#3e3c3f] duration-200 p-1 rounded-lg' onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className=' flex w-full h-full items-center place-content-center'>
                        <div className=' bg-[#181818] py-10 w-full mx-10 2xl:w-[60%] px-[20px] md:px-[50px] lg:px-[70px] rounded-2xl drop-shadow-xl '>
                            <h1 className=' font-black text-[30px]'>Update a Task</h1>
                            <form className=' mt-10 flex flex-col space-y-10'>
                            <div className=' flex flex-col space-y-3'>
                                <label htmlFor="" className=' font-bold text-[20px]'>Title</label>
                                <input onChange={e => {setUpdatedTitle(e.target.value)}} defaultValue={title} type="text" name="" id="" placeholder='e.g, schedule a team meeting' className=' placeholder:text-[#898789] px-4 w-full 2xl:w-[60%] h-[40px] rounded-lg bg-[#212022] ' />
                            </div>
                            <div className=' flex flex-col space-y-3'>
                                <label htmlFor="" className=' font-bold text-[20px]'>Description</label>
                                <textarea
                                defaultValue={description}
                                onChange={e => setUpdatedDescription(e.target.value)}
                                placeholder='e.g, This task involves coordinating and arranging a meeting...'
                                rows={3}
                                className=" resize-none no-scrollbar placeholder:text-[#898789] h-[100px] w-full 2xl:w-[60%] bg-[#212022] rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className=' flex flex-col space-y-3'>
                                <label htmlFor="" className=' font-bold text-[20px]'>Date</label>
                                <input onChange={e => {setUpdatedDate(e.target.value)}} defaultValue={date} type="date" name="" id="" className=" placeholder:text-[#898789] bg-[#212022] block w-full 2xl:w-[60%] h-[40px] rounded-lg px-4 dark:bg-[#212022]" />
                            </div>
                            <div className=" flex flex-col space-y-3">
                                <label htmlFor="" className=' font-bold text-[20px]'>Type</label>
                                <select
                                onChange={e => setUpdatedType(e.target.value)}
                                defaultValue="Type"  name="Type" autoComplete="off" className=" px-4 w-full 2xl:w-[60%] h-[40px] rounded-lg bg-[#212022]  ">
                                <option className=" text-[#898789]" disabled value="Type">Type</option>
                                <option value="Completed">Completed</option>
                                <option value="Incompleted">Incompleted</option>
                                </select>
                            </div>
                            <div className=' mt-8 flex space-x-5 place-content-end w-full 2xl:w-[60%]'>
                                <button onClick={handleClose} className=' py-1 px-2 border border-[#436BF4] rounded-xl'>
                                    Cancel
                                </button>
                                <button onClick={e => handleUpdate(id, e)} className=' py-1 px-4 bg-[#436BF4] hover:bg-[#436BF4]/[0.8] duration-200 rounded-xl'>
                                    Save
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </Modal>


                    
                    
                    <button className=' hover:bg-[#3e3c3f] duration-200 p-1 rounded-lg' onClick={ e => handleDelete(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        }
    </>
  )
}

export default Tasks