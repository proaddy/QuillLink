import { useEffect, useState } from 'react';
import Cards from './Cards'
import Folders from './Folders';

export default function RightComponent({pageStat, bookStat}) {
    const [activePath, setActivePath] = useState(bookStat);
    const [breadCrumPath, setBreadCrumPath] = useState([]);
    let newActivePath = [`${bookStat}`];

    useEffect(()=>{
        setActivePath(bookStat);
        setBreadCrumPath([]);
    },[bookStat]);

    console.log(bookStat)

    // functions
    const handlePath = (text)=>{
        let index = breadCrumPath.indexOf(text);
        if (text === bookStat) {
            setBreadCrumPath([]);
            setActivePath(`${bookStat}`)
        }
        if (index < 0) {
            return;
        }
        let temp = breadCrumPath.slice(0, index + 1);
        setBreadCrumPath(temp);
        setActivePath(newActivePath.concat(temp).join('/')); // this line concats two arrays and make then string using join doesn't work if the data types are not array
    }
    
  return (
    <div className='flex flex-col flex-[1_1_85%] bg-slate-400 p-2 overflow-hidden'>
        <div className="w-[95%] self-center">
            {
              pageStat === 'isHome' && (
                <>
                  <div className="flex bg-white h-14 justify-between items-center p-2 rounded-lg">
                      <span className='flex items-center'>
                          <img src="/images/search.png" alt="search" className='w-5 m-2'/>
                          <input type="text" placeholder='Search....' className='p-2 rounded-md'/>
                      </span>
                      <div className="flex rounded-full w-10">
                          <img src="/images/profile.png" alt="user"/>
                      </div>
                  </div>
                  <div className="flex items-center space-x-10 justify-between my-5">
                      <ul className='flex cursor-pointer list-none space-x-5 justify-evenly'>
                          <li className='bg-[#FFC900] w-16 text-center p-2 rounded-md'>All</li>
                          <li className='bg-white w-16 text-center p-2 rounded-md'>Today</li>
                          <li className='bg-white w-28 text-center p-2 rounded-md'>This Week</li>
                          <li className='bg-white w-28 text-center p-2 rounded-md'>This Month</li>
                      </ul>
                  </div>
                    <ul className="flex list-none text-gray-600 my-1 space-x-1">
                        {
                            bookStat !== true && <>
                                <li onClick={(e)=>handlePath(e.target.innerText)} className='hover:underline cursor-pointer'>{bookStat}</li>
                                {
                                    breadCrumPath.map(e=>{
                                        return(
                                            <>
                                                <span>{'>'}</span>
                                                <li onClick={(e)=>{handlePath(e.target.innerText)}} className='hover:underline cursor-pointer'>{e}</li>
                                                </>
                                        )
                                    })
                                }
                            </>
                        }
                        
                    </ul>
                    {   
                        bookStat != '' && <>
                            <Cards activePath={activePath}/>
                            <hr className='w-[100%] border-black h-1'/>
                            <Folders activePath={activePath} setActivePath={setActivePath} breadCrumPath={breadCrumPath} setBreadCrumPath={setBreadCrumPath}/>
                        </>
                    }
                    
                </>
              )
            }
            {
                pageStat === 'isArchive' && (
                    <>
                        <div className="flex bg-white h-14 justify-between items-center p-2 rounded-lg">
                            <span className='flex items-center'>
                                <img src="/images/search.png" alt="search" className='w-5 m-2'/>
                                <input type="text" placeholder='Search....' className='p-2 rounded-md'/>
                            </span>
                            <div className="flex rounded-full w-10">
                                <img src="/images/profile.png" alt="user"/>
                            </div>
                        </div>
                        <ul className="list-none text-gray-600 my-5">
                            <li className='font-bold'>Archives</li>
                        </ul>
                        <Cards activePath={activePath}/>
                    </>
                )
            }
            {
                pageStat === 'isTrash' && (
                    <>
                        <Cards activePath={activePath}/>
                    </>
                )
            }
        </div>
    </div>
  )
}
