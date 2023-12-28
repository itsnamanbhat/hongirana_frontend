import React from "react";
import "./Contact.css"
import Connect from "./connect";

const Contact=()=>{
    return(
    <div className="main_container">
    <p>Get in touch</p>
    <h3>Send A Message</h3>
    <div className="sub_container">
        <div className="message_container">

        <div className="line1">
        <div className="input-fields">
        <p>First Name</p>
        <input type="text" id="FName" placeholder="First Name"></input>
        </div>
        <div className="input-fields">
        <p>Last Name</p>
        <input type="text" id="LName" placeholder="Last Name"></input>
        </div>
        </div>

        <div className="line2">
        <div className="input-fields">
        <p>Email</p>
        <input type="email" id="mail" placeholder="Email"></input>
        </div>
        <div className="input-fields">
        <p>Phone</p>
        <input type="number" id="ph" placeholder="Phone"></input>
        </div>
        </div>


        <div className="input-fields">
        <p>Message</p>
        <textarea placeholder="Write your message here"></textarea>
        </div>
        <button className="submit_message">Send Message</button>

        </div>
        <div className="address_container">
            <h3>Address</h3>
            <p><span>Location</span>:The proper location for the company </p>
            <p><span>Phone</span>:+01 01101 00101 </p>
            <p><span>Email</span>:abc@email.com </p>
        </div>
    </div> 
    <Connect/>
    </div>)
}

export default Contact;
