import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainNavigation from './components/navigation/MainNavigation';
import AboutUs from './Main/AboutUs/AboutUs';
import Contact from './Main/ContactUs/Contact';
import Blog from './Main/Blog/Blog';
import Donate from './Main/Donate/Donate';
import Home from "./Main/Home/Home";
import People from './Main/People/People';


function App() {
  return (<React.Fragment>
    <Router>
      <MainNavigation />
      <main>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="*" element={<Navigate to="/" />} />
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/donate" element={<Donate/>}/>
       <Route path='/people' element={<People/>}/>
      
     </Routes>
     </main>
   </Router>
   </React.Fragment>
  );
}

export default App;
