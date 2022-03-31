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
import Divider from '@/components/molecules/Divider';
import ImageAnim from '@/components/molecules/imageAnim';

//Imported Images
import Image from 'next/image';
import Me from '../assets/global/me.webp';
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
                <m.main
                  variants={fade}
                  className='font-serif bg-black bg-opacity-90'
                >
                  <m.div
                    animate={{ x: 0, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                  >
                    <div className='w-24 h-24 mx-20 text-left '>
                      <Image alt='Mountains' src={Me} layout='intrinsic' />
                    </div>
                  </m.div>

                  <div className='mb-96'>
                    <m.div
                      animate={{ x: 0, y: -10 }}
                      transition={{ ease: 'easeInOut', duration: 1 }}
                    >
                      <div className='px-24 mx-auto text-4xl font-light tracking-tight text-yellow-500 uppercase'>
                        Hey, I’m Lucas a
                      </div>
                    </m.div>
                    <m.div
                      animate={{ x: 0, y: 0 }}
                      transition={{ ease: 'easeInOut', duration: 1 }}
                    >
                      <div
                        className='px-24 mx-auto text-4xl font-semibold tracking-tighter uppercase text-yellow-500 text-opacity-80 md:text-6xl lg:text-[200px]'
                        data-scroll-section
                        data-scroll
                        data-scroll-speed='2'
                      >
                        UX & UI designer
                      </div>
                    </m.div>
                    <m.div
                      animate={{ x: 0, y: 10 }}
                      transition={{ ease: 'easeInOut', duration: 2 }}
                    >
                      <div
                        className='px-24 mx-auto text-4xl font-light tracking-tight uppercase text-customblue'
                        data-scroll-section
                        data-scroll
                        data-scroll-speed='1'
                      >
                        based out of Toronto.
                      </div>
                    </m.div>
                  </div>

                  <Divider />

                  <div className='float-right w-1/2 px-24 py-24 mx-auto tracking-tight text-blue-300 e md:text-2xl'>
                    <div className='mb-12 leading-loose'>
                      As a designer, I've been lucky enough to be exposed to a
                      vast number of employers, teams and projects. Each of them
                      have given me a rewarding learning experience.
                    </div>
                    <div className='mb-12 leading-loose'>
                      I approach all my projects, regardless of the project size
                      with a a discovery session to understand my client’s
                      needs, the business objectives and what the user research
                      is indicating.
                    </div>
                    <div className='mb-12 leading-loose'>
                      I help my clients improve their usability experience and
                      provide them with a product we can be mutually proud of.
                    </div>
                    <div className='mb-12 leading-loose'>
                      Below you'll find a few selected use case studies that go
                      into a detailed design process. You can also view more
                      stuff in the other work section.
                    </div>
                  </div>

                  <Divider />

                  <div className='w-1/2 px-24 py-24'>
                    <div className=''>
                      <div className='py-12 mx-auto tracking-tighter text-yellow-500 uppercase md:text-4xl font-regular'>
                        THINGS I ENJOY
                      </div>
                    </div>
                    <Divider />

                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>01.</span>A tough
                        design problem
                      </div>
                    </div>
                    <Divider />

                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>02.</span>Subtle
                        animation & motion
                      </div>
                    </div>
                    <Divider />
                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>03.</span> Design
                        driven by science and data
                      </div>
                    </div>
                    <Divider />
                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>04.</span> Complex
                        design systems
                      </div>
                    </div>
                    <Divider />
                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>05.</span> Transparent,
                        constructive feedback
                      </div>
                    </div>
                    <Divider />
                    <div className='py-8 '>
                      <div className='px-12 mx-auto font-thin text-white md:text-2xl'>
                        <span className='pr-4 font-bold'>06.</span>Selling a
                        solution
                      </div>
                    </div>
                  </div>

                  <Divider />

                  <SectionA />

                  <m.div
                    animate={{ x: 0, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                  >
                    <div className='px-24 mx-auto text-4xl font-semibold tracking-tighter uppercase text-yellow-500 text-opacity-80 md:text-6xl lg:text-[300px]'>
                      Usecases:
                    </div>
                  </m.div>
                  <div
                    className='px-24 mx-auto md:grid md:grid-cols-6'
                    data-scroll-section
                    data-scroll
                    data-scroll-speed='1'
                  >
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo1} layout='responsive' />
                    </div>
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo2} layout='responsive' />
                    </div>
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo3} layout='responsive' />
                    </div>
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo4} layout='responsive' />
                    </div>
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo1} layout='responsive' />
                    </div>
                    <div className='w-32 h-32 mx-auto'>
                      <Image alt='Mountains' src={Logo1} layout='responsive' />
                    </div>
                  </div>

                  <div className='grid mx-24 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 '>
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
