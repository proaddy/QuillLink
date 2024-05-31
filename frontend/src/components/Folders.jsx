// import folders from '../data/folderlist.json';
import { useState } from 'react';

export default function Folders({activePath, setActivePath, breadCrumPath, setBreadCrumPath, userid, folderData, setFolderData}) {

    const length = folderData.length + 1;
    // inputs
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    const handleAddFolder = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setFolderData([...folderData, {
                "id":length,
                "name":newValue,
                "location":activePath.toLowerCase(),
                "userID":userid
            }])
        }
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }

    const handleDeleteFolder = (element)=>{
        const newFolderList = folderData.filter(e=>e.id != element.id);
        setFolderData(newFolderList);
    }

  return (
    <div className='overflow-y-auto max-h-72 mt-3'>
        {
            showValue && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
            <input autoFocus className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={handleAddFolder} placeholder='Enter Name...'/>
          </div>
        }
        <div className="flex flex-wrap">
            {
                folderData.filter(e=>e.userID === userid).filter(e => e.location === activePath.toLowerCase()).map((e, i)=>{
                    return(
                        <div className="group">
                            <span key={i} className='flex flex-col items-center rounded-md m-1 relative group-hover:border-2 group-hover:border-gray-500'>
                                <img onClick={()=>{
                                    setActivePath(`${activePath+'/'+e.name.toLowerCase()}`);
                                    setBreadCrumPath([...breadCrumPath,e.name]);
                                }}  src="/images/folder.png" className='cursor-pointer w-40 h-40'/>
                                {e.name}
                                <img onClick={()=>handleDeleteFolder(e)} src="/images/trash.png" className='cursor-pointer invisible group-hover:visible hover:bg-gray-400 absolute w-9 p-1 right-0 bottom-0'/>
                            </span>
                        </div>
                    )
                })
            }
            <span onClick={showinput} className='flex flex-col items-center rounded-md m-2 py-2 w-40 h-40 justify-center outline-dashed cursor-pointer hover:bg-white/20'>
                <img src="/images/add.png" className='w-16'/>
                New Folder
            </span>
        </div>
    </div>
  )
}
