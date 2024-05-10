import { useState } from 'react';
import testdata from '../data/testdata.json';


export default function Cards({activePath}) {
    const [testData, setTestData] = useState([...testdata]);
    
  return (
    <div className='flex flex-wrap my-5 max-h-56 overflow-y-auto'>
        {
            testData.filter(e=> e.location === activePath[0].toLowerCase()).map(e =>
                {
                    return(
                    <div className='bg-[#FFC900] text-white rounded-md flex overflow-hidden flex-col justify-between m-2 p-2 w-96 h-44'>
                        <p className='flex justify-between'>
                            <span className='font-bold text-xl'>{e.heading}</span>
                            <span className='bg-white text-[#FFC900] p-1 h-8 rounded-sm'>{e.tag}</span>
                        </p>
                        <p>{String(e.content.substring(0,120))+"...."}</p>
                        <span className='self-end text-sm'>{e.date}</span>
                    </div>
                )}  
            )
        }
        <div className='text-[#FFC900] rounded-md flex flex-col items-center justify-center outline-dashed outline-[#FFC900] m-2 p-2 w-96 h-44 cursor-pointer hover:bg-white/20'>
            <img src="/images/add-yellow.png" className='w-16'/>
            New Folder
        </div>
    </div>
  )
}
