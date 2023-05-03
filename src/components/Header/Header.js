import { BounceLetters } from '../Animations/BounceLetters';
import { ScaleLetters } from '../Animations/ScaleLetters';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/context/motion';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header_container'>
                <h1 className='header_content'>
                    <div className='header_bounce_text'>
                        <BounceLetters lettersAppearanceDelay={.9} interval={.2} delay={0} group={false}>Hi,</BounceLetters>
                    </div>
                    <div className='header_scale_text'>
                        <ScaleLetters lettersAppearanceDelay={.25} interval={.2} delay={.3} group={false}>I'm Quentin</ScaleLetters>
                    </div>
                </h1>
                <motion.span className='header_content_subtitle' variants={fadeIn('right', 'tween', 2, .5)} initial='hidden' animate='show'>&lt;Web Developer /&gt;</motion.span>
            </div>
        </header>
    );
};