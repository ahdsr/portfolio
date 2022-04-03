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

import ImageAnim from '@/components/molecules/imageAnim';
import RandomImage from '@/components/molecules/randomImage';
import AnimTest from './animationTest1';

//Clean Imports
import LocoPageHeading from '@/components/molecules/LocoPageHeading';
import LocoCaseStudyHero from '@/components/molecules/LocoCaseStudyHero';
import LocoTextAnim from '@/components/molecules/LocoTextAnim';

//Imported Images
import Image from 'next/image';
import Placeholder from '../assets/usecases/beon_hero.webp';

function Resume() {
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
                  <div className='px-8 mx-auto bg-[#0B121D]  md:px-16 lg:px-36 '>
                    {/*    <div
                      className='z-50 '
                      data-scroll
                      data-scroll-sticky
                      data-scroll-target='#scroll-direction'
                    >
                      <AnimTest />
                    </div> */}
                    <div className='mx-auto'>
                      <m.div animate={{ x: 0, y: 50 }}>
                        <div className='text-sm leading-loose text-right text-stone-600'>
                          V.01 - ahdsr{' '}
                        </div>

                        <div className='mx-auto mb-12 text-xl leading-loose text-right text-white '>
                          Mar 30 2022
                        </div>
                        <DividerAnim />
                      </m.div>

                      <div className='font-bold mt-16 md:text-[140px] lg:text-[240px] uppercase  leading-[1] bg-clip-text bg-gradient-to-br from-[#1B3389] to-[#0B121D] text-transparent tracking-tighter '>
                        Resume
                      </div>
                    </div>
                    <div className='mx-auto overflow-hidden'>
                      <DividerAnim />
                    </div>

                    <div className='my-48 lg:grid lg:grid-cols-1'>
                      <div className='font-thin text-[#FFD600] leading-2 text-6xl lg:text-8xl mr-16 md:mb-12'>
                        Overview
                      </div>
                      <div
                        className='grid grid-cols-7 gap-12 mx-auto text-xl font-thin leading-9 text-white '
                        data-scroll
                        data-scroll-speed='1'
                        data-scroll-delay='0.6'
                      >
                        <LocoTextAnim
                          text='Bachelor of Design Honours (B.Des.) York University /
                          Sheridan Institute'
                        />{' '}
                        <div>
                          Expert in
                          <a
                            href='https://www.sketch.com/'
                            target='_blank'
                            className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                          >
                            Sketch
                          </a>
                          ,
                          <a
                            href='https://www.figma.com/'
                            target='_blank'
                            className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                          >
                            Figma
                          </a>
                          ,
                          <a
                            href='https://www.invisionapp.com/studio/learn/welcome-to-invision-studio'
                            target='_blank'
                            className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                          >
                            Invision Studio
                          </a>
                          <a
                            href='https://www.adobe.com/ca/creativecloud.html'
                            target='_blank'
                            className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                          >
                            Adobe Cloud
                          </a>
                          &
                          <a
                            href='https://www.protopie.io/'
                            target='_blank'
                            className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                          >
                            Protopie
                          </a>
                          as well as other prototyping & design software
                        </div>
                        <LocoTextAnim
                          text='     Always strives to achieve simplicity for the end user,
                          despite the complexity of the process or back-end systems'
                        />{' '}
                        <LocoTextAnim
                          text='  Skilled in delivering adaptive responsive layouts and
                          elevated in understanding the technology that drives them'
                        />{' '}
                        <LocoTextAnim
                          text='  Adept at aligning business needs with creativity while
                          respecting brand standards'
                        />
                        <LocoTextAnim
                          text=' High aptitude for quality assurance and improvement with a
                          keen eye for detail'
                        />
                        <LocoTextAnim
                          text=' Excellent verbal & written communication, and strong people
                          skills with clients and colleagues'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                      <div>
                        <LocoPageHeading
                          number={'A'}
                          heading={'Element Fleet Management'}
                          destination={'/casestudy'}
                          a11yText={'Cast Study'}
                          label={'About Me'}
                          extraClasses={'cta inline-block'}
                        />
                      </div>
                      <div>
                        <div className='mx-auto overflow-hidden'></div>
                        <div className=''>
                          <div className='font-bold text-yellow-200'>
                            Jan 2020 - Current
                          </div>
                          <div className='text-white'>
                            User Experience Consultant
                          </div>
                        </div>
                        <ul className='text-base font-thin text-white'>
                          <li>
                            Contributing and designing component library for new
                            Ordering platform
                          </li>
                          <li>
                            Helping define future standards and direction of B2B
                            Ordering platform
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                        </ul>
                      </div>
                      <div>
                        <LocoPageHeading
                          number={' Jan 2020 - Current'}
                          heading={'Element Fleet Management'}
                          destination={'/casestudy'}
                          a11yText={'Cast Study'}
                          label={'About Me'}
                          extraClasses={'cta inline-block'}
                        />
                      </div>
                      <div>
                        <div className='mx-auto overflow-hidden'>
                          <h2>Element Fleet Management</h2>
                          <p></p>
                        </div>
                        <div className='ml-6'>
                          <div className='font-bold text-yellow-200'>
                            Jan 2020 - Current
                          </div>
                          <div className='text-white'>
                            User Experience Consultant
                          </div>

                          <div className='client'>Element Fleet Management</div>
                        </div>
                        <ul className='text-base font-thin text-white'>
                          <li>
                            Contributing and designing component library for new
                            Ordering platform
                          </li>
                          <li>
                            Helping define future standards and direction of B2B
                            Ordering platform
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                          <li>
                            Support developers using JIRA and Confluence to
                            deliver ongoing projects as well as providing
                            guidance and specifications throughout the project
                            sprints
                          </li>
                        </ul>
                      </div>
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

export default Resume;
