import React, { useRef } from 'react';
import './VerticalTimelineElement.css';
import { motion, useInView } from 'framer-motion';

export const VerticalTimelineElement = ({ children = '', contentArrowStyle = null, contentStyle = null, date = '', icon = null, iconStyle = null, style = null }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: .06 })

    const bounceVariants = {
        hidden: {
            opacity: 0,
            scale: .5
        },
        show: {
            opacity: [1, 1, 1],
            scale: [.5, 1.2, 1],
            transition: {
                duration: .6,
                times: [0, .6, 1],
            }
        }
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            translateX: 100
        },
        show: {
            opacity: [1, 1, 1],
            translateX: [100, -20, 0],
            transition: {
                duration: .6,
                times: [0, .6, 1],
            },
        },
    };

    return (
        <div className='vertical-timeline-element' style={style}>
            <React.Fragment>
                <motion.span ref={ref} style={iconStyle} className='vertical-timeline-element-icon' variants={bounceVariants} initial='hidden' animate={isInView ? 'show' : 'hidden'} exit='hidden'>
                    {icon}
                </motion.span>
                <motion.div ref={ref} style={contentStyle} className='vertical-timeline-element-content -bounce-in' variants={containerVariants} initial='hidden' animate={isInView ? 'show' : 'hidden'} exit='hidden'>
                    <div style={contentArrowStyle} className="vertical-timeline-element-content-arrow" />
                    {children}
                    <span className='vertical-timeline-element-date'>
                        {date}
                    </span>
                </motion.div>
            </React.Fragment>
        </div>
    );
};