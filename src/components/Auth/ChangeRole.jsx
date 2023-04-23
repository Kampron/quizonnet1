import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const option  = " bg-gray-100 "

const ChangeRole = ({ handleChange }) => {
    const [userRole, setUserRole] = useState("")

  return (
    <div className='sort'>
        <form className='flex justify-start'>
            <select 
                className='text-[1.2rem] font-medium px-[8px] py-[4px] mr-[5px] border-none border-b-2 border-[#777] outline-none' 
                value={userRole} 
                onChange={(e) => setUserRole(e.target.value)}
                onClick={() => handleChange(userRole)}
            >
                <option className={option} value="">
                     select
                </option>
                <option className={option} value="subscriber">Subscriber</option>
                <option className={option} value="admin">Admin</option>
                <option className={option} value="suspended">Suspended</option>
            </select>
            <button className='--btn text-white bg-[#007bff] '>
                <FaCheck size={15} />
            </button>
        </form>
    </div>
  )
}

export default ChangeRole