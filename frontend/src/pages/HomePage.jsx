import { useNavigate } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

import React, { useState } from 'react';
import { useEffect } from "react";

export default function HomePage({bookData, setBookData, notesData, setNotesData, folderData, setFolderData}) {
  const nagivate = useNavigate();

  // console.log(notesData);

  const loggedIn = localStorage.getItem('username') != null;
  const uname = localStorage.getItem('userID') != null;
  const uid = localStorage.getItem('userID');
  
  useEffect(()=>{
    if(!loggedIn && !uname) {
      nagivate('/login');
    }
  }, [])

  // on different books
  const [bookStat, setBookStat] = useState('');

  return (
    <div className="flex overflow-hidden">
        <LeftComponent pageStat={'isHome'} bookStat={bookStat} setBookStat={setBookStat} user={uid} bookData={bookData} setBookData={setBookData}></LeftComponent>
        
        <RightComponent bookStat={bookStat} user={uid} folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData}></RightComponent>
    </div>
  )
}
