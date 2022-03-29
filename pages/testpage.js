import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Test() {
  return (
    <AnimateSharedLayout>
      <motion.div layout initial={{ borderRadius: 0 }}>
        {items.map((item) => (
          <Item key={item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 0 }}
      className='m-2 mx-auto bg-black'
    >
      <motion.div className='avatar' layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.div>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className='w-screen p-8 mx-auto text-yellow-300 bg-black'>
        This is some text
      </div>
      <div className='w-screen p-8 mx-auto text-yellow-300 bg-black'>
        This is some text
      </div>
      <div className='w-screen p-8 mx-auto text-yellow-300 bg-black'>
        This is some text
      </div>
    </motion.div>
  );
}

const items = [0, 1, 2];
