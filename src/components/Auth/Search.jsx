import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = ({ value, onchange }) => {
  return (
    <div className='w-[150px] sm:w-full max-w-[300px] my-[5px] mx-0 relative flex-1 '>
        <BiSearch size={18} className="absolute top-[50%] left-[0.5rem] translate-y-[-50%] " />
        <input type="text" className='pl-[2rem] h-10 rounded-sm' placeholder='Search Users' value={value} onChange={onchange} />
    </div>
  )
}

export default Search