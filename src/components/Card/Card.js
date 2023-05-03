import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Card.css';

export const Card = (props) => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        };
    };

    const MotionLink = motion(Link);

    const item = {
        hidden: { 
            y: 20, 
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1
        },
    };

    return (
        <>
            <MotionLink to={props.mailto ? `mailto:Sussetto.Quentin@outlook.fr` : ''} className={`card_item ${props.class}`} onClick={() => handleScroll(props.htmlId)} variants={item} whileHover={{ scale: .97 }}>
                <div className='card_content'>
                    <div className='card_icon'>
                        <span className='material-icons'>{props.icon}</span>
                    </div>
                    <div className='card_text'>{props.content}</div>
                </div>
            </MotionLink>
        </>
    );
};