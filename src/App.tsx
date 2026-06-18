import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import SalonShowcase from "./pages/SalonShowcase"
import Contact from "./pages/Contact"
import GalleryExpertise from "./components/GalleryExpertise"
import ServiceDetail from "./components/ServiceDetail"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route element={<SalonShowcase/>} path="/salon" />
     <Route element={<Home/>} path="/" />
     <Route element={<Contact/>} path="/contact" />
     <Route element={<GalleryExpertise/>} path="/gallery" />
     <Route path="/service/:id"  element={<ServiceDetail />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
