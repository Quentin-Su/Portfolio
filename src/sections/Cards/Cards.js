import { useRef } from 'react';
import { cards } from '../../utils/context/constants';
import { Card } from '../../components/Card/Card';
import { motion, useInView } from 'framer-motion';

export const Cards = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const container = {
        hidden: {
            opacity: 1,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                duration: .3,
            },
        },
    };

    return (
        <motion.section ref={ref} className='card_container_flex' variants={container} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
            {
                cards.map((value, index) => (
                    <Card key={index} content={value.content} icon={value.icon} class={`${value.color}`} htmlId={value.hrefId} mailto={value.mailto} />
                ))
            }
        </motion.section>
    );
};