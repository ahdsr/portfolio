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
import TDLogo from '../../assets/global/avatar_td.webp';
import Placeholder from '../../assets/usecases/td.jpg';
import designupdate1 from './td_dashboard/menu_overflow.jpg';
import designupdate2 from './td_dashboard/card_overflow_menu.jpg';
import designupdate3 from './td_dashboard/card_setting.jpg';
import designupdate4 from './td_dashboard/card_performance.jpg';
import designupdate5 from './td_dashboard/card_setting.jpg';
import designupdate6 from './td_dashboard/card_watchlisterrors.jpg';
import designupdate7 from './td_dashboard/card_links.jpg';
import evolution from './td_dashboard/dashboard_evolution.png';
import evolution2 from './td_dashboard/dashboard_evolution2.png';
import icons1 from './td_dashboard/dashboard_icons_01.png';
import icons2 from './td_dashboard/dashboard_icons_02.png';
import icons3 from './td_dashboard/dashboard_icons_03.png';

const name =
  'Surfacing the most common banking features to increase customer engagement.';
const description =
  "Canadian, well - most banks don't have a huge difference in product offerings from one another. They deal with the tested and true saving/chequings, mortgages and investment accounts. So why would you join TD as a new customer? What's stopping you to jump ship to a competitor? Let's have a look below how I tackled these questions.";

export default function Resume() {
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
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase '>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
                <h1 className='heading1'>{name}</h1>
                <h2 className='heading2'>{description}</h2>
                <div className='pb-12 mx-auto text-center'>
                  <Image
                    alt='Mountains'
                    src={TDLogo}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                  <p className='smalltext'>TD Dashboard</p>
                </div>
                <div
                  className=''
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <div className='pb-12 mx-auto text-center'>
                  <span className='heading3'>What is a Dashboard?</span>
                  <span className='uppercase subheading'>
                    The Design Problem
                  </span>
                </div>
                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    Probably one of the most overused terms I've heard over the
                    last 6 years but love it or hate it, dashboards are a thing.
                    A dashboards, (in an automobile or similar vehicle) is a
                    panel beneath the front window having various gauges and
                    accessories for the use of the driver; instrument panel.
                  </p>

                  <p className='pright'>
                    So what does a dashboard look like for mobile banking? It
                    can be a snapshot of your balances or investments. It can
                    surface common data you're used to seeing about your
                    accounts, but it can do more than that. Maybe it can surface
                    data that's normally cumbersome to find. Legacy apps, have a
                    real issue due to the fact they have been around for so long
                    - a lot of things are harder and harder to find, or they are
                    so buried, they never get used.
                  </p>
                </div>

                <div className='md:grid md:grid-cols-3'>
                  <p className='mr-6 callout'>
                    “What do users feel comfortable with seeing in before
                    logging in?”
                  </p>
                  <p className='mr-6 callout'>
                    “Will users opt-in to see secure data without getting
                    prompted to sign in?”
                  </p>
                  <p className='ml-6 callout'>
                    “What can we do to ease their apprehensions?”
                  </p>
                </div>
                <div className='pt-20 mx-auto mt-20 text-center'>
                  <span className='text-2xl font-bold tracking-tight text-center text-green-700'>
                    Research & Planning
                  </span>
                  <span className='block px-8 pt-4 text-2xl font-bold tracking-tight text-center md:px-48 md:pt-4 md:pb-12 md:text-3xl lg:text-4xl xl:text-5xl md:font-black text-slate-600'>
                    The evolution of banking
                  </span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    marginTop: '80px',
                  }}
                >
                  <Image
                    alt='Mountains'
                    src={evolution}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>

                <h3 className='heading3'>Dashboard card design updates</h3>
                <div className='py-12'>
                  <div
                    className='mt-20'
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '642px',
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
                      src={icons1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      src={icons2}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={icons3}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                  </Masonry>
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

                    <FancyImage
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
                  </Masonry>
                </div>
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
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
