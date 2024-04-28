import React from 'react'

export default function LeftComponent() {
  return (
    <div className='h-screen pt-2 flex flex-col items-center flex-[1_1_15%]'>

        {/* icon */}
        <p className="flex items-center text-[#564cba]">
            <img src="/images/favicon.png" className="w-10 m-1" />
            <span className="text-2xl font-bold">QuillLink</span>
        </p>

        {/* pages */}
        <div className='text-xl w-40 flex flex-col justify-center my-8'>
          <p className='flex items-center'>
            <img src="/images/home.png" className='w-6 m-3' alt="Home" />
            <span>Home</span>
          </p>
          <p className='flex items-center'>
            <img src="/images/archive.png" className='w-6 m-3' alt="Archive" />
            <span>Archive</span>
          </p>
          <p className='flex items-center'>
            <img src="/images/trash.png" className='w-6 m-3' alt="Trash" />
            <span>Trash</span>
          </p>
        </div>

        <hr className='bg-gray-200 border-solid w-[100%] h-1 mb-3'/>

        {/* Book list */}
        <div className="flex flex-col h-screen justify-between">
          <div className='flex-1 p-1'>
            <div className='flex items-center'>
              <img src="/images/book.png" alt="book" className='w-6 m-2'/>
              <span>My Notes</span>
            </div>
            <div className="flex items-center">
              <img src="/images/book.png" alt="book" className='w-6 m-2' />
              <span>My Attachments</span>
            </div>
          </div>
          <span className='flex-0 text-center p-2 mb-2 rounded-md h-10 bg-[#FFC900]'>Add Book</span>
        </div>
    </div>
  )
}
