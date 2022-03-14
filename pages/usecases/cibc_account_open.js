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
import Image1 from '../../assets/global/placeholder.png';
import Placeholder from '../../assets/usecases/td.jpg';

import designupdate1 from './cibc_accountopen/cibc_accounts_open_01.png';
import designupdate2 from './cibc_accountopen/cibc_accounts_open_02.png';
import designupdate3 from './cibc_accountopen/cibc_accounts_open_03.png';
import designupdate4 from './cibc_accountopen/cibc_accounts_open_04.png';
import designupdate5 from './cibc_accountopen/cibc_accounts_error_01.png';
import designupdate6 from './cibc_accountopen/cibc_accounts_wait01.png';
import designupdate7 from './cibc_accountopen/cibc_accounts_wait02.png';
import designupdate8 from './cibc_accountopen/cibc_accounts_wait03.png';
import designupdate9 from './cibc_accountopen/cibc_accounts_error_02.png';
import designupdate10 from './cibc_accountopen/cibc_accounts_open_05.png';
import designupdate11 from './cibc_accountopen/cibc_accounts_open_06.png';
import designupdate12 from './cibc_accountopen/cibc_accounts_open_07.png';
import designupdate13 from './cibc_accountopen/cibc_accounts_open_08.png';
import designupdate14 from './cibc_accountopen/cibc_accounts_open_09.png';
import designupdate15 from './cibc_accountopen/cibc_accounts_open_10.png';
import designupdate16 from './cibc_accountopen/cibc_accounts_open_11.png';

const name = 'Account applications forms, responsive frame into native app.';
const description =
  '***How do you improve user engagement and entice new users to hop onto your platform?';

export default function Resume() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 3,
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

                <h3 className='heading3'>CIBC Account Open</h3>
                <div className='py-12'>
                  <div
                    className='mt-20'
                    style={{
                      position: 'relative',
                      width: '50%',
                      height: '300px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      alt='Mountains'
                      src={designupdate6}
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
                      priority
                      src={designupdate1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      priority
                      src={designupdate2}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate3}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      src={designupdate4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate5}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate6}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate7}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate8}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate9}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate10}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate11}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate12}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate13}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate14}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate15}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate16}
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
