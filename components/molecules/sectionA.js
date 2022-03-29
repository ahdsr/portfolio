import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TextAnim from './textAnim';

function SectionA() {
  const controls = useAnimation({});
  const { ref, inView } = useInView({ rootMargin: '0px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: 0, y: 0, opacity: 0, scale: 0.5 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.7,
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
        <div className='block w-full px-8 py-24 mx-auto md:px-24 sm:flex sm:flex-row '>
          <div className='md:w-1/2'>
            <div className='pr-32 mx-auto font-medium tracking-tighter text-yellow-400 uppercase md:text-3xl lg:text-8xl'>
              Research, design, prototype, test and evaluate ↻
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='pb-12 mx-auto md:text-2xl text-slate-600'>
              <TextAnim
                text={
                  "As a designer, I've been lucky enough to be exposed to a vast number of employers, teams and projects. Each of them have given me a rewarding learning experience."
                }
              />
            </div>

            <div className='pb-12 mx-auto md:text-2xl text-slate-600'>
              <TextAnim
                text={
                  'I approach all my projects regardless of the project size with a a discovery session to understand my client s needs the business objectives and what the user research is indicating.'
                }
              />
            </div>
            <div className='pb-12 mx-auto md:text-2xl text-slate-600'>
              <TextAnim
                text={
                  'I help my clients improve their usability experience and provide them with a product we can be mutually proud of.'
                }
              />
            </div>
            <div className='pb-12 mx-auto md:text-2xl text-slate-600'>
              <TextAnim
                text={
                  "I help m'y clients improve their usability experience and provide them with a product we can be mutually proud of."
                }
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SectionA;
