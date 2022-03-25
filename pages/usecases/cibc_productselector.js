import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

import Brief from '@/components/molecules/brief';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

//Usecase Images

import liveideate1 from './cibc_nab/liveideate1.png';
import liveideate2 from './cibc_nab/liveideate2.png';
import liveideate3 from './cibc_nab/liveideate3.png';
import liveideate4 from './cibc_nab/liveideate4.png';
import liveideate5 from './cibc_nab/liveideate5.png';
import liveideate6 from './cibc_nab/liveideate6.png';

export default function TDDashboard() {
  const restaurant =
    'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80';
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter'>
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-cibc'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>CIBC Product Selector</h1>

                  <div className='summary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Amet tellus cras adipiscing enim eu turpis egestas.
                    Tincidunt praesent semper feugiat nibh sed pulvinar proin
                    gravida. task.
                  </div>
                </div>
              </section>

              <Brief
                projectb1='Native app'
                projectb2=''
                roleb1='UI / UX Lead'
                roleb2=''
                duration='4-6 months'
                toolsb1='Sketch'
                toolsb2='Invision Studio'
                toolsb3=''
              />

              <section className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className='py-12 my-masonry-grid'
                  columnClassName='my-masonry-grid_column'
                >
                  {/* array of JSX items */}

                  <FancyImage
                    src={liveideate1}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate2}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={liveideate3}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate4}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate5}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={liveideate6}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                </Masonry>
              </section>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
