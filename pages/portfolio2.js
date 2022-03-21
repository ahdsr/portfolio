import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

import Tabs from '@/components/tabs';

export default function Resume() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='py-24 bg-white'>
            <div className='px-5 mx-auto mt-8 md:px-12 max-w-screen-2xl xl:max-w-screen-xl sm:pt-12'>
              <div className='pb-10 resume'>
                <h2>Other Work</h2>
                <Tabs />
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
