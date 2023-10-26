import "../styles/StartPage.scss";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";

function StartPage({ setDifficultyLevel, playClick }) {
    const variants = {

        hidden: { scale: 1 },
        visible: { scale: 1, transition: { duration: 0.5 } }

    }

    return (
        <>
            <div className='startPage'>
                <motion.img
                    src={logo} alt="Logo"
                    className='logo'
                    variants={variants}
                    initial='hidden'
                    animate='visible' />
                <motion.h1
                    variants={variants}
                    initial='hidden'
                    animate='visible'>
                    Card Game

                </motion.h1>
                <motion.div
                    className="difficultyLevels"
                    variants={variants}
                    initial='hidden'
                    animate='visible' >

                    <button onClick={() => {
                        setDifficultyLevel([5, 3]);
                        playClick();
                    }}> Esasy </button>



                    <button onClick={() => {
                        setDifficultyLevel([7, 4]);
                        playClick();
                    }}> Medium </button>



                    <button onClick={() => {
                        setDifficultyLevel([10, 5]);
                        playClick();
                    }}> Hard </button>



                </motion.div>
            </div >
        </>
    );
}

export default StartPage