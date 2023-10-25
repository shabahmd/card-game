import Footer from './Footer';
import logo from '../assets/img/logo.png';
import stan from '../assets/img/characters/stan.webp';
import dipper from '../assets/img/characters/dipper.webp';
import ford from '../assets/img/characters/ford.png';
import gideon from '../assets/img/characters/gideon.webp';
import mabel from '../assets/img/characters/mabel.webp';

function GamePage(goBackToStartPage, playClick, playFlip) {
    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <div className='score'>
                    <div> Score:0 </div>
                    <div> Best Score: 0 </div>
                </div>
            </header>

            <div className='playGround'>
                <div className='card'>
                    <div className='CharacterHolder'
                        style={{ backgroundImage: `url(${stan}) ` }} />
                    <div className='name'> Stan</div>
                </div>
                <div className='card'>
                    <div className='characterHolder'
                        style={{ backgroundImage: `url(${dipper})` }} />
                </div>
                <div className='name'> Dipper</div>

                <div className='card'>
                    <div className='characterHolder'
                        style={{ backgroundImage: `url(${ford})` }} />
                </div>
                <div className='name'> Ford</div>


                <div className='card'>
                    <div className='characterHolder'
                        style={{ backgroundImage: `url(${gideon})` }} />
                </div>
                <div className='name'> Gideon</div>
                <div className='card'>
                    <div className='characterHolder'
                        style={{ backgroundImage: `url(${mabel})` }} />
                </div>
                <div className='name'> Mabel</div>
            </div >
            <Footer />
        </>
    )
}

export default GamePage;