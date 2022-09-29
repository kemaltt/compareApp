import './App.css';
import ProductComparison from './components/ProductComparison';
import data from './products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductComparison data={data} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/productdetail/:id' element={<ProductDetail data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
