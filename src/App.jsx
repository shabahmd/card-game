import React from 'react'
import { useState, useEffect } from 'react';
import video from "./assets/img/camp.mp4";
import backgroundMusic from "./assets/sounds/background_music.mp3";
import flipSound from "./assets/sounds/flip.mp3";
import clickSound from "./assets/sounds/click.wav";

import LoadingPage from './components/LoadingPage';

import './styles/normalize.css';

const App = () => {
  return (
    <LoadingPage />
  )
}

export default App