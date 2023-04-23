import React, { useEffect } from 'react'
import InfoBox from './InfoBox'
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"

// ICons
const icon1 = <FaUsers size={40} color="fff"  />
const icon2 = <BiUserCheck size={40} color="fff"  />
const icon3 = <BiUserMinus size={40} color="fff"  />
const icon4 = <BiUserX size={40} color="fff"  />

const UserStats = ({ users }) => {


  

  const number = users.length

  return (
    <div className='w-full'>
       <h1 className=' 
         text-[1.3rem] sm:text-[2rem] font-semibold text-white mb-2'>User Stats</h1>
        <div className='grid min-[890px]:grid-cols-4 sm:grid-cols-2
         gap-4 grid-cols-1 justify-center items-center'>
          <InfoBox
            icon={icon1}
            title={"Total Users"}
            count={number}
            bgColor="bg-purpleColor"
          />

          <InfoBox
            icon={icon2}
            title={"Verified Users"}
            count={"0"}
            bgColor="bg-[green]"
          />

          <InfoBox
            icon={icon3}
            title={"Unverified Users"}
            count={"0"}
            bgColor="bg-[#DC143C]"
          />

          <InfoBox
            icon={icon4}
            title={"Suspended Users"}
            count={"0"}
            bgColor="bg-black"
          />
        </div>
    </div>
  )
}

export default UserStats