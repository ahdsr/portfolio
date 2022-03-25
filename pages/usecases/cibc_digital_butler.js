import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

//Usecase Images
import Image from 'next/image';
import designupdate1 from './cibc_digital_butler/cibc_digital_butler_01.webp';
import designupdate2 from './cibc_digital_butler/cibc_digital_butler_02.webp';
import designupdate3 from './cibc_digital_butler/cibc_digital_butler_03.webp';
import designupdate4 from './cibc_digital_butler/cibc_digital_butler_04.webp';
import designupdate5 from './cibc_digital_butler/cibc_digital_butler_05.webp';
import designupdate6 from './cibc_digital_butler/cibc_digital_butler_06.webp';
import designupdate7 from './cibc_digital_butler/cibc_digital_butler_07.webp';
import designupdate8 from './cibc_digital_butler/cibc_digital_butler_08.webp';
import designupdate9 from './cibc_digital_butler/cibc_digital_butler_09.webp';
import designupdate10 from './cibc_digital_butler/cibc_digital_butler_10.webp';
import designupdate11 from './cibc_digital_butler/cibc_digital_butler_11.webp';

const name = 'Smarter banking, with a the help of AI';
const description =
  '***How do you improve user engagement and entice new users to hop onto your platform?';

export default function DigitalButler() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 7,
    1100: 4,
    700: 2,
    500: 2,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase'>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
                <h1 className='heading1'>{name}</h1>
                <h2 className='heading2'>{description}</h2>
                <div className='player-wrapper'>
                  <div
                    className=''
                    style={{
                      width: '50%',
                      height: '300px',
                    }}
                  >
                    <Image
                      alt='Mountains'
                      src={designupdate1}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
              </div>

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <h3 className='heading3'>The design problem</h3>
                <p>
                  User engagement and attracting new users to your financial
                  institution is not a simple challenge. Canadian banks, and
                  banks in general have very similar offerings at the end of the
                  day - so what can we do to make TD stand out? How do we
                </p>

                <h3 className='heading3'>CIBC Digital Butler</h3>
                <div className='py-12'>
                  <div className='relative p-8 mt-20 overflow-hidden border-8 border-white h-96 w-1/1'>
                    <Image
                      alt='Mountains'
                      src={designupdate4}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='py-12'>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}

                    <FancyImage
                      src={designupdate1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />

                    <FancyImage
                      src={designupdate2}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate3}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />

                    <FancyImage
                      src={designupdate4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate5}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate6}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate7}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate8}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate9}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate10}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate11}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                  </Masonry>
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
