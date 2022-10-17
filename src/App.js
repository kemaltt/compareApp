import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductComparison from './components/ProductComparison';
import data from './products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { useAuth0 } from '@auth0/auth0-react'


function App() {


  console.log(process.env.REACT_APP_API_KEY);
  const { loginWithRedirect, isAuthenticated, logout, isLoading, user } = useAuth0()



  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect} user={user} />
        <Routes>
          <Route path='/' element={<ProductComparison data={data} isAuthenticated={isAuthenticated} isLoading={isLoading} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/productdetail/:id' element={<ProductDetail data={data} />} />
        </Routes>
        <Footer isAuthenticated={isAuthenticated} />
      </BrowserRouter>


    </div>
  );
}

export default App;
