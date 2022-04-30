import React from "react";

function HowToPlay(){
    return(
        <div className={"HowToPlay"}>
            <h1>How to Play: </h1>
            <p>You are given six tries to guess a five letter word.</p>
            <h2>Green:</h2>
            <p>When the letter turns green, it is in the right place and in the word.</p>
            <h2>Yellow:</h2>
            <p>When the letter turns green, it is in the word but in the incorrect place.</p>
            <p>If the word does not turn green or yellow, it is not in the word at all.</p>
        </div>
    )
}
export default HowToPlay;