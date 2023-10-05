import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
    const [showHowToPlay, setShowHowToPlay] = useState(false);

    const toggleShowHowToPlay = () => {
        if (showHowToPlay) {
            setShowHowToPlay(false);
        } else {
            setShowHowToPlay(true);
            // setShowDescription(false)
        }
    };

    return (
        <div id="homepage-container">
            <div id="title-container">
                <h1 id="homepage-title">Vanguardians</h1>
            </div>

            <div id="home-text-container">
                {/* <h2 id='description-of-game'>
          DESCRIPTION OF GAME
        </h2> */}

                <h2 id="how-to-play" onClick={toggleShowHowToPlay}>
                    HOW TO PLAY
                </h2>

                <Link id="link-to-game" to="/game">
                    <button id="play-button">Play Now!</button>
                </Link>
            </div>

            {showHowToPlay && (
                <div id="popup-container">
                    <div id="popup" data-testid="howtoplay-popup">
                        <button id="close-button" onClick={toggleShowHowToPlay}>
                            X
                        </button>
                        <p>VanGuardians is a Party-Management game where your Guardians fight enemies automatically, but they can switch between 2 modes of fighting. You must take control of the party by switching their individual modes.</p>
                        <br></br>
                            <p>Switch Guardian Mode by pressing keys '1' through '6'</p>
                            <p>Command Guardians to retreat by pressing 'R'</p>
                            <p>Command Guardians to advance by pressing 'A'</p>
                    </div>
                </div>
            )}

            <div id="images-container">
                <img src="images\fantasywarrior.gif" alt="fantasy warrior" />
                <img src="images\heavyarmor.gif" alt="heavy armor" />
                <img src="images\fireworm.gif" alt="fireworm" />
                <img src="images\van2.png" alt="van" />
                <img src="images\martialhero.gif" alt="martial hero" />
                <img src="images\wizard.gif" alt="wizard" />
                <img src="images\huntress.gif" alt="huntress" />
            </div>
            {/* <div id="home-footer"></div> */}
        </div>
    );
};

export default Home;
