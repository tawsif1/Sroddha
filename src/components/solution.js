import React from 'react';
import './solution.css'
import Jar from "../images/money jar.png"


export default function solution() {
  return (
    <div className='solution-container'>
    <div className='solution-header'>
        <h1>The Solution</h1>
    </div>
    <div className='solution-infograph'>
    <div className='solution-graphic'>
        
        <img className='jar' src={Jar}/>


    </div>
    <div className='solution-info'>
        <p>
            This is a platform created to sponsor underprivelleged childrens' education and to provide them with a role model that believes in their future.
            Our aim is to provide 1 to 3 mentors to a child depending on their level of education and funds provided by each mentor. <br/> <br/>

            The role of the mentors: <br/>
            1. The mentors will bear the expense of the child's education. <br/>
            2. The mentors are expected to attend a video call with their child atleast once a month <br/><br/>

            Our aim is to not only help them pursue their education, as well to give them a role model that will help them believe in themselves and break out of poverty.
        </p>

        <p>
            Currently we have only one child. 
        </p>
    </div>
    </div>

</div>
  )
}
