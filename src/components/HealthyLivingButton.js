import React from 'react';

export default function HealthyButton() {
    const handleClicked = () => {
        console.log('Healthy Button has been clicked!') 
    };
    return (
        <div className="button-container"> 
        <button className="button-container" onClick={handleClicked}>
            Healthy Living
        </button>
        </div>
    );
    }
    


