import React from 'react'

import question_mark from "../assets/img/question_mark.svg"


function Footer() {
    return (
        <footer>
            <div className='soundSection'>
                <button> <img src={sound} alt="Sound Sign" /></button>
                <button> <img src={music} alt="Music Sign" /></button>
            </div>
            <div> <button> <img src={question_mark} alt="Question Mark" /> </button>
            </div>
        </footer >
    )
}

export default Footer;