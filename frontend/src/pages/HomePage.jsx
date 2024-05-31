import { useNavigate } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

import React, { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";

export default function HomePage({bookData, setBookData, notesData, setNotesData, folderData, setFolderData}) {
  const nagivate = useNavigate();

  // axios.post("https://data-for-frontend.onrender.com/bookdata",{
  //   "id":"7",
  //   "name":"server-test-2",
  //   "userID":"5"
  // }).then(function (response){
  //   console.log(response);
  // }).catch(function (error){
  //   console.log(error);
  // })

  // axios.delete("https://data-for-frontend.onrender.com/bookdata/6").then(function (response){console.log(response)}).catch(function (error){console.log(error)});

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
