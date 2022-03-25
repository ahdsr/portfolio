import React from 'react';
import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Brief from '@/components/molecules/brief';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

import RSA_Portal1 from '../../assets/usecases/RSA_Portal1.png';
import RSA_Portal2 from '../../assets/usecases/RSA_Portal2.png';
import RSA_Portal3 from '../../assets/usecases/RSA_Portal3.png';

export default function TDDashboard() {
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
        <m.div initial='initial' animate='enter'>
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-rsa'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>RSA Web Broker Portal B2B</h1>

                  <div className='summary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Amet tellus cras adipiscing enim eu turpis egestas.
                    Tincidunt praesent semper feugiat nibh sed pulvinar proin
                    gravida.
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
                    src={RSA_Portal1}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={RSA_Portal2}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Portal3}
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
