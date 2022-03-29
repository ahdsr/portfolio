import React from 'react';
import Image from 'next/image';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Me from '../../assets/3drenders/city1.webp';

function SectionItem(title, subtitle, content) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ rootMargin: '-100px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: 0, y: 0, opacity: 0, scale: 0.6 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.6,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        ref={ref}
        className='Box'
        initial='hidden'
        animate={controls}
        variants={boxVariants}
      >
        <div className='p-4 section'>
          <Image alt='Mountains' src={Me} layout='intrinsic' />
          <div className='pt-4 pb-12 mx-auto '>
            <div className='font-mono text-white uppercase md:text-3xl'>
              TD Dashboard
            </div>
            <div className='text-xl font-light text-white'>
              TD Mobile Banking went through a complete overhaul to implement a
              dashboard like landing page.
            </div>

            <div>Learn more</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SectionItem;
