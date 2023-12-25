
import './App.css';
import {HashRouter, BrowserRouter, Route,Routes } from "react-router-dom";
import Suspense from 'react'
import PageContact from './component/Homepage/Contact/Contact';
import PageAboutUs from './component/Homepage/About/Aboutus';
import PageProduct from './component/Homepage/Product/product';
import Homepage from './component/Homepage/Homepage';

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/aboutus" element={<PageAboutUs></PageAboutUs>}></Route>
      <Route path="/contact" element={<PageContact></PageContact>}></Route>
      <Route path="/product" element={<PageProduct></PageProduct>}></Route>
   
    </Routes></BrowserRouter>
    </>



  );
}

export default App;
