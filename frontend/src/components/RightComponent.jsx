import React from 'react';
import Cards from './Cards'
import Folders from './Folders';

export default function RightComponent() {
  return (
    <div className='flex flex-col flex-[1_1_80%] bg-slate-400 p-2'>
        <div className="flex bg-white w-[90%] h-14 self-center justify-between items-center p-2 rounded-lg">
            <span className='flex items-center'>
                <img src="/images/search.png" alt="search" className='w-5 m-2'/>
                <input type="text" placeholder='Search....' className='p-2 rounded-md'/>
            </span>
            <div className="flex rounded-full w-10">
                <img src="/images/profile.png" alt="user"/>
            </div>
        </div>
        <div className="flex items-center space-x-10 justify-evenly">
            <nav className='flex cursor-pointer list-none space-x-5 justify-evenly m-5'>
                <li className='bg-[#FFC900] w-16 text-center p-2 rounded-md'>All</li>
                <li className='bg-white w-16 text-center p-2 rounded-md'>Today</li>
                <li className='bg-white w-32 text-center p-2 rounded-md'>This Week</li>
                <li className='bg-white w-32 text-center p-2 rounded-md'>This Month</li>
            </nav>
            <button className='bg-[#FFC900] w-32 h-11 rounded-md'>Add File</button>
            <button className='bg-[#FFC900] w-32 h-11 rounded-md'>Add Folder</button>
        </div>
        <div>
            <Cards/>
        </div>
        <div>
            <Folders/>
        </div>
    </div>
  )
}
