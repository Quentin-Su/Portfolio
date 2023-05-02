import React from 'react';
import { motion } from 'framer-motion';

export const TypingText = ({ title }) => {
    const typingTextVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        show: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                type: 'spring',
                stiffness: 150,
                damping: 10,
            },
        }),
    };

    return (
        <>
            {
                Array.from(title).map((letter, index) => (
                    <motion.span key={index} variants={typingTextVariants} custom={index}>
                        {
                            letter === ' ' ? <React.Fragment>{letter}</React.Fragment> : letter
                        }
                    </motion.span>
                ))
            }
        </>
    );
};