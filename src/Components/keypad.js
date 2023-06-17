import React, {useState} from 'react';

/**
 * Ref: https://reactgo.com/react-for-loop/
 * https://upmostly.com/tutorials/how-to-react-onkeypress-event
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Keypad(props) {
    const buttons = [
        ["heater1","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","q"],
        ["heater2","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","w"],
        ["heater3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","e"],
        ["heater4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","a"],
        ["clap","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","s"],
        ["openH","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","d"],
        ["kickHat","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","z"],
        ["kick","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","x"],
        ["closedH","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","c"]
        // "heater4","clap","openH","kickHat","kick","closedH"
    ];
    const [currAudio, setCurrAudio] = useState("");
    function handleKeyPress(e){
        let keyPressed = e.key;
        switch(keyPressed){
            case "q":
                setCurrAudio("heater1");
                let audio1 = document.getElementById("heater1");
                audio1.play();
                break;
            case "w":
                setCurrAudio("heater2");
                let audio2 = document.getElementById("heater2");
                audio2.play();
                break;
            case "e":
                setCurrAudio("heater3");
                let audio3 = document.getElementById("heater3");
                audio3.play();
                break;
            case "a":
                setCurrAudio("heater4");
                let audio4 = document.getElementById("heater4");
                audio4.play();
                break;
            case "s":
                setCurrAudio("clap");
                let audio5 = document.getElementById("clap");
                audio5.play();
                break;
            case "d":
                setCurrAudio("openH");
                let audio6 = document.getElementById("openH");
                audio6.play();
                break;
            case "z":
                setCurrAudio("kickHat");
                let audio7 = document.getElementById("kickHat");
                audio7.play();
                break;
            case "x":
                setCurrAudio("kick");
                let audio8 = document.getElementById("kick");
                audio8.play();
                break;
            case "c":
                setCurrAudio("closedH");
                let audio9 = document.getElementById("closedH");
                audio9.play();
                break;
            default:
                break;
        }
    }

    function clickButton(e){
        switch(e){
            case "heater1":
                setCurrAudio("heater1");
                let audio1 = document.getElementById("heater1");
                audio1.play();
                break;
            case "heater2":
                setCurrAudio("heater2");
                let audio2 = document.getElementById("heater2");
                audio2.play();
                break;
            case "heater3":
                setCurrAudio("heater3");
                let audio3 = document.getElementById("heater3");
                audio3.play();
                break;
            case "heater4":
                setCurrAudio("heater4");
                let audio4 = document.getElementById("heater4");
                audio4.play();
                break;
            case "clap":
                setCurrAudio("clap");
                let audio5 = document.getElementById("clap");
                audio5.play();
                break;
            case "openH":
                setCurrAudio("openH");
                let audio6 = document.getElementById("openH");
                audio6.play();
                break;
            case "kickHat":
                setCurrAudio("kickHat");
                let audio7 = document.getElementById("kickHat");
                audio7.play();
                break;
            case "kick":
                setCurrAudio("kick");
                let audio8 = document.getElementById("kick");
                audio8.play();
                break;
            case "closedH":
                setCurrAudio("closedH");
                let audio9 = document.getElementById("closedH");
                audio9.play();
                break;
            default: break;
        }
    }

    return (
        <div id="keypad">
            <div id="name">{currAudio}</div>
            <div id="grid">
                {buttons.map((button,index) =>
                    <button key={index} onKeyDown={(e) => handleKeyPress(e)} onClick={() => clickButton(button[0])}>
                        {button[2]}
                        <audio src={button[1]} id={button[0]}></audio>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Keypad;