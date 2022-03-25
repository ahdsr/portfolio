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

import RSA_Marketing1 from '../../assets/usecases/RSA_Marketing1.png';
import RSA_Marketing2 from '../../assets/usecases/RSA_Marketing2.png';
import RSA_Marketing3 from '../../assets/usecases/RSA_Marketing3.png';
import RSA_Marketing4 from '../../assets/usecases/RSA_Marketing4.png';
import RSA_Marketing5 from '../../assets/usecases/RSA_Marketing5.png';
import RSA_Marketing6 from '../../assets/usecases/RSA_Marketing6.png';
import RSA_Marketing7 from '../../assets/usecases/RSA_Marketing7.png';
import RSA_Marketing8 from '../../assets/usecases/RSA_Marketing8.png';

export default function TDDashboard() {
  const restaurant =
    'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80';
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
                  <h1>RSA Johnson Marketing</h1>

                  <div className='summary'>
                    This project involved creating a flexible and robust
                    template to make the publishing, editing and designing of
                    small marketing campaigns a breeze. Johnson was lacking a
                    design template that would give the Content Editors and
                    Designers a quick and painless way to turn around very
                    frequent marketing campaigns that were driven by Google Ad
                    words. This full edge to edge design was created with that
                    in mind – it offered a wide range of components that once
                    build were easily swapped and rearrange to make new
                    beautiful micro sites.
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
                    src={RSA_Marketing1}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={RSA_Marketing2}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Marketing3}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={RSA_Marketing4}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={RSA_Marketing5}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Marketing6}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Marketing7}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Marketing8}
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
