import React from 'react'
import "./Player.css"
import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import Body from "../Components/Body"

function Player() {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
            </div>
            <h1>Welcome to Spotify</h1>
                <Footer/>
        </div>
    )
}

export default Player
