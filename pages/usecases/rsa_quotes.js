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

import RSA_Bind1 from '../../pages/usecases/jbind/jbind_01.png';
import RSA_Bind2 from '../../pages/usecases/jbind/jbind_02.png';
import RSA_Bind3 from '../../pages/usecases/jbind/jbind_03.png';
import RSA_Bind4 from '../../pages/usecases/jbind/jbind_04.png';
import RSA_Bind5 from '../../pages/usecases/jbind/jbind_05.png';

export default function TDDashboard() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 2,
    1100: 1,
    700: 1,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-rsa'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>RSA Online Quote Application</h1>

                  <div className='summary'>
                    Full responsive RSA / Johnson customer quote site.
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

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque eget fermentum nisl. Nam suscipit elit quis neque
                  cursus, id malesuada tortor dignissim. Nullam tempus id lacus
                  vitae auctor. Nunc ligula est, dapibus vel justo at, dapibus
                  congue nulla. Curabitur fermentum urna eu ipsum luctus mattis.
                  Quisque aliquam fermentum sapien vitae hendrerit. Vivamus
                  dictum ex rhoncus, tincidunt ipsum sed, pretium augue. Cras at
                  pretium tellus, in sollicitudin massa.{' '}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque eget fermentum nisl. Nam suscipit elit quis neque
                  cursus, id malesuada tortor dignissim. Nullam tempus id lacus
                  vitae auctor. Nunc ligula est, dapibus vel justo at, dapibus
                  congue nulla. Curabitur fermentum urna eu ipsum luctus mattis.
                  Quisque aliquam fermentum sapien vitae hendrerit. Vivamus
                  dictum ex rhoncus, tincidunt ipsum sed, pretium augue. Cras at
                  pretium tellus, in sollicitudin massa.{' '}
                </p>
              </section>
              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'></section>

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className='py-12 my-masonry-grid'
                  columnClassName='my-masonry-grid_column'
                >
                  {/* array of JSX items */}

                  <FancyImage
                    src={RSA_Bind1}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={RSA_Bind2}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Bind3}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Bind4}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={RSA_Bind5}
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
