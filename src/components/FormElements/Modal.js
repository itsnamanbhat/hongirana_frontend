import React from "react";
import  ReactDOM  from "react-dom";
import { CSSTransition } from 'react-transition-group';

import Backdrop from "../../components/UIElements/BackDrop";
import QRImage from "../Images/QR code.jpg"

import "./Modal.css"


const ModalOverlay=props=>{
    const content=(
    <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
        </header>
        <div className={`modal__content ${props.imageClass}`}>
            <img className="qr_image" src={QRImage}></img>
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
        </footer>
    </div>
    )
    return (ReactDOM.createPortal(content,document.getElementById("modal-hook")))
}

const Modal=props=>{
    return(<React.Fragment>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition>
    <ModalOverlay {...props} />
    </CSSTransition>
    </React.Fragment>
    )

   
}

export default Modal;