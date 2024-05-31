import { useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function Cards({dataarray, notesData, activePath, searchText, filter, userid, page='home', setNotesData}) {
    const userFilter = dataarray.filter(e=>e.userID.toString() === userid);
    const length = notesData.length + 1;

    const today = moment();
    const navigate = useNavigate();

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
    if (filter === 'today') { filterData = userFilter.filter(e => isToday(e)); } 
    else if(filter === 'week') { filterData = userFilter.filter(e => isWithinWeek(e)); }
    else if (filter === 'month') { filterData = userFilter.filter(e => isWithinMonth(e)); } 
    else { filterData = userFilter; }

    // input states
    const [showValue, setShowValue] = useState(false);
    const [newValue, setNewValue] = useState('');

    const handleNotesAdd = ()=>{
        setShowValue(!showValue);
        if(newValue != ''){
            setNotesData([...notesData, {
                "id":length,
                "heading": newValue,
                "content":"",
                "tag":"",
                "date":`${today.year()}-${today.month()+1}-${today.date()}`,
                "location":activePath.toLowerCase(),
                "userID":userid.toString(),
                "status":"active",
                "color":"yellow"
            }]);
        }
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }

    const transferToNotes = (e) => {
        navigate("/editnote", {state: {notedata: e}});
    }

    const updated = (id, heading, content, tag, location, userID, color, stat) => {
        let somedata = {
        "id":id.toString(),
        "heading":heading,
        "content":content,
        "tag":tag,
        "date":`${today.year()}-${today.month()+1}-${today.date()}`,
        "location":location,
        "userID":userID,
        "status":stat,
        "color":color
        }
        return somedata;
    }

    const unarchiveNotes = (element) => {
        let makingUpdate = notesData.map((e) => {
            if(e.id === element.id){
                return updated(element.id, element.heading, element.content, element.tag, element.location, element.userID, element.color, "active");
            }
            return e;
        });
        setNotesData(makingUpdate);
        // console.log(notesData);
    }

    function colors(c){
        const color = {
            'yellow':'#ffdb59',
            'green':'#7cff62',
            'blue':'#6189ff',
            'red':'#ff5e5e'
        }
        return color[c];
    }
    
  return (
    <div className={`flex flex-wrap my-5 ${page === 'home' ? 'max-h-56':'h-[80dvh'} overflow-y-auto`}>
        {
            showValue && <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center'>
            <input autoFocus className='h-14 w-[50%] p-3 m-5 rounded-lg' type="text" value={newValue} onChange={(e)=>setNewValue(e.target.value)} onBlur={handleNotesAdd} placeholder='Enter Name...'/>
          </div>
        }
        {
            filterData.filter((e)=> page === 'home' ? (e.location === activePath.toLowerCase()):(true)).filter((e)=>e.heading.toLowerCase().includes(searchText)).map((e, i) =>
                {
                    return(
                    <div key={i} onClick={()=>page === 'home'?transferToNotes(e):unarchiveNotes(e)} className={`bg-[${colors(e.color)}] rounded-md flex overflow-hidden flex-col justify-between m-2 p-2 w-96 h-44 cursor-pointer`}>
                        <p className='flex justify-between'>
                            <span className='font-bold text-xl'>{e.heading}</span>
                            <span className={`bg-white text-[${colors(e.color)}] p-1 h-8 rounded-sm`}>{String(e.tag.substring(0,30))+".."}</span>
                        </p>
                        <div>{e.content.substring(0,120)}</div>
                        <span className='self-end text-sm'>{e.date}</span>
                    </div>
                )
            }  
            )
        }
        {
            page === 'home' &&  (<div onClick={showinput} className='text-white rounded-md flex flex-col items-center justify-center outline-dashed outline-white m-2 p-2 w-96 h-44 cursor-pointer hover:bg-white/20'>
                                    <img src="/images/add-white.png" className='w-16'/>
                                    New Card
                                </div>)
        }
        
    </div>
  )
}
