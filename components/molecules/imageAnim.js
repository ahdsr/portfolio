import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';
import Logo1 from '../../assets/global/me.png';

function ImageAnim(props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ rootMargin: '-100px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {
      x: 0,
      y: 0,
      opacity: 0.1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 0.96,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className='pb-12 mx-auto '
      initial='hidden'
      animate={controls}
      variants={boxVariants}
    >
      <div className='h-screen mx-auto text-center'>
        <Image alt='Mountains' src={Logo1} layout='intrinsic' />
      </div>
    </motion.div>
  );
}

export default ImageAnim;
