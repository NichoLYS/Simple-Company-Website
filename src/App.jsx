
import './App.css'
import Navbar from './Component/Navbar';
import Work from './Page/Work';
import Shape from './Page/Shape';
import Footer from './Component/Footer'
import { Routes, Route } from 'react-router-dom';
import ContactUs from './Page/ContactUs';

function App() {

  return (
    <div className="h-[400vh]">
      <Routes>
        <Route path="/" element={<Shape />} />
        <Route path="/work" element={<Work/>}/>
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App
