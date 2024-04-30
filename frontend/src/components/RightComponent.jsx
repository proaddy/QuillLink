import Cards from './Cards'
import Folders from './Folders';

export default function RightComponent({pageStat}) {
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
                          <li className='bg-white w-32 text-center p-2 rounded-md'>This Week</li>
                          <li className='bg-white w-32 text-center p-2 rounded-md'>This Month</li>
                      </ul>
                  </div>
                  
                    <ul className="list-none text-gray-600 my-1">
                        <li>My Notes / Notes notes</li>
                    </ul>
                    <Cards/>
                    <Folders/>

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
                        <Cards/>
                    </>
                )
            }
            {
                pageStat === 'isTrash' && (
                    <>
                        <Cards/>
                    </>
                )
            }
        </div>
    </div>
  )
}
