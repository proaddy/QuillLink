import React from 'react'

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
        <nav className='flex '>
            <li>All</li>
            <li>Today</li>
            <li>This Week</li>
            <li>This Month</li>
        </nav>
        add note btn
        add folder btn
        <div>
            cards
        </div>
        <div>
            folders
        </div>
    </div>
  )
}
