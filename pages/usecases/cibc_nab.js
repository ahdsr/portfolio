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
import LiveLabsbLogo from '../../assets/global/avatar_livelabs.png';
import designupdate1 from './cibc_nab/watch.png';

const name = 'Solving the POS currency conversion...';
const description =
  '***How do you improve user engagement and entice new users to hop onto your platform?';

export default function CICBnab() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 1,
    1100: 1,
    700: 1,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase '>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
                <h1 className='heading1'>{name}</h1>
                <div className='mx-auto text-center'>
                  <Image
                    alt='Mountains'
                    src={LiveLabsbLogo}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                </div>
                <h2 className='heading2'>{description}</h2>
                <div className='player-wrapper '>
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

                <ul>
                  <li>
                    <a
                      href='https://mobilesyrup.com/2020/12/10/td-launches-new-personalized-app-experience-powered-by-ai/'
                      alt=''
                    >
                      TD launches new personalized app experience powered by AI
                    </a>
                  </li>
                  <li>
                    <a
                      href='  https://mobilesyrup.com/2021/12/08/td-low-balance-prediction-mobile-banking-app/'
                      alt=''
                    >
                      TD brings low balance prediction and more to its mobile
                      banking app
                    </a>
                  </li>
                </ul>

                <h3 className='heading3'>CIBC & NAB Collab</h3>
                <div className='py-12'>
                  <div className='relative p-8 mt-20 overflow-hidden border-8 border-white h-96 w-1/1 '>
                    <Image
                      alt='Mountains'
                      src={designupdate1}
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
