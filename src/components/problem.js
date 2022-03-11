import React from 'react';
import './problem.css';
import chart from '../images/chart.png';


export default function problem() {
  return (
    <div className='problem-container'>
        
        <div className='problem-header'>
            <h1>The Issue</h1>

        </div>
        <div className='problem-info'>
            <div className='problem-txt'>
            <p>
            According to UNICEF, 40% of Bangladesh's population is children and statistics indicate that 600,000 are out of school.<br/>
            Among the ones in school,The proportion of children in secondary schools in Bangladesh is lowest in South Asia.<br/>
            Barely 46 per cent of the 95 per cent who pass the primary school level.<br/>
            Out of the 46 per cent only 3% go on to pursue post secondary education. <br/>
            In 2020 alone, Education of 37 million children in Bangladesh has been disrupted due to school closures since the start of the Covid-19 pandemic.
            </p>

            <p>
            Almost two-thirds of the total cost of education is covered by households in Bangladesh,<br/>
            while only one-third is by government - this is the fourth highest per cent covered by households in the world.<br/>
            This leads to poverty being the number one reason why kids do not have access to education.

            </p>
            </div>
            <div className='problem-image'>
                <img src={chart} />

            </div>

        </div>

    </div>
  )
}
