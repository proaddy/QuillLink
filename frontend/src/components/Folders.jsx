import folders from '../data/folderlist.json';
import { useState } from 'react';

export default function Folders({activePath, setActivePath, breadCrumPath, setBreadCrumPath, userid}) {
    const folderFilter = folders.filter(e=>e.userID === userid)
    const [testData, setTestData] = useState([...folderFilter]);
    // console.log(testData);

    // console.log(breadCrumPath);

    // inputs
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    const showdata = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setTestData([...testData, {"name": newValue, "location":activePath.toLowerCase()}]);
        }
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }

  return (
    <div className='overflow-y-auto max-h-72'>
        {
            showValue && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
            <input className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={showdata} placeholder='Enter Name...'/>
          </div>
        }
        <div className="flex flex-wrap">
            {
                testData.filter(e => e.location === activePath.toLowerCase()).map(e=>{
                    return(
                        <span key={e.name} onClick={()=>{
                                setActivePath(`${activePath+'/'+e.name.toLowerCase()}`);
                                setBreadCrumPath([...breadCrumPath,e.name]);
                            }} className='cursor-pointer flex flex-col items-center rounded-md m-1'>
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
