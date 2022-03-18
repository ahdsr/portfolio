import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';

//Usecase Images
import Image from 'next/image';
import Eye from '../assets/global/eye.svg';

const name = 'Modern data tables for processing vehicle orders';
const description =
  'The “queue” is essentially a list of all Element’s customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

export default function Social() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='mx-auto bg-slate-50 '>
            <div className=''>
              <section className=' bg-customblue'>
                <div className='px-8 py-64 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>I've cut the umbilical cord.</h1>
                  <div className='summary'>
                    It was a big waste of time - sorry.
                    <div className='mx-auto text-center summary'></div>
                  </div>
                </div>
              </section>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
