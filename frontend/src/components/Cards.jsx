import React from 'react'

export default function Cards() {
  return (
    <div className='flex justify-evenly'>
        <div className='bg-red-500 text-white rounded-md flex flex-col justify-between p-2 w-96 h-44 m-2'>
            <p className='flex justify-between'>
                <h1 className='font-bold'>Client Meeting Review</h1>
                <span className='bg-white text-red-500 p-1 rounded-sm'>meeting</span>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore eius repellat autem dolorum consequuntur atque!</p>
            <span className='self-end text-sm'>28 April 2024</span>
        </div>
        <div className='bg-red-500 text-white rounded-md flex flex-col justify-between p-2 w-96 h-44 m-2'>
            <p className='flex justify-between'>
                <h1 className='font-bold'>Client Meeting Review</h1>
                <span className='bg-white text-red-500 p-1 rounded-sm'>meeting</span>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore eius repellat autem dolorum consequuntur atque!</p>
            <span className='self-end text-sm'>28 April 2024</span>
        </div>
        <div className='bg-red-500 text-white rounded-md flex flex-col justify-between p-2 w-96 h-44 m-2'>
            <p className='flex justify-between'>
                <h1 className='font-bold'>Client Meeting Review</h1>
                <span className='bg-white text-red-500 p-1 rounded-sm'>meeting</span>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore eius repellat autem dolorum consequuntur atque!</p>
            <span className='self-end text-sm'>28 April 2024</span>
        </div>
        
    </div>
  )
}
