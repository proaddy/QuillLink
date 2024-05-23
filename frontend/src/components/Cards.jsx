import { useState } from 'react';
import testdata from '../data/testdata.json';
import moment from 'moment';


export default function Cards({activePath, searchText, filter, userid}) {
    const userFilter = testdata.filter(e=>e.userID === userid);
    const [testData, setTestData] = useState([...userFilter]);
    const today = moment();

    function isToday(datestring) {
        const checkdate = moment(datestring.date, 'YYYY-MM-DD');
        let result = checkdate.isSame(today, 'day', '[]');
        return result;
    }
    function isWithinWeek(datestring) {
        const endOfWeek = today.clone().endOf('W');
        const startOfWeek = today.clone().startOf('W');
        return moment(datestring.date, 'YYYY-MM-DD').isBetween(startOfWeek, endOfWeek, 'day', '[]')
    };

    function isWithinMonth(datestring) {
        const endOfMonth = today.clone().endOf('M');
        const startOfMonth = today.clone().startOf('M');
        return moment(datestring.date, 'YYYY-MM-DD').isBetween(startOfMonth, endOfMonth, 'day', '[]')
    };

    let filterData = [];
    if (filter === 'today') {
        console.log('today working');
        filterData = testData.filter(e => isToday(e));
    } else if(filter === 'week') {
        console.log('week working');
        filterData = testData.filter(e => isWithinWeek(e));
    }else if (filter === 'month') {
        console.log('month working');
        filterData = testData.filter(e => isWithinMonth(e));
    } else {
        console.log('else working');
        filterData = testData;
    }


    // input states
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    const showdata = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setTestData([...testData, {
                "heading": newValue,
                "content":"",
                "tag":"",
                "date":`${today.year()}-${today.month()+1}-${today.date()}`,
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
            filterData.filter((e)=> e.location === activePath.toLowerCase() && e.heading.toLowerCase().includes(searchText)).map((e, i) =>
                {
                    return(
                    <div key={i} className='bg-[#FFC900] text-white rounded-md flex overflow-hidden flex-col justify-between m-2 p-2 w-96 h-44 cursor-pointer'>
                        <p className='flex justify-between'>
                            <span className='font-bold text-xl'>{e.heading}</span>
                            <span className='bg-white text-[#FFC900] p-1 h-8 rounded-sm'>{String(e.tag.substring(0,30))+".."}</span>
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
