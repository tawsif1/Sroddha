import React from 'react'
import './footer.css';
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1>SRODDHA</h1>
        </div>
        <div className='footer-right'>
            <div><AiOutlineMail style={{ color: 'white', fontSize: "30px",  }} className='icon'/> : tawsifahmed119@gmail.com</div>
            <div><AiOutlineMobile style={{ color: 'white', fontSize: "30px",  }} className='icon phone'/> : +15875681675</div>

        </div>
    </div>
  )
}
