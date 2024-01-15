import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/FormElements/Button";

const Home = (props) => {
  return (<div className="home_main">
  <div className="home_header">
    <div className="navigation">
      <Button toClass="" to="/Gallery">Gallery</Button>
      <Button toClass="" to="/blog">Blog</Button>
      <Button toClass="" to="/AboutUs">AboutUs</Button>
      <Button toClass="" to="/contact">Contact</Button>
      <Button toClass="" to="/donate">Donate</Button>
      <Button toClass="" to="/people">People</Button>

    </div>
</div>
    <div className="home_center">
      <h1>HONGIRANA SEVA PRATISHTANA</h1>
      <p>Let Us come together to make a difference</p>
    </div>
    </div>
  );
};

export default Home;
