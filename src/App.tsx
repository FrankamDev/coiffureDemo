import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import GalleryExpertise from "./components/GalleryExpertise"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import SalonShowcase from "./pages/SalonShowcase"
import Home from "./components/Home"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route element={<SalonShowcase/>} path="/salon" />
     <Route element={<Home/>} path="/" />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
