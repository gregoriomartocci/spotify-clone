import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Components/Player"
import {useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi();

// Run code based on a given Condition

// if i grab something from the data layer i put const [{user}]
// dispatch is like a speciall gun to shoot at DataLayer.

function App() {
  const [token, setToken] = useState(null); //short term memory store
  const [{} , dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token) // giving acces to the object instance
      spotify.getMe().then(user => {
        console.log(user)
        dispatch({
          type:"SET_USER",
          user:user
        })
      })
    }
  }, []);

  return (
    <div className="App">{token ? <Player/> : <Login />}</div>  // si hay token estoy loggueado
  );
}

export default App;
