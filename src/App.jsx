import { useState, useEffect } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import Footer from './components/Footer';
import video from './assets/img/camp.mp4';
import backgroundMusic from './assets/sounds/background_music.mp3';
import flipSound from './assets/sounds/flip.mp3';
import clickSound from './assets/sounds/click.wav';
import characters from './characters';
import './styles/normalize.css';
import './styles/App.scss';

function App({ handleSongLoading, handleSongPlaying, handleSongFinishedPlaying }) {
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDifficultyChosen, setIsDifficultyChosen] = useState(false);
  const [charactersToPlayWith, setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay, setCharactersToDisplay] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const difficultyLevel = [8, 12]; // Change these values as needed

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOver(true);
    }, 3000);
  }, []);

  const goBackToStartPage = () => {
    setIsDifficultyChosen(false);
    setCharactersToPlayWith([]);
    charactersToPlayWith.forEach((character) => {
      character.clicked = false;
    });
  };

  const playFlip = () => {
    if (isSoundPlaying) {
      const audio = new Audio(flipSound);
      audio.volume = 0.2;
      audio.play();
    }
  };

  const playClick = () => {
    if (isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.07;
      audio.play();
    }
  };

  const getCharactersToPlayWith = () => {
    let randomCharacters = [];
    while (randomCharacters.length < difficultyLevel[0]) {
      const randNum = Math.floor(Math.random() * characters.length);
      if (!randomCharacters.includes(characters[randNum])) {
        randomCharacters.push(characters[randNum]);
      }
    }
    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters);
  };

  const shuffle = (array) => {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length < difficultyLevel[1]) {
      const randNum = Math.floor(Math.random() * array.length);
      const character = array[randNum];
      if (
        !shuffledCharacters.includes(character) &&
        (clicked < difficultyLevel[1] - 1 || !character.clicked)
      ) {
        shuffledCharacters.push(character);
        clicked += +character.clicked;
      }
    }

    setCharactersToDisplay(shuffledCharacters);
  };

  const countScore = () => {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(bestScore + 1);
    }
  };

  const stateRoundResult = (character) => {
    if (character.clicked) {
      return 'lose';
    }
    if (score === difficultyLevel[0] - 1) {
      return 'win';
    } else {
      return '';
    }
  };

  return (
    <>
      {!isLoadingOver ? (
        <LoadingPage />
      ) : (
        <>
          {!isDifficultyChosen ? (
            <StartPage setIsDifficultyChosen={setIsDifficultyChosen} />
          ) : (
            <GamePage
              goBackToStartPage={goBackToStartPage}
              playClick={playClick}
              playFlip={playFlip}
              getCharactersToPlayWith={getCharactersToPlayWith}
              setCharactersToPlayWith={setCharactersToPlayWith}
              charactersToPlayWith={charactersToPlayWith}
              charactersToDisplay={charactersToDisplay}
              shuffle={shuffle}
              score={score}
              setScore={setScore}
              setBestScore={setBestScore}
              countScore={countScore}
              stateRoundResult={stateRoundResult}
            />
          )}
          <Footer
            setIsMusicPlaying={setIsMusicPlaying}
            isMusicPlaying={isMusicPlaying}
            isSoundPlaying={isSoundPlaying} // You need to define isSoundPlaying
            setIsSoundPlaying={setIsSoundPlaying}
            playClick={playClick}
          />
        </>
      )}

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      <Sound
        url={backgroundMusic}
        playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        volume={2.8}
        loop={true}
      />
    </>
  );
}

export default App;
