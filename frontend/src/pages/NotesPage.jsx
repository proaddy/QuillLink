import React, { useEffect, useState } from 'react';
import LeftComponent from '../components/LeftComponent';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotesPage({notesData, setNotesData, bookData, setBookData}) {
    const nagivate = useNavigate();
    const locate = useLocation();

    const today = moment();

    const [heading, setHeading] = useState(locate.state.notedata.heading);
    const [content, setContent] = useState(locate.state.notedata.content);
    const [color, setColor] = useState(locate.state.notedata.color);

    const [bgcolor, setBgColor] = useState(colors(locate.state.notedata.color));

    const loggedIn = localStorage.getItem('username') === true;

    const updated = (stat) => {
        let somedata = {
        "_id":locate.state.notedata._id.toString(),
        "heading":heading,
        "content":content,
        "tag":locate.state.notedata.tag,
        "date":`${today.year()}-${today.month()+1}-${today.date()}`,
        "location":locate.state.notedata.location,
        "userID":locate.state.notedata.userID,
        "status":stat,
        "color":color
        }
        return somedata;
    }

    function updateNotes(stat) {
        let makingUpdate = notesData.map((e) => {
            if(e._id === locate.state.notedata._id){
                return updated(stat);
            }
            return e;
        });
        setNotesData(makingUpdate);
    }

    
    useEffect(()=>{
        if(!loggedIn && locate.state === null) {
        nagivate('/login');
        }
    }, [locate.state, loggedIn]);

    function colors(c){
        const color = {
            'yellow':'#ffd744',
            'green':'#71fc55',
            'blue':'#406ef7',
            'red':'#f94242'
        }
        return color[c];
    }

    const handleSaveNote = () => {
        updateNotes('active')
        alert("Note Saved");
        nagivate('/dashboard');
    }

    const handleDeleteNote = () => {
        updateNotes('trash')
        alert("Moved to trash");
        navigate('/dashboard');
    }

    const handleNoteArchive = () => {
        updateNotes('archive')
        alert("Note Archived");
        navigate('/dashboard');
    }

    return (
        <div className='flex overflow-hidden'>
            <LeftComponent pageStat={'isHome'} user={locate.state.notedata}  bookData={bookData} setBookData={setBookData}/>
            <div className='flex-[1_1_85%] flex flex-col justify-center border border-white bg-slate-400 p-2 overflow-hidden'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl border-b-gray-200 border-b-2'>
                        <input value={heading} onChange={(e)=>setHeading(e.target.value)}  type="text" name='heading' className={`w-[92%] bg-[${bgcolor}] rounded-tl-lg p-2`}/>
                        <img onClick={handleNoteArchive} src="/images/archive.png" className={`cursor-pointer w-14 bg-[${bgcolor}] p-2`}/>
                        <img onClick={handleDeleteNote} src="/images/trash-red.png" className={`cursor-pointer w-14 bg-[${bgcolor}] rounded-tr-lg p-2`}/>
                    </div>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}  name="content" className={`w-full h-[75dvh] bg-[${bgcolor}] rounded-b-lg p-3 text-xl`}></textarea>
                    <div className='flex justify-between mt-5 items-center'>
                        <div className="flex space-x-2">
                            <div onClick={()=>{setBgColor(colors('green')); setColor('green');}} className='bg-green-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>{setBgColor(colors('blue')); setColor('blue');}} className='bg-blue-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>{setBgColor(colors('yellow')); setColor('yellow');}} className='bg-yellow-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>{setBgColor(colors('red')); setColor('red');}} className='bg-red-500 h-6 w-6 rounded-full border-white border'/>
                        </div>
                        <span>{locate.state.notedata.date}</span>
                        <button onClick={handleSaveNote} className='text-center p-2 mb-2 rounded-md h-10 bg-[#FFC900]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
