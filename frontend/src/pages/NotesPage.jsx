import React, { useEffect, useState } from 'react';
import LeftComponent from '../components/LeftComponent';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotesPage() {
    const nagivate = useNavigate();
    const locate = useLocation();

    const [heading, setHeading] = useState(locate.state.notedata.heading);
    const [content, setContent] = useState(locate.state.notedata.content);

    const [bgcolor, setBgColor] = useState(colors(locate.state.notedata.color));

    const loggedIn = localStorage.getItem('username') === true;
    
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
        alert("Notes Saved");
        // nagivate to dashboard
    }

    const handleDeleteNote = () => {
        alert("Note Deleted");
        // nagivate to dashboard
    }

    return (
        <div className='flex overflow-hidden'>
            <LeftComponent pageStat={'isHome'} user={locate.state}/>
            <div className='flex-[1_1_85%] flex flex-col justify-center border border-white bg-slate-400 p-2 overflow-hidden'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl border-b-gray-200 border-b-2'>
                        <input value={heading} onChange={(e)=>setHeading(e.target.value)}  type="text" name='heading' className={`w-[96%] bg-[${bgcolor}] rounded-tl-lg p-2`}/>
                        <img onClick={handleDeleteNote} src="/images/trash-red.png" className={`cursor-pointer w-14 bg-[${bgcolor}] rounded-tr-lg p-2`}/>
                    </div>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}  name="content" className={`w-full h-[75dvh] bg-[${bgcolor}] rounded-b-lg p-3 text-xl`}></textarea>
                    <div className='flex justify-between mt-5 items-center'>
                        <div className="flex space-x-2">
                            <div onClick={()=>setBgColor(colors('green'))} className='bg-green-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>setBgColor(colors('blue'))} className='bg-blue-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>setBgColor(colors('yellow'))} className='bg-yellow-500 h-6 w-6 rounded-full border-white border'/>
                            <div onClick={()=>setBgColor(colors('red'))} className='bg-red-500 h-6 w-6 rounded-full border-white border'/>
                        </div>
                        <span>{locate.state.notedata.date}</span>
                        <button onClick={handleSaveNote} className='text-center p-2 mb-2 rounded-md h-10 bg-[#FFC900]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
