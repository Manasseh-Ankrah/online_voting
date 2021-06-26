import React, { useContext } from 'react';
import "./Vote_Count.css";
import { Paper } from '@material-ui/core';
import { AppContextVotes } from '../ContextApi/contextApi_2';



function Vote_Count() {

    const {Pres,Vice,Src,Sec} = useContext(AppContextVotes);
    
    return (
        <div className="main_counts">

<Paper className="paper_count">
            <div>
                <h3 className="title">President </h3>
            </div>

            <div className="Presidents">
            <div className="candidate">
                <h3 className="name">Manasseh Ankrah</h3>
                <p className="vote_num">{Pres[0].Manasseh + " votes "}</p>
            </div>
            <div className="candidate">
                <h3 className="name">Mohammed Sogbe</h3>
                <p className="vote_num">{Pres[0].Mohammed + " votes "}</p>
            </div>
            <div className="candidate">
                <h3 className="name">Ruby Bentil</h3>
                <p className="vote_num">{Pres[0].Ruby + " votes "}</p>
            </div>
            <div className="candidate">
                <h3 className="name">Dinah Ofooley</h3>
                <p className="vote_num">{Pres[0].Dinah + " votes "}</p>
            </div>
            <div className="candidate">
                <h3 className="name">David Ankrah</h3>
                <p className="vote_num">{Pres[0].David + " votes "}</p>
            </div>
            <div className="candidate">
                <h3 className="name">Judah Ankrah</h3>
                <p className="vote_num">{Pres[0].Judah + " votes "}</p>
            </div>
            </div>
        </Paper>

            <Paper className="paper_count" style={{marginTop: 30}}>
                <div>
                    <h3 className="title_vice">Vice-President</h3>
                </div>

                <div className="Vice_Presidents">
                <div className="candidate">
                    <h3 className="name">Jonathan Bently</h3>
                    <p className="vote_num">{Vice[0].Jonathan + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Rosemond Addai</h3>
                    <p className="vote_num">{Vice[0].Rosemond + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Joseph Andoh</h3>
                    <p className="vote_num">{Vice[0].Joseph + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">George Amoni</h3>
                    <p className="vote_num">{Vice[0].George + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Amanda Acquah</h3>
                    <p className="vote_num">{Vice[0].Amanda + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jude Benson</h3>
                    <p className="vote_num">{Vice[0].Jude + " votes "}</p>
                </div>
                </div>
            </Paper>


            <Paper className="paper_count" style={{marginTop: 30,marginBottom: 30}}>
                <div>
                    <h3 className="title">SRC-President</h3>
                </div>

                <div className="Src_Presidents">
                <div className="candidate">
                    <h3 className="name">Patience Ankrah</h3>
                    <p className="vote_num">{Src[0].Patience + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Daniel Darko</h3>
                    <p className="vote_num" className="vote_num">{Src[0].Daniel + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Charlotte Adams</h3>
                    <p className="vote_num" className="vote_num">{Src[0].Charlotte + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jeremy Westland</h3>
                    <p className="vote_num" className="vote_num">{Src[0].Jeremy + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Lois Essel</h3>
                    <p className="vote_num" className="vote_num">{Src[0].Lois + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Kendrick Lamar</h3>
                    <p className="vote_num" className="vote_num">{Src[0].Kendrick + " votes "}</p>
                </div>
                </div>
            </Paper>

            <Paper className="paper_count" style={{marginTop: 30}}>
                <div>
                    <h3 className="title">Secretary</h3>
                </div>

                <div className="Secretary">
                <div className="candidate">
                    <h3 className="name">Mercy Appiah</h3>
                    <p className="vote_num">{Sec[0].Mercy + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Rose Prah</h3>
                    <p className="vote_num">{Sec[0].Rose + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Jacob Davidson</h3>
                    <p className="vote_num">{Sec[0].Jacob + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Johnson Elaine</h3>
                    <p className="vote_num">{Sec[0].Johnson + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Nathaniel Essel</h3>
                    <p className="vote_num">{Sec[0].Nathaniel + " votes "}</p>
                </div>
                <div className="candidate">
                    <h3 className="name">Kennedy Asiedu</h3>
                    <p className="vote_num">{Sec[0].Kennedy + " votes "}</p>
                </div>
                </div>
            </Paper>
            <p style={{marginTop:40}}></p>
            
        </div>
    )
}

export default Vote_Count;
