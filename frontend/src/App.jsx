import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import NotesPage from "./pages/NotesPage.jsx"
import ArchivePage from "./pages/ArchivePage.jsx"
import TrashPage from "./pages/TrashPage.jsx"

function App() {
  const [notesData, setNotesData] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [loginData, setLoginData] = useState([]);

  useEffect(()=>{
    axios.get("https://data-for-frontend.onrender.com/testdata").then((res)=>setNotesData(res.data));
    axios.get("https://data-for-frontend.onrender.com/bookdata").then((res)=>setBookData(res.data));
    axios.get("https://data-for-frontend.onrender.com/folderlist").then((res)=>setFolderData(res.data));
    axios.get("https://data-for-frontend.onrender.com/logindata").then((res)=>setLoginData(res.data));
  },[])

  return (
    <div className="font-robotoslab">
      <div className="hidden">
        <div className="bg-[#ffd744]"></div>
        <div className="bg-[#71fc55]"></div>
        <div className="bg-[#406ef7]"></div>
        <div className="bg-[#f94242]"></div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage loginData={loginData}/>}/>
          <Route path="/login" element={<LoginPage loginData={loginData}/>}/>
          <Route path="/register" element={<RegisterPage loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path="/dashboard" element={<HomePage folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/archive" element={<ArchivePage notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/bin" element={<TrashPage notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/editnote" element={<NotesPage notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="*" element={<h1>404 No such page found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App