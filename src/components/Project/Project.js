import { useRef } from 'react';
import { Tag } from '../Tag/Tag';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/context/motion';
import { TypingText } from '../Animations/TypingText';
import './Project.css';

export const Project = ({ props, leftText }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .2 });

    return (
        <>
            <motion.div ref={ref} className='project_container' variants={staggerContainer} initial='hidden' animate={isInView ? 'show' : 'hidden'} exit='hidden'>
                <div className='project_type'>
                    <h2>
                        <TypingText title={props.title}/>
                    </h2>
                </div>

                <div className='project_context'>
                    <motion.div className='project_capture' variants={fadeIn(leftText ? 'right' : 'left', 'tween', .2, .3)}>
                        <img src={props.image} alt={props.alt_Image} />
                    </motion.div>

                    <motion.div className='project_content' variants={fadeIn(leftText ? 'left' : 'right', 'tween', .2, .3)}>
                        <h3>{props.project.subtitle}</h3>
                        <p className='project_description'>{props.project.description}</p>

                        <div className='project_tags_container'>
                            {
                                props.project.tags.map((tag, tag_index) => (
                                    <Tag key={tag_index} content={tag.name} color={tag.color} />
                                ))
                            }
                        </div>

                        <Link className='project_content_link link_hover_animation' to={props.project.projectUrl} rel='noreferrer' target='_blank' aria-label='Project GitHub link'>View Project</Link>
                        <div className='project_content_before'></div>
                    </motion.div>
                </div>

                <div className='project_technical_points'>
                    {
                        props.technical_Description.map((td, td_index) => (
                            <div key={td_index} className='project_point_item'>
                                <div className='point_icon'>
                                    <span className='material-icons'>{td.icon}</span>
                                </div>

                                <div className='point_content'>
                                    <span>{td.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </>
    );
};