import React from 'react';

import Layout from '@/components/layout';
import Container from '@/components/container';

import Masonry from 'react-masonry-css';
import Image from 'next/image';
import FancyImage from '@/components/fancyimage';

// Assets
import image1 from '../assets/global/placeholder.png';
import image2 from '../assets/global/placeholder.png';
import image3 from '../assets/global/placeholder.png';
import image4 from '../assets/global/placeholder.png';
import image5 from '../assets/global/placeholder.png';
import image6 from '../assets/global/placeholder.png';
import image7 from '../assets/global/placeholder.png';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

export default function Wip() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Layout>
      <NextSeo title='About' />

      <LazyMotion features={domAnimation}>
        <m.div
          initial='initial'
          animate='enter'
          exit='exit'
          className='mb-12 md:mb-16 xl:mb-24 '
        >
          <Container>
            <m.div variants={fade}>
              <div className='max-w-screen-2xl mx-auto w-full md:px-8 pt-16'>
                <h1 className='  text-3xl md:text-5xl lg:text-5xl lg:tracking-tighter lg:leading-tight font-bold  pb-4 text-red-500 max-w-xl text-left'>
                  Work in progress & other random designs
                </h1>
                <h2 className='  text-xl md:text-2xl lg:text-2xl lg:tracking-tighter lg:leading-tight font-medium mx-auto pb-4 text-gray-400'>
                  If anything catches you interest, do not hesitate to ask
                </h2>

                <div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}
                    <div>
                      <FancyImage
                        src={image1}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      />
                      <div>
                        <div className='text-sm font-medium tracking-tight text-slate-700'>
                          March 22, 2022
                        </div>
                        <div className=' font-bold tracking-tight text-slate-500'>
                          Learning 3D this week
                        </div>
                        <div className='font-light tracking-tight text-slate-500'>
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                        </div>
                      </div>
                    </div>
                    <div>
                      <FancyImage
                        src={image2}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      />
                      <div>
                        <div className='text-sm font-medium tracking-tight text-slate-700'>
                          March 22, 2022
                        </div>
                        <div className=' font-bold tracking-tight text-slate-500'>
                          Learning 3D this week
                        </div>
                        <div className='font-light tracking-tight text-slate-500'>
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                          This is a new rendering of a turntable I am working on
                        </div>
                      </div>
                    </div>

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
                  </Masonry>
                </div>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
