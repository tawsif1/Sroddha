import {React,useState} from 'react';
import './children.css';
import { AiFillInfoCircle } from "react-icons/ai";

export default function Children() {
  const [show, setShow] = useState(false);
  return (
  <div className='children-container'>
    <h1>The Children</h1>
    <div className='children-grid'>
        <div className='children-item'>
          <h3>RAYHAN</h3>
          <h5>Govt. Science College (2nd year)</h5>
          <h5>Result in GPA: PSC: 5.00, JSC: 5.00, SSC: 5.00</h5>
          <h5>Tuition Required: 7,000 bdt or approximately 103.00 cad </h5>
          <h5>Status: Mentors found ☑</h5>

        </div>

        <div className='children-item'> 
          <h3>Innaya Islam</h3>
          <h5>Kamarjuri Yousuf Ali High School</h5>
          <h5>Result in GPA: PSC: 5.00, JSC: 5.00 </h5>
          <h5>Tuition Required: 1,800 bdt or approximately 30.00 cad </h5>
          <h5>Status: Looking for mentors.</h5>
          <form action="https://gmail.us14.list-manage.com/subscribe/post?u=557a92d8ade536a8347669831&amp;id=80b5a49b5b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className='form'>
            <AiFillInfoCircle/> <button className="submit" type="submit">Sign Up to be a mentor</button>
          </form>
        </div>    
    </div>
  </div>
   
  )
}
