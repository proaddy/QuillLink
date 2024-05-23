import { useLocation, useNavigate } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

import React, { useState } from 'react';
import { useEffect } from "react";

export default function HomePage() {
  const nagivate = useNavigate();
  const locate = useLocation();

  const loggedIn = localStorage.getItem('username') === true;
  
  useEffect(()=>{
    if(!loggedIn && locate.state === null) {
      nagivate('/login');
    }
  }, [locate.state, loggedIn])

  // isHome, isArchive, isTrash
  const [pageStat, setPageStat] = useState('isHome');

  // on different books
  const [bookStat, setBookStat] = useState('');

  return (
    <div className="flex overflow-hidden">
        <LeftComponent pageStat={pageStat} setPage={setPageStat} bookStat={bookStat} setBookStat={setBookStat}></LeftComponent>
        
        <RightComponent pageStat={pageStat} bookStat={bookStat} user={locate.state}></RightComponent>
    </div>
  )
}
