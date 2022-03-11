import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

import image1 from '../assets/3drenders/city1.jpg';
import image2 from '../assets/3drenders/city2.jpg';
import image3 from '../assets/3drenders/djm1.jpg';
import image4 from '../assets/3drenders/djm2.jpg';
import image5 from '../assets/3drenders/djm3.jpg';
import image6 from '../assets/3drenders/house1.jpg';
import image7 from '../assets/3drenders/interior1.jpg';
import image8 from '../assets/3drenders/scene1.jpg';
import image9 from '../assets/3drenders/scene2.jpg';
import image10 from '../assets/3drenders/tech1.jpg';
import image11 from '../assets/3drenders/tech2.jpg';
import image12 from '../assets/3drenders/tech3.jpg';

export default function About() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const breakpointColumnsObj2 = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Portfolio' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4'>
            <Container>
              <div className='content pt-40 mx-auto px-4 max-w-7xl'>
                <h1>Portfolio</h1>
                <p>
                  This page will be dedicated to creative work outside of my
                  client work
                </p>

                <div className='content mt-10'>
                  <h3>3D Rendering</h3>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}

                    <FancyImage
                      priority
                      src={image1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      priority
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
                    <FancyImage
                      src={image8}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image9}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image10}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image11}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image12}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                  </Masonry>
                </div>
                <div className='content mt-10'>
                  <h3>Mobile Apps</h3>

                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}

                    <FancyImage
                      priority
                      src={image1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />

                    <FancyImage
                      priority
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
                    <FancyImage
                      src={image8}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image9}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image10}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image11}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={image12}
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
