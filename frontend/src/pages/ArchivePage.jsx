import {useState } from "react";
import { useNavigate } from "react-router-dom";

import Cards from "../components/Cards.jsx";
import LeftComponent from "../components/LeftComponent.jsx";

export default function ArchivePage({notesData, setNotesData, bookData, setBookData}) {
    let dataarray = notesData.filter(e=>e.status === 'archive');
    const navigate = useNavigate();

    const userid = localStorage.getItem('userID');
    const uname = localStorage.getItem('username');

    const [searchText, setSearchText] = useState("");

    const userData = {
        "username":uname,
        "_id":userid
    }

    const logout = () => {
        localStorage.setItem("username", null);
        localStorage.setItem("userID", null);
        navigate("/login");
    };

    return (
        <div className="flex overflow-hidden">
            <LeftComponent pageStat={'isArchive'} user={userData} bookData={bookData} setBookData={setBookData}/>
            <div className="flex flex-col flex-[1_1_85%] bg-slate-400 p-2 overflow-hidden">
            <div className="w-[95%] self-center">
                {/* Search and Logout */}
                <div className="flex bg-white h-14 justify-between items-center p-2 rounded-lg">
                    <span className='flex items-center'>
                        <img src="/images/search.png" alt="search" className='w-5 m-2'/>
                        <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='Search for Notes....' className='p-2 rounded-md'/>
                    </span>
                    <div onClick={logout} className="flex rounded-full w-10 cursor-pointer">
                        <img src="/images/profile.png" alt="user" title='Logout Button'/>
                    </div>
                </div>
                <ul className="list-none text-gray-600 my-5">
                <li className="font-bold">Archives</li>
                </ul>
                <Cards dataarray={dataarray} searchText={searchText} notesData={notesData} setNotesData={setNotesData} userid={userid} page='archive'/>
            </div>
            </div>
        </div>
    );
}
