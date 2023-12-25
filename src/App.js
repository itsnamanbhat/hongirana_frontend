import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from './Main/Home/Home';
import AboutUs from './Main/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      {/* <MainNavigation /> */}
      <main>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="*" element={<Navigate to="/" />} />
       <Route path="/AboutUs" element={<AboutUs/>}/>
      
     </Routes>
     </main>
   </Router>
  );
}

export default App;
