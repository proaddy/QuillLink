import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"

function App() {
  return (
    <div className="font-robotoslab">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="*" element={
            <h1>404 No such page found</h1>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
