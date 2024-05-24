import { useLocation, useNavigate } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

import React, { useState } from 'react';
import { useEffect } from "react";

export default function HomePage() {
  const nagivate = useNavigate();

  const loggedIn = localStorage.getItem('username') != null;
  const uname = localStorage.getItem('userID') != null;

  const userData = {
    "username":localStorage.getItem('username'),
    "_id":localStorage.getItem('userID')
  }
  
  useEffect(()=>{
    if(!loggedIn && !uname) {
      nagivate('/login');
    }
  }, [loggedIn])

  // on different books
  const [bookStat, setBookStat] = useState('');

  return (
    <div className="flex overflow-hidden">
        <LeftComponent pageStat={'isHome'} bookStat={bookStat} setBookStat={setBookStat} user={userData}></LeftComponent>
        
        <RightComponent bookStat={bookStat} user={userData}></RightComponent>
    </div>
  )
}
