import Tilt from 'react-parallax-tilt';

function Card({
    character,
    isFlipped,
    handleCardClick
}) {
    return (
        <div
            className={isFlipped ? 'card flipped' : 'card'}
            onClick={() => { handleCardClick(character) }}>
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffffff"
                glarePosition="bottom" // corrected typo here
                glareBorderRadius="20px"
                className='tilt'>
                <div className='cardFace'>
                    <div
                        className='characterHolder'
                        style={{ backgroundImage: `url(${character.src})` }}> {/* corrected curly braces */}
                    </div>
                    <div className='name'> {character.name} </div>
                </div>
            </Tilt>
        </div>
    );
}

export default Card;
