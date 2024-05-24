import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import NotesPage from "./pages/NotesPage.jsx"
import ArchivePage from "./pages/ArchivePage.jsx"
import TrashPage from "./pages/TrashPage.jsx"

function App() {
  return (
    <div className="font-robotoslab">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="/archive" element={<ArchivePage/>}/>
          <Route path="/bin" element={<TrashPage/>}/>
          <Route path="/editnote" element={<NotesPage/>}/>
          <Route path="*" element={<h1>404 No such page found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App