import folders from '../data/folderlist.json';
import { useState } from 'react';

export default function Folders({bookStat, activeFolder, setActiveFolder}) {
    const [testData, setTestData] = useState([...folders]);
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    const showdata = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setTestData([...testData, {"name": newValue, "location":"mynotes"}]);
        }
        console.log(testData);
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }

    console.log(activeFolder);
  return (
    <div className='overflow-y-auto max-h-72'>
        {
            showValue && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
            <input className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={showdata} placeholder='Enter Name...'/>
          </div>
        }
        <div className="flex flex-wrap">
            {
                testData.filter(e => e.location.split('/')[0] === bookStat.toLowerCase()).map(e=>{
                    return(
                        <span key={e.name} onClick={()=>setActiveFolder(e.name)} className='cursor-pointer flex flex-col items-center rounded-md m-1'>
                            <img src="/images/chapter.png" className='w-40 h-44'/>
                            {e.name}
                        </span>
                    )
                })
            }
            <span onClick={showinput} className='flex flex-col items-center rounded-md m-2 py-2 w-40 h-44 justify-center outline-dashed cursor-pointer hover:bg-white/20'>
                <img src="/images/add.png" className='w-16'/>
                New Folder
            </span>
        </div>
    </div>
  )
}
