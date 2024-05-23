import { useEffect, useState } from 'react';
import Cards from './Cards'
import Folders from './Folders';
import { useNavigate } from 'react-router-dom';

export default function RightComponent({pageStat, bookStat, user}) {
    const [activePath, setActivePath] = useState(bookStat);
    const [breadCrumPath, setBreadCrumPath] = useState([]);
    let newActivePath = [`${bookStat}`];

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(()=>{
        setActivePath(bookStat);
        setBreadCrumPath([]);
        setSearchText('');
    },[bookStat]);

    // console.log(bookStat)

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

    const logout = ()=>{
        localStorage.setItem('username', null);
        navigate('/login');
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
                          <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='Search for Notes....' className='p-2 rounded-md'/>
                      </span>
                      <div onClick={logout} className="flex rounded-full w-10 cursor-pointer">
                          <img src="/images/profile.png" alt="user" title='Logout Button'/>
                      </div>
                  </div>
                  <div className="flex items-center space-x-10 justify-between my-5">
                      <ul className='flex list-none space-x-5 justify-evenly'>
                          <li onClick={()=>setFilter('all')} className={`${filter==='all'?'bg-[#FFC900]':'bg-white'} w-16 text-center p-2 rounded-md cursor-pointer`}>All</li>
                          <li onClick={()=>setFilter('today')} className={`${filter==='today'?'bg-[#FFC900]':'bg-white'} w-16 text-center p-2 rounded-md cursor-pointer`}>Today</li>
                          <li onClick={()=>setFilter('week')} className={`${filter==='week'?'bg-[#FFC900]':'bg-white'} w-28 text-center p-2 rounded-md cursor-pointer`}>This Week</li>
                          <li onClick={()=>setFilter('month')} className={`${filter==='month'?'bg-[#FFC900]':'bg-white'} w-28 text-center p-2 rounded-md cursor-pointer`}>This Month</li>
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
                            <Cards activePath={activePath} searchText={searchText} filter={filter} userid={user._id}/>
                            <hr className='w-[100%] border-black h-1'/>
                            <Folders activePath={activePath} setActivePath={setActivePath} breadCrumPath={breadCrumPath} setBreadCrumPath={setBreadCrumPath} userid={user._id}/>
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
