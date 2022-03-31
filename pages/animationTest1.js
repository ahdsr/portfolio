import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  closed: {
    opacity: 1,
    scale: 40,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

function AnimTest() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
      <div className='flex items-center justify-center overflow-hidden'>
        <div className='flex items-center justify-center w-24 h-24 overflow-hidden bg-white rounded-full'>
          <BsFillArrowDownRightCircleFill
            className='w-12 h-12 m-4 mx-auto text-right text-blue-500 text-opacity-50 rotate-45'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>
      </div>
    </motion.nav>
  );
}

export default AnimTest;
