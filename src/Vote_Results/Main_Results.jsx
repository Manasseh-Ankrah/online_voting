import React from 'react';
import './Main_Vote.css';
import Positions from './Positions';
import Header from './Header';

function Main_Vote() {
    return (
        <div className="main_vote">
            <Results_Header />
            <div>
                <div style={{marginBottom: 30,marginTop: 10}}>
                   <Results />
                </div>
            </div>

        </div>
    )
}

export default Main_Vote;
