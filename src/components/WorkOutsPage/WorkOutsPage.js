import React from 'react';
import './WorkOutsPage.css'
import BackToHomePageButton from '../BackToHomePageButton/BackToHomePageButton';
export default function WorkOutsPage(props){
    return(
        <div className='content'>
            <header className='navbar-workouts-page'>
            <BackToHomePageButton/>
            </header>
        <h1 className="workouts-text">{props.title}</h1>
        <h2>Upper Body Workout</h2>
        <h2>Lower Body Workout</h2>
        <h2>Full-Body Workout</h2>
        </div>
    )

}
