import { useState, useEffect } from 'react';
import video from "./assets/img/camp.mp4";
import backgroundMusic from "./assets/sounds/background_music.mp3";
import flipSound from "./assets/sounds/flip.mp3";
import clickSound from "./assets/sounds/click.wav";
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';

import './styles/normalize.css';
import LoadingPage from './components/LoadingPage';
import Footer from './components/Footer';

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) {

  const [isLoadingOver, setIsloadingOVer] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDifficultyChosen, setIsDifficultyChosen] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsloadingOVer(true)
    }, 3000)
  }
    , []);

  const goBacktoStartPage = () => {
    setIsDifficultyChosen(false)
  }



  return (
    <>
      {!isLoadingOver ?
        <LoadingPage />
        : (
          <>
            {!isDifficultyChosen ?
              <StartPage
                setIsDifficultyChosen={setIsDifficultyChosen} />

              : <GamePage
                goBacktoStartPage={goBacktoStartPage} />}


            <Footer
              setIsMusicPlaying={setIsMusicPlaying}
              isMusicPlaying={isMusicPlaying}
            />


          </>
        )
      }
    </>
  )
}

export default App