import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { Scrollbars } from 'rc-scrollbars';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import GetInTouch from '@/components/getintouch';

import image1 from '../assets/global/main.jpg';
import image2 from '../assets/global/main.jpg';
import image3 from '../assets/global/main.jpg';
import image4 from '../assets/global/placeholder.png';
import image5 from '../assets/global/placeholder.png';
import image6 from '../assets/global/placeholder.png';
import image7 from '../assets/global/main.jpg';

export default function About() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Work in progress' />
      <Navbar />

      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4'>
            <Container>
              <div className='content mt-40 mx-auto max-w-7xl '>
                <h1>Work in progress</h1>
                <div className='mt-20'>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}

                    <FancyImage
                      src={image1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      src={image2}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image3}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      src={image4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image5}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image6}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image7}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                  </Masonry>
                </div>
              </div>
            </Container>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
