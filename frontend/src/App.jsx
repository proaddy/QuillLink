import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import testdata from "./data/testdata.json"
import folderlist from "./data/folderlist.json"
import bookdata from "./data/bookdata.json"
import logindata from "./data/logindata.json"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import NotesPage from "./pages/NotesPage.jsx"
import ArchivePage from "./pages/ArchivePage.jsx"
import TrashPage from "./pages/TrashPage.jsx"

function App() {
  const [notesData, setNotesData] = useState(testdata);
  const [folderData, setFolderData] = useState(folderlist);
  const [bookData, setBookData] = useState(bookdata);
  const [loginData, setLoginData] = useState(logindata);

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
          <Route index element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage loginData={loginData}/>}/>
          <Route path="/register" element={<RegisterPage loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path="/dashboard" element={<HomePage folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/archive" element={<ArchivePage folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/bin" element={<TrashPage folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="/editnote" element={<NotesPage folderData={folderData} setFolderData={setFolderData} notesData={notesData} setNotesData={setNotesData} bookData={bookData} setBookData={setBookData}/>}/>
          <Route path="*" element={<h1>404 No such page found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App