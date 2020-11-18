import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Components/Player"

const spotify = new SpotifyWebApi();

// Run code based on a given Condition

function App() {
  const [token, setToken] = useState(null); //short term memory store

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token) // giving acces to the object instance
      spotify.getMe().then(user => {
        console.log(user)
      })
    }
  }, []);

  return (
    <div className="App">{token ? <Player/> : <Login />}</div>  // si hay token estoy loggueado
  );
}

export default App;
