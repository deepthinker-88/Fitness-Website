import React from 'react';

export default function WorkoutProgrammeButton () {
    const handleClick = () => {
        console.log('Programme button has been clicked')
    }

    return (
        <div className='button-container'>
            <button onClick={handleClick}>Workout Programmes</button>
            {/* <button onClick={handleClick}>Workouts</button> */}
        </div>
    )

}
