import Footer from './Footer';
import logo from '../assests/img/logo.png';
import stan from '../assests/img/characters/stan.webp';
import dipper from '../assests/img/characters/dipper.webp';
import ford from '../assests/img/characters/ford.png';
import gideon from '../assests/img/characters/gideon.webp';
import mabel from '../assests/img/characters/mabel.webp';


function GamePage() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <div className='score'>
                    <div> Score:0 </div>
                    <div> Best Score: 0 </div>
                </div>
            </header>

            <div className='ScoreContainer'>
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