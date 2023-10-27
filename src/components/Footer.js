// import React from 'react';
// import SVG from 'react-svg'; // Import react-svg library
// import Volume from '../assets/img/volume.svg';
// import VolumeOff from '../assets/img/volume_off.svg';
// import Music from '../assets/img/music_sign.svg';
// import MusicOff from '../assets/img/music_off.svg';
// import QuestionMark from '../assets/img/question_mark.svg';
// import Cross from '../assets/img/cross.svg';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import '../styles/Footer.scss';

// function Footer({
//     isMusicPlaying,
//     setIsMusicPlaying,
//     isSoundPlaying,
//     setIsSoundPlaying,
//     playClick
// }) {
//     const [isInfoNeeded, setIsInfoNeeded] = useState(false);

//     return (
//         <motion.footer
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}>
//             <div className="footerContainer">
//                 <div className="soundSection">
//                     <button onClick={() => {
//                         setIsSoundPlaying(!isSoundPlaying);
//                         playClick();
//                     }}>
//                         {isSoundPlaying ? (
//                             <SVG src={Volume} className='svg' /> // Use SVG from react-svg
//                         ) : (
//                             <SVG src={VolumeOff} className='svg' /> // Use SVG from react-svg
//                         )}
//                     </button>
//                     <button onClick={() => {
//                         setIsMusicPlaying(!isMusicPlaying);
//                         playClick();
//                     }}>
//                         {isMusicPlaying ? (
//                             <SVG src={Music} className='svg' /> // Use SVG from react-svg
//                         ) : (
//                             <SVG src={MusicOff} className='svg' /> // Use SVG from react-svg
//                         )}
//                     </button>
//                 </div>
//                 <button onClick={() => {
//                     setIsInfoNeeded(!isInfoNeeded);
//                     playClick();
//                 }}>
//                     {isInfoNeeded ? (
//                         <SVG src={Cross} className='svg' /> // Use SVG from react-svg
//                     ) : (
//                         <SVG src={QuestionMark} className='svg' /> // Use SVG from react-svg
//                     )}
//                 </button>
//                 <AnimatePresence>
//                     {isInfoNeeded && <MabelInfo />}
//                 </AnimatePresence>
//             </div>
//         </motion.footer>
//     );
// }

// export default Footer;
