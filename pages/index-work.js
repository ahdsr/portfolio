import { useState, useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyLink from '@/components/fancyLink';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tween } from 'react-gsap';
import VideoPost from '@/components/molecules/videoblogpost';
import SectionA from '@/components/molecules/sectionA';
import TextAnim from '@/components/molecules/textAnim';
import ImageAnim from '@/components/molecules/imageAnim';

//Imported Images
import Image from 'next/image';
import Me from '../assets/global/profile.webp';
import LogoGroup from '../assets/global/logogroup.webp';
import SectionItem from '@/components/molecules/sectionItem';
import Logo1 from '../assets/global/logo_bmo.webp';
import Logo2 from '../assets/global/logo_td.webp';
import Logo3 from '../assets/global/logo_rsa.webp';
import Logo4 from '../assets/global/logo_om.webp';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout>
      <NextSeo title='Home' />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.065,
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='font-mono bg-black'>
                  <m.div
                    animate={{ x: 0, y: 50 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                  >
                    <ImageAnim />
                  </m.div>
                  <SectionA />

                  <ImageAnim />

                  <div
                    className='px-12 mx-auto md:grid md:grid-cols-6'
                    data-scroll-section
                    data-scroll
                    data-scroll-speed='1'
                  >
                    <Image alt='Mountains' src={Logo1} layout='responsive' />
                    <Image alt='Mountains' src={Logo2} layout='responsive' />
                    <Image alt='Mountains' src={Logo3} layout='responsive' />
                    <Image alt='Mountains' src={Logo4} layout='responsive' />
                    <Image alt='Mountains' src={Logo1} layout='responsive' />
                    <Image alt='Mountains' src={Logo1} layout='responsive' />
                  </div>

                  <div className='grid mx-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 '>
                    <SectionItem />
                    <SectionItem />
                    <SectionItem />
                    <SectionItem />
                  </div>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
