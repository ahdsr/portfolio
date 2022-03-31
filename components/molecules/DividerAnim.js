import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function DividerAnim() {
  const controls = useAnimation({});
  const { ref, inView } = useInView({ rootMargin: '200px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: 600, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className='overflow-hidden '
      initial='hidden'
      animate={controls}
      variants={boxVariants}
    >
      <div className='overflow-hidden border-b border-b-slate-800'></div>
    </motion.div>
  );
}

export default DividerAnim;
