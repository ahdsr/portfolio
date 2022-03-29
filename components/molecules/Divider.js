import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Divider() {
  return (
    <motion.div
      animate={{
        x: 0,
        y: 0,
      }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <div className='px-24 border-b border-b-slate-800 '></div>
    </motion.div>
  );
}

export default Divider;
