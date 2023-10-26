import Footer from './Footer';
import Header from '../components/Header.js'
import Card from '../components/Card.js'
import GameOver from '../components/GameOver.js'
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
    CharactersToPlayWith,
    score,
    bestScore,
    setScore,
    setBestScore,
    setCharactersToPlayWith,
    stateRoundResult


}) {


    const [isFlipped, setisFlipped] = useState('false')
    const [isClicked, setIsClicked] = useState('false')
    const [result, setResult] = useState('');

    useEffect(() =>
        getCharactersToPlayWith();

    return () => {

        getCharactersToPlayWith([]);
        setScore(0);
        setBestScore(0);
        CharactersToPlayWith.forEach((character) => {
            character.clicked = false;
        })
    }, []);



    const restartTheGame = () => {
        setScore(0);
        setResult('');
        CharactersToPlayWith.forEach((character) => {
            character.clicked = false;
        }
        )

        getCharactersToPlayWith();
    };

}


return (
    <>




    </>
)
}

export default GamePage;