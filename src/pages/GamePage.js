import Header from '../components/Header.js';
import Card from '../components/Card.js';
import GameOver from '../components/GameOver.js';
import '../styles/GamePage.scss';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GamePage({
    goBackToStartPage,
    playClick,
    playFlip,
    shuffle,
    getCharactersToPlayWith,
    countScore,
    charactersToPlayWith,
    score,
    bestScore,
    setScore,
    setBestScore,
    setCharactersToPlayWith,
    stateRoundResult
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        getCharactersToPlayWith();

        return () => {
            getCharactersToPlayWith([]);
            setScore(0);
            setBestScore(0);
            charactersToPlayWith.forEach((character) => {
                character.clicked = false;
            });
        };
    }, []);

    const handleCardClick = (character) => {
        setIsClicked(true);

        if (isClicked) return;

        let turnResult = stateRoundResult(character);
        setResult(turnResult);
        character.clicked = true;

        if (turnResult === '') {
            if (turnResult === 'win') countScore();
            setIsClicked(false);
        }
        countScore();


        setIsFlipped(true)
        playFlip();

        setTimeout(() => {
            shuffle(charactersToPlayWith)
        }, 800);

        setTimeout(() => {
            setIsFlipped(false);
            setIsClicked(false)
            playFlip();
            turnResult = '';
        }, 1300);
    }


    const restartTheGame = () => {
        setScore(0);
        setResult('');
        charactersToPlayWith.forEach((character) => {
            character.clicked = false;
        });

        getCharactersToPlayWith();
    };

    return (
        <>
            <Header
                goBackToStartPage={goBackToStartPage}
                playClick={playClick}
                score={score}
                bestScore={bestScore}
            />
            <motion.div
                className='playGround'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='cardSection'>
                    {charactersToPlayWith.map((character) => (
                        <Card
                            key={character.id}
                            character={character}
                            isFlipped={isFlipped}
                            handleCardClick={handleCardClick}
                        />
                    ))}
                </div>
                <div className='remainIndicator'>
                    {`${score} / ${charactersToPlayWith.length}`}
                </div>
            </motion.div>
            <AnimatePresence>
                {result !== '' && (
                    <GameOver
                        restartTheGame={restartTheGame}
                        playClick={playClick}
                        result={result}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default GamePage;
