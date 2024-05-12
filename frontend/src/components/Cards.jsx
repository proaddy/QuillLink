import { useState } from 'react';
import testdata from '../data/testdata.json';


export default function Cards({activePath}) {
    const [testData, setTestData] = useState([...testdata]);
    const now = new Date();

    // input states
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    // console.log(activePath);

    const showdata = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setTestData([...testData, {
                "heading": newValue,
                "content":"",
                "tag":"",
                "date":`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`,
                "location":activePath.toLowerCase(), 
            }]);
        }
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }
    
  return (
    <div className='flex flex-wrap my-5 max-h-56 overflow-y-auto'>
        {
            showValue && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
            <input className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={showdata} placeholder='Enter Name...'/>
          </div>
        }
        {
            testData.filter(e=> e.location === activePath.toLowerCase()).map(e =>
                {
                    return(
                    <div className='bg-[#FFC900] text-white rounded-md flex overflow-hidden flex-col justify-between m-2 p-2 w-96 h-44 cursor-pointer'>
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
        <div onClick={showinput} className='text-[#FFC900] rounded-md flex flex-col items-center justify-center outline-dashed outline-[#FFC900] m-2 p-2 w-96 h-44 cursor-pointer hover:bg-white/20'>
            <img src="/images/add-yellow.png" className='w-16'/>
            New Folder
        </div>
    </div>
  )
}
