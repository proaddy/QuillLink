import React, { useEffect, useState } from 'react';
import LeftComponent from '../components/LeftComponent';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';

export default function NotesPage({notesData, setNotesData, bookData, setBookData}) {
    const navigate = useNavigate();
    const locate = useLocation();

    const today = moment();

    const [heading, setHeading] = useState(locate.state.notedata.heading);
    const [content, setContent] = useState(locate.state.notedata.content);
    const [tag, setTag] = useState(locate.state.notedata.tag);
    const [color, setColor] = useState(locate.state.notedata.color);

    const [bgcolor, setBgColor] = useState(colors(locate.state.notedata.color));

    const loggedIn = localStorage.getItem('username') === true;

    const updated = (stat) => {
        let somedata = {
        "id":locate.state.notedata.id.toString(),
        "heading":heading,
        "content":content,
        "tag":tag,
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
            if(e.id === locate.state.notedata.id){
                return updated(stat);
            }
            return e;
        });
        setNotesData(makingUpdate);
    }

    
    useEffect(()=>{
        if(!loggedIn && locate.state === null) {
        navigate('/login');
        }
    }, [locate.state, loggedIn]);

    function colors(c){
        const color = {
            'yellow':'#ffdb59',
            'green':'#7cff62',
            'blue':'#6189ff',
            'red':'#ff5e5e'
        }
        return color[c];
    }

    const handleSaveNote = () => {
        updateNotes('active')
        alert("Note Saved");
        navigate('/dashboard');
    }

    const handleDeleteNote = () => {
        updateNotes('trash')
        alert("Moved to trash");
        navigate('/bin');
    }

    const handleNoteArchive = () => {
        updateNotes('archive')
        alert("Note Archived");
        navigate('/archive');
    }

    return (
        <div className='flex overflow-hidden'>
            <LeftComponent pageStat={'isHome'} user={locate.state.notedata}  bookData={bookData} setBookData={setBookData}/>
            <div className='flex-[1_1_85%] flex flex-col justify-center border border-white bg-slate-400 p-2 overflow-hidden'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl border-b-gray-200 border-b-2'>
                        <input value={heading} onChange={(e)=>setHeading(e.target.value)}  type="text" name='heading' className={`w-[92%] bg-[${bgcolor}] rounded-tl-lg p-2`}/>
                        <img onClick={handleNoteArchive} src="/images/archive.png" className={`cursor-pointer w-14 bg-[${bgcolor}] p-2`}/>
                        <img onClick={handleDeleteNote} src="/images/trash.png" className={`cursor-pointer w-14 bg-[${bgcolor}] rounded-tr-lg p-2`}/>
                    </div>
                    <input type="text" name='tag' placeholder='Enter tag.....' className={`w-auto bg-[${bgcolor}] p-1`} onChange={(e)=>setTag(e.target.value)} value={tag}/>
                    <JoditEditor value={content} onChange={(e)=>setContent(e)} name="content" className="w-full h-[75dvh] rounded-b-lg"/>
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
