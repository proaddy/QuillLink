import { Link } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

import React, { useState } from 'react';

export default function HomePage() {
  // isHome, isArchive, isTrash
  const [pageStat, setPageStat] = useState('isHome');

  // on different books
  const [bookStat, setBookStat] = useState('');

  return (
    <div className="flex overflow-hidden">
        <LeftComponent pageStat={pageStat} setPage={setPageStat} bookStat={bookStat} setBookStat={setBookStat}></LeftComponent>
        
        <RightComponent pageStat={pageStat} bookStat={bookStat}></RightComponent>
    </div>
  )
}
