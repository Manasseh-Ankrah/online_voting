import React from 'react';
import './Vote_Count.css';
import Count_Header from './Count_Header';
import Vote_Count from './Vote_Count';

function Main_Vote() {
    return (
        <div className="main_vote">
            <Count_Header />
            <div>
                <div>
                   <Vote_Count />
                </div>
            </div>

        </div>
    )
}

export default Main_Vote;
