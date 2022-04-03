import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { HiMenuAlt1 } from 'react-icons/hi';

const variants = {
  navitial: {
    y: 0,
    x: 0,
  },
  navopen: {
    opacity: 1,
    scale: 1,
    y: -50,
    x: -190,
  },
  navclosed: {
    opacity: 0,

    y: -50,
    x: -190,
  },
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 1,
  },
};

function AnimTest() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
      <div className='absolute z-50 overflow-hidden top-24 -left-20 first-letter:flex'>
        <div className='flex items-center justify-center w-16 h-16 mt-16 overflow-hidden bg-white rounded-full'>
          <HiMenuAlt1
            className='w-8 h-8 m-24 mx-auto text-blue-500 '
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>
      </div>
      <motion.nav
        initial={'navitial'}
        animate={isOpen ? 'navclosed' : 'navopen'}
        variants={variants}
      >
        <div className='fixed z-10 w-screen h-screen m-12 bg-[#0B121D] left-100'>
          <div className='text-4xl font-bold text-center text-white mt-96'>
            <div className='my-6'>Resume</div>
            <div className='my-6'>Item 2</div>
            <div className='my-6'>Item 3</div>
            <div className='my-6'>Item 4</div>
          </div>
        </div>
      </motion.nav>
    </motion.nav>
  );
}

export default AnimTest;
