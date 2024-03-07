import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Routes,BrowserRouter, Route} from 'react-router-dom'

import { Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
    </BrowserRouter>
        
      
    
  );
}

export default App;
