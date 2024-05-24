import { useState } from 'react';
import bookdata from '../data/bookdata.json';
import { Link } from 'react-router-dom';


export default function LeftComponent({pageStat, bookStat, setBookStat, user}) {
  const [newValue, setNewValue] = useState('');
  const [takeInput,setTakeInput] = useState(false);

  const bookFilter = bookdata.filter(e=>e.userID === user._id);
  const [bookDataValue, setBookDataValue] = useState([...bookFilter]);

  const handleInputData = ()=>{
    setTakeInput(!takeInput);
    if (newValue.length != 0) {
      setBookDataValue([...bookDataValue, {name:newValue, userID:user._id}]);
      console.log(bookDataValue, 'new book created');
    }
    setNewValue('');
  }

  return (
    <div className='h-screen pt-2 flex flex-col items-center flex-[1_1_15%] min-w-52'>
      {
        takeInput && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
        <input autoFocus className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={handleInputData} placeholder='Enter Name...'/>
      </div>
      }
      
      {/* icon */}
      <p className="flex items-center text-[#564cba]">
          <img src="/images/favicon.png" className="w-10 m-1" />
          <span className="text-2xl font-bold">QuillLink</span>
      </p>

      {/* pages */}
      <div className='text-xl w-40 flex flex-col justify-center my-8'>
        <Link to='/dashboard'>
          <p className={`flex items-center cursor-pointer ${pageStat === 'isHome' && 'bg-gray-100'} rounded-md`}>
            <img src="/images/home.png" className='w-6 m-3' alt="Home" />
            <span>Home</span>
          </p>
        </Link>
        <Link to='/archive'>
          <p className={`flex items-center cursor-pointer ${pageStat === 'isArchive' && 'bg-gray-100'} rounded-md`}>
            <img src="/images/archive.png" className='w-6 m-3' alt="Archive" />
            <span>Archive</span>
          </p>
        </Link>
        <Link to='/bin'>
          <p className={`flex items-center cursor-pointer ${pageStat === 'isTrash' && 'bg-gray-100'} rounded-md`}>
            <img src="/images/trash.png" className='w-6 m-3' alt="Trash" />
            <span>Trash</span>
          </p>
        </Link>
      </div>

      <hr className='bg-gray-200 border-solid w-[100%] h-1 mb-3'/>

      {/* Book list */}
      <div className="flex flex-col h-screen justify-between">
        <div className='flex-1'>
          {pageStat === 'isHome' &&
            bookDataValue.map(e=>{ return (
              <div onClick={()=>{setBookStat(e.name)}} className={`cursor-pointer flex items-center rounded-md hover:bg-gray-50 ${bookStat === e.name && "bg-gray-100"} p-3`} key={e.name}>
                <img src="/images/book.png" alt="book" className='w-6 mr-2'/>
                <span>{e.name}</span>
              </div>
            )})
          }
        </div>
        <span className='flex-0 text-center p-2 mb-2 rounded-md h-10 bg-[#FFC900] cursor-pointer' onClick={()=>setTakeInput(!takeInput)}>Add Book</span>
      </div>
    </div>
  )
}
