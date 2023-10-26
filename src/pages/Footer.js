import { ReactComponent as Sound } from '../assets/img/volume.svg';
import { ReactComponent as Music } from '../assets/img/music_sign.svg';
import { ReactComponent as MusicOff } from '../assets/img/music_off.svg';

import { ReactComponent as QuestionMark } from '../assets/img/question_mark.svg';
import '../styles/Footer.scss'

function Footer(isMusicPlaying, setIsMusicPlaying) {
    return (
        <footer>
            <div className='soundSection'>
                <button> <Sound className='sound' /></button>

                <button onClick={() => { setIsMusicPlaying(!isMusicPlaying) }}>
                    {isMusicPlaying ? <Music className='music' /> : <MusicOff className='musicOff' />}
                </button>
            </div>
            <button> <img src={QuestionMark} alt="Question Mark" /> </button>
        </footer >
    )
}

export default Footer;