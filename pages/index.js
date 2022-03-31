import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import FancyLink from '@/components/fancyLink';
import Layout from '@/components/layout';
import Divider from '@/components/molecules/Divider';
import DividerAnim from '@/components/molecules/DividerAnim';
import TextAnim from '@/components/molecules/textAnim';
import ImageAnim from '@/components/molecules/imageAnim';
import RandomImage from '@/components/molecules/randomImage';
import AnimTest from './animationTest1';

//Clean Imports
import LocoPageHeading from '@/components/molecules/LocoPageHeading';
import LocoCaseStudyHero from '@/components/molecules/LocoCaseStudyHero';

//Imported Images
import Image from 'next/image';

function figma() {
  const containerRef = useRef(null);

  //
  const hero = {
    visible: { x: 0, y: [-1000, 50, 0] },
    hidden: { opacity: 0 },
  };

  return (
    <Layout>
      <NextSeo title='Home' />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          multiplier: 1,
          getDirection: true,
          mobile: {
            smooth: true,
            breakpoint: 0,
            multiplier: 2,
            getDirection: true,
            resetNativeScroll: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 0,
            multiplier: 2,
            getDirection: true,

            resetNativeScroll: true,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='' id='scroll-direction'>
                  <div className='px-8 mx-auto bg-black md:px-16 lg:px-36 '>
                    <div
                      className='z-50 '
                      data-scroll
                      data-scroll-sticky
                      data-scroll-target='#scroll-direction'
                    >
                      <AnimTest />
                    </div>
                    <div className='h-screen mx-auto'>
                      <m.div animate={{ x: 0, y: 50 }}>
                        <div className='leading-loose text-right lg:text-3xl text-stone-600'>
                          V.01 - Lucas C{' '}
                        </div>
                        <div className='mx-auto leading-loose text-right text-white lg:text-2xl '>
                          Mar 30 2022
                        </div>
                      </m.div>
                      <m.div
                        animate={{ x: 0, y: -80 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <div className='mt-36 md:text-[140px] lg:text-[220px] uppercase  leading-[1] bg-clip-text bg-gradient-to-br from-[#FFD600] to-[#fff] text-transparent tracking-tighter '>
                          Hello, I'm Lucas a UX/UI Designer
                          <br />
                        </div>
                      </m.div>
                      <m.div
                        animate={{ x: 0, y: 50 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                      >
                        <BsFillArrowDownRightCircleFill className='w-12 h-12 m-4 mx-auto text-right text-opacity-50 rotate-45 text-customblue' />
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-right text-yellow-100'></div>
                      </m.div>
                    </div>
                    <div className='pb-24 mx-auto overflow-hidden'>
                      <DividerAnim />
                    </div>
                    <LocoPageHeading
                      number={'01'}
                      heading={'Things I enjoy'}
                      destination={'/casestudy'}
                      a11yText={'Cast Study'}
                      label={'Case Study'}
                      extraClasses={'cta inline-block'}
                    />

                    <div className='my-48'>
                      <div className='top-0 right-0 w-1/2 text-xl font-thin leading-10 text-white uppercase '>
                        <ul>
                          <li>01. A tough design problem</li>
                          <li>02. Subtle animation & motion</li>
                          <li>03. Design driven by science and data</li>
                          <li>04. Transparent, constructive feedback</li>
                          <li>05. Selling a solution</li>
                          <li>06. A tough design problem</li>
                        </ul>
                      </div>
                    </div>
                    <div className='pb-24 mx-auto overflow-hidden'>
                      <DividerAnim />
                    </div>
                    <LocoPageHeading
                      number={'02'}
                      heading={'About Me'}
                      destination={'/casestudy'}
                      a11yText={'Cast Study'}
                      label={'About Me'}
                      extraClasses={'cta inline-block'}
                    />

                    <div className='my-48 lg:grid lg:grid-cols-3'>
                      <div className='font-thin text-[#FFD600] leading-2 text-6xl lg:text-8xl mr-16 md:mb-12'>
                        Research, design, prototype, test and evaluate ↻
                      </div>
                      <div
                        className='mx-auto text-xl font-thin leading-9 text-white '
                        data-scroll
                        data-scroll-speed='1'
                        data-scroll-delay='0.6'
                      >
                        <TextAnim
                          text=" As a designer, I've been lucky enough to be exposed to a
                        vast number of employers, teams and projects. Each of
                        them have given me a rewarding learning experience."
                        />
                        <TextAnim
                          text='I approach all my projects, regardless of the
                          project size with a a discovery session to understand my
                          client’s needs, the business objectives and what the
                          user research is indicating.'
                        />
                        <TextAnim
                          text='I help my clients improve their usability
                          experience and provide them with a product we can be
                          mutually proud of.'
                        />
                        <TextAnim
                          text=" Below you'll find a few selected use case studies that
                          go into a detailed design process. You can also view
                          more stuff in the other work section."
                        />
                      </div>
                    </div>
                    <div className='pb-24 mx-auto overflow-hidden'>
                      <DividerAnim />
                    </div>
                    <LocoPageHeading
                      number={'03'}
                      heading={'Case Studies'}
                      destination={'/casestudy'}
                      a11yText={'Case Studies'}
                      label={'Case Studies'}
                      extraClasses={'cta inline-block'}
                    />

                    <LocoCaseStudyHero />
                    <LocoCaseStudyHero />
                    <LocoCaseStudyHero />

                    <div className='mb-24 md:flex md:flex-row'>
                      <div className='font-thin text-[#FFD600] leading-2 text-4xl'>
                        Before you go...
                      </div>

                      <div className='mx-auto text-xl font-thin leading-9 text-white '>
                        <h3>Experience</h3>
                        <p>
                          I’ve got over 12 years of experience working in web
                          and native mobile design
                        </p>
                        <h3>The Process</h3>
                        <p>
                          I enjoy the design process and understand what it
                          means to be on a team
                        </p>
                        <h3>Never stop learning</h3>
                        <p>It’s never to late to learn, discover and change</p>
                      </div>
                    </div>

                    <div className='pb-24 mx-auto overflow-hidden'>
                      <DividerAnim />
                    </div>
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

export default figma;
