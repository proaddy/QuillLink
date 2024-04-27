import React from 'react'

export default function LeftComponent() {
  return (
    <div className=' h-screen flex flex-col items-center flex-[1_1_20%]'>
        <p className="flex items-center text-[#564cba]">
            <img src="/images/favicon.png" className="w-10 m-1" />
            <span className="text-2xl font-bold">QuillLink</span>
        </p>

        <div className='text-xl my-10 bg-gray-200 w-32 space-y-2 p-2'>
          <p className='flex items-center'>
            <img src="/images/home.png" className='w-6 m-1' alt="Home" />
            <span>Home</span>
          </p>
          <p className='flex items-center'>
            <img src="/images/archive.png" className='w-6 m-1' alt="Archive" />
            <span>Archive</span>
          </p>
          <p className='flex items-center'>
            <img src="/images/trash.png" className='w-6 m-1' alt="Trash" />
            <span>Trash</span>
          </p>
        </div>
        <hr className='bg-gray-200 border-solid w-[100%] h-1'/>
        <div className="flex flex-col">
          <div className='flex items-center'>
            <img src="/images/greater-than.png" alt="greater-than" className='w-6 m-1 cursor-pointer'/>
            <img src="/images/folder.png" alt="folder" className='w-6 m-1'/>
            <span>My Notes</span>
          </div>
          <div className="flex items-center pl-6">
            <img src="/images/greater-than.png" alt="greater-than" className='w-6 m-1' />
            <img src="/images/folder.png" alt="folder" className='w-6 m-1' />
            <span>Imp Notes</span>
          </div>
          <div className="flex items-center">
            <img src="/images/greater-than.png" alt="greater-than" className='w-6 m-1' />
            <img src="/images/folder.png" alt="folder" className='w-6 m-1' />
            <span>My Attachments</span>
          </div>

        </div>
    </div>
  )
}
