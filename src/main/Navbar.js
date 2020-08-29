import React from 'react';
import './Navbar.css';

import iconWorkDev from '../assets/icon-work-dev.ico'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Box-Icon">
                <img className="Icon-Style" src={iconWorkDev} alt="workDev"></img>
            </div>
            <div className="Box-Title">
                <div className="Box-Title-Name">
                    <div className="Title-Work">work</div>
                    <div className="Title-Dev">Dev</div>
                </div>
                <div className="Box-Title-By">
                    <div>by nivaldohydalgo</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;