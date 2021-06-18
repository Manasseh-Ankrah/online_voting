import React from 'react';
import "./Vote_Count.css";
import { Paper } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


function Vote_Count() {
    return (
        <div className="main_counts">

<Paper className="paper_count">
            <div>
                <h3 className="title">President Category</h3>
            </div>

            <div className="Presidents">
            <div className="candidate">
                <h3 className="name">Manasseh Ankrah</h3>
                <p className="vote_num">30 votes</p>
            </div>
            <div className="candidate">
                <h3 className="name">Mohammed Sogbe</h3>
                <p>10 votes</p>
            </div>
            <div className="candidate">
                <h3 className="name">Ruby Bentil</h3>
                <p>50 votes</p>
            </div>
            <div className="candidate">
                <h3 className="name">Dinah Ofooley</h3>
                <p>90 votes</p>
            </div>
            <div className="candidate">
                <h3 className="name">David Ankrah</h3>
                <p>3 votes</p>
            </div>
            <div className="candidate">
                <h3 className="name">Judah Ankrah</h3>
                <p>60 votes</p>
            </div>
            </div>
        </Paper>

            <Paper className="paper_count" style={{marginTop: 30}}>
                <div>
                    <h3 className="title">Vice-President</h3>
                </div>

                <div className="Presidents">
                <div className="candidate">
                    <h3 className="name">Jonathan Bently</h3>
                    <p className="vote_num">30 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Rosemond Addai</h3>
                    <p>10 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Joseph Andoh</h3>
                    <p>50 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">George Amoni</h3>
                    <p>90 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Amanda Acquah</h3>
                    <p>3 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jude Benson</h3>
                    <p>60 votes</p>
                </div>
                </div>
            </Paper>


            <Paper className="paper_count" style={{marginTop: 30,marginBottom: 30}}>
                <div>
                    <h3 className="title">SRC-President</h3>
                </div>

                <div className="Presidents">
                <div className="candidate">
                    <h3 className="name">Patience Ankrah</h3>
                    <p className="vote_num">30 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Daniel Darko</h3>
                    <p>10 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Charlotte Adams</h3>
                    <p>50 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jeremy Westland</h3>
                    <p>90 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Lois Essel</h3>
                    <p>3 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Kendrick Lamar</h3>
                    <p>60 votes</p>
                </div>
                </div>
            </Paper>

            <Paper className="paper_count" style={{marginTop: 30}}>
                <div>
                    <h3 className="title">Secretary</h3>
                </div>

                <div className="Presidents">
                <div className="candidate">
                    <h3 className="name">Mercy Appiah</h3>
                    <p className="vote_num">30 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Rose Prah</h3>
                    <p>10 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jacob Davidson</h3>
                    <p>50 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Johnson Elaine</h3>
                    <p>90 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Nathaniel Essel</h3>
                    <p>3 votes</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Kennedy Asiedu</h3>
                    <p>60 votes</p>
                </div>
                </div>
            </Paper>
            <p style={{marginTop:40}}></p>
            
        </div>
    )
}

export default Vote_Count;
