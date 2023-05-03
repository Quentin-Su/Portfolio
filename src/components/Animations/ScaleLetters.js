import React from 'react';
import { motion } from 'framer-motion';

export const ScaleLetters = (props) => {
  const childrenLength = props.group ? 1 : props.children.length;

  const childrenVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: (i * props.interval) + props.delay,
        duration: props.lettersAppearanceDelay,
      },
    }),
  };

  return (
    <>
      {
        Array(childrenLength).fill(null).map((item, index) => (
          <React.Fragment key={index}>
            {
              props.children[index] === ' ' ? (
                <React.Fragment>{props.children[index]}</React.Fragment>
              ) : (
                <motion.span className={'header_content_span'} custom={index} variants={childrenVariants} initial='hidden' animate='show'>{props.group ? props.children : props.children[index]}</motion.span>
              )
            }
          </React.Fragment>
        ))
      }
    </>
  )
}