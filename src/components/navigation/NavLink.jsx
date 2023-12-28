import React from "react";

import { NavLink } from "react-router-dom";
import "./NavLink.css"

const NavLinks =props=>{
return <ul className="nav-links">
<li>
    <NavLink to="/" exact>Home</NavLink>
</li>
<li>
    <NavLink to="/Gallery">Gallery</NavLink>
</li>
<li>
    <NavLink to="/blog">Blogs</NavLink>
</li>
<li>
    <NavLink to="/AboutUs">About Us</NavLink>
</li>
<li>
    <NavLink to="/contact">Contact</NavLink>
</li>
<li>
    <NavLink to="/donate">Donate</NavLink>
</li>

</ul>
}

export default NavLinks;