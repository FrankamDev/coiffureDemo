import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import SalonShowcase from "./pages/SalonShowcase"
import Contact from "./pages/Contact"
import GalleryExpertise from "./components/GalleryExpertise"
import ServiceDetail from "./components/ServiceDetail"
import FloatingChat from "./components/FloatingChat"
import Prestations from "./components/Prestations"
import PrestationsDetails from "./pages/PrestationsDetails"
import GalleryDisplay from "./pages/GalleryDisplay"
import { BookingSection } from "./pages/BookingSection"




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route element={<SalonShowcase/>} path="/salon" />
     <Route element={<Home/>} path="/" />
     <Route element={<Contact/>} path="/contact" />
     <Route element={<GalleryExpertise/>} path="/gallery" />
     <Route element={<Prestations/>} path="/prestations" />
     <Route path="/service/:id"  element={<ServiceDetail />} />
     <Route path="/prestations/:id"  element={<PrestationsDetails />} />
     <Route path="/rdv"  element={<BookingSection />} />
     <Route path="/galleries"  element={<GalleryDisplay />} />
    </Routes>
    
    </BrowserRouter>
    <FloatingChat/>
    </>
  )
}

export default App
