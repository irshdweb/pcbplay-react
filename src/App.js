import './scss/style.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, {useState} from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
import Faqs from './pages/Faqs';
import Howitworks from './pages/Howitworks';
import Design from './pages/Design';
import Buynow from './pages/Buynow';
import Thankyou from './pages/Thankyou';
import Myaccount from './pages/Myaccount';
import Myorder from './pages/Myorder';
import Favorites from './pages/Favorites';
import DeliveryAddress from './pages/DeliveryAddress';
import PersonalInfo from './pages/PersonalInfo';
import Updatepassword from './pages/Updatepassword';
import GetInTouch from './pages/GetInTouch';
import Privacy from './pages/Privacy';

import { AlertContext } from './helper/AlertContext';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const themepcbPlay = createTheme({
  palette: {
    primary: {
      main: '#DB0038',
    },
    secondary: {
      main: '#00843C'
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
});


function App() {
  const [showAlert, setAlert] = useState(false)
  return (
    <ThemeProvider theme={themepcbPlay}>
      <AlertContext.Provider value={{ showAlert, setAlert }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/how-its-work" element={<Howitworks />} />
            <Route path="/design" element={<Design />} />
            <Route path="/buy-now" element={<Buynow />} />
            <Route path="/thankyou" element={<Thankyou />} /> 
            <Route path="/my-account" element={<Myaccount />}>
                <Route path="" element={<Myorder />} /> 
                <Route path="my-order" element={<Myorder />} /> 
                <Route path="favorites" element={<Favorites />} /> 
                <Route path="delivery-address" element={<DeliveryAddress/>}/>
                <Route path="personal-info" element={<PersonalInfo/>}/>
                <Route path="update-password" element={<Updatepassword/>}/>
            </Route>
            <Route path="/get-in-touch" element={<GetInTouch />} /> 
            <Route path="/privacy-policy" element={<Privacy />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlertContext.Provider>

    </ThemeProvider>
  );
}

export default App;
