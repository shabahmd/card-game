import "../styles/StartPage.scss";
import logo from "../assets/img/logo.png";
import Footer from './Footer';

function StartPage({ setIsDifficultyChosen }) {
    return (
        <>
            <div className='start'>
                <img src={logo} alt='Logo' />
                <h1>Card Game</h1>
                <div className='difficultyLevels'>
                    <button onClick={() =>
                        setIsDifficultyChosen(true)}> Easy</button>
                    <button onClick={() =>
                        setIsDifficultyChosen(true)} >Medium</button>
                    <button onClick={() =>
                        setIsDifficultyChosen(true)} >Hard </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StartPage