import { motion } from 'framer-motion';

export const BounceLetters = (props) => {
  const childrenLength = props.group ? 1 : props.children.length;

  const childrenVariants = {
    hidden: {
      scaleY: 0,
      translateY: 0,
      opacity: 1
    },
    show: (i) => ({
      scaleY: [1.2, .6, 1.1, .7, 1],
      translateY: [0, -40, 0, -25, 0],
      opacity: [1, .7, .9, .8, 1],
      transition: {
        stiffness: 300,
        damping: 2,
        delay: (i * props.interval) + props.delay,
        duration: props.lettersAppearanceDelay,
      },
    }),
  };

  return (
    <>
      {
        Array(childrenLength).fill(null).map((item, index) => (
          <motion.span key={index} className={'header_content_span'} custom={index} variants={childrenVariants} initial='hidden' animate='show'>{props.group ? props.children : props.children[index]}</motion.span>
        ))
      }
    </>
  )
}