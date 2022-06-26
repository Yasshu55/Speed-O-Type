import React from "react";

const ResultDetails = () =>{

    return (
        <>
        <ul className="result-details" >
            <li className="time">
                <p>Time Left:</p>
                <span><b>60</b></span>
            </li>
            <li className="mistake">
                <p>Mistakes</p>
                <span>0</span>
            </li>
            <li className="wpm">
                <p>WPM:</p>
                <span><b>60</b></span>
            </li>
            <li className="cpm">
                <p>CPM:</p>
                <span>0</span>
            </li>
        </ul>
        <button>Try Again</button>
        </>
    )

}

export default ResultDetails;