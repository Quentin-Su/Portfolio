import { BounceLetters } from '../Animations/BounceLetters';
import { ScaleLetters } from '../Animations/ScaleLetters';
import { motion } from 'framer-motion';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header_container'>
                <h1 className='header_content'>
                    <div className='header_bounce_text'>
                        <BounceLetters lettersAppearanceDelay={200} interval={150} group={false}>Hi,</BounceLetters>
                    </div>
                    <div className='header_scale_text'>
                        <ScaleLetters lettersAppearanceDelay={180} interval={150} delay={630} group={false}>I'm Quentin</ScaleLetters>
                    </div>
                </h1>
                <motion.span className='header_content_subtitle' initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 1.3, duration: .4, ease: 'easeOut' }}>&lt;Web Developer /&gt;</motion.span>
            </div>
        </header>
    );
};