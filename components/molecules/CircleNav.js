import FancyLink from '@/components/fancyLink';
import Link from 'next/link';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CircleNav() {
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
      scale: 0.94,

      transition: {
        duration: 1,
      },
    },
  };
  const handleClick = (e) => {
    <motion.div
      animate={{ x: 0, y: 10 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    ></motion.div>;
  };
  return (
    <motion.div
      animate={{ x: 0, y: 10 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <button
        onClick={() => handleClick()}
        className='w-24 h-24 m-8 align-middle bg-white rounded-full'
      >
        About
      </button>
    </motion.div>
  );
}

export default CircleNav;
