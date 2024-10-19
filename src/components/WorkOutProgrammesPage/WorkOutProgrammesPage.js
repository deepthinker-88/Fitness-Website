import React from 'react';
import './WorkOutProgrammesPage.css'
import BackToHomePageButton from '../BackToHomePageButton/BackToHomePageButton';
export default function WorkOutProgrammesPage(props){
    return(
    <div className='content'> 
        <header className='navbar-workoutprogrammes-page'>
        <BackToHomePageButton />
        </header>
        <h1>{props.title}</h1>
    </div>
)}
