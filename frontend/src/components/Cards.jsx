import { useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Cards({dataarray, notesData, activePath, searchText, filter, userid, page='home', setNotesData}) {
    const userFilter = dataarray.filter(e=>e.userID.toString() === userid);
    const uniqueID = uuidv4();

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
            let data = {
                "id":uniqueID,
                "heading": newValue,
                "content":"",
                "tag":"",
                "date":`${today.year()}-${today.month()+1}-${today.date()}`,
                "location":activePath.toLowerCase(),
                "userID":userid.toString(),
                "status":"active",
                "color":"yellow"
            }
            setNotesData([...notesData, data]);
            axios.post("https://data-for-frontend.onrender.com/testdata",data).then(function (response){console.log("Card add")}).catch(function (error){console.log("Error in card add",error)});
        }
        setNewValue('');
    }

    const showinput = ()=>{
        setShowValue(!showValue);
    }

    const transferToNotes = (e) => {
        navigate("/editnote", {state: {notedata: e}});
    }

    const updated = (prop, stat) => {
        let somedata = {
        "id":prop.id.toString(),
        "heading":prop.heading,
        "content":prop.content,
        "tag":prop.tag,
        "date":`${today.year()}-${today.month()+1}-${today.date()}`,
        "location":prop.location,
        "userID":prop.userID,
        "status":stat,
        "color":prop.color
        }
        return somedata;
    }

    const unarchiveNotes = (element) => {
        let makingUpdate = notesData.map((e) => {
            if(e.id === element.id){
                console.log("unarchive");
                axios.patch(`https://data-for-frontend.onrender.com/testdata/${element.id}`, {"status":"active"}).then(function (response){console.log("card updated")}).catch(function (error){"Error in card update", error})
                return updated(element, "active");
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
