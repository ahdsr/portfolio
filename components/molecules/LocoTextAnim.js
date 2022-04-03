import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function LocoTextAnim(props) {
  const controls = useAnimation({});
  const { ref, inView } = useInView({ rootMargin: '200px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: 0, y: '99%', opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
  };
  return (
    <div className='mt-8 mb-8 overflow-hidden text-white'>
      <motion.div
        ref={ref}
        className=''
        initial='hidden'
        animate={controls}
        variants={boxVariants}
      >
        <div className=''>{props.text}</div>
      </motion.div>
    </div>
  );
}

export default LocoTextAnim;
