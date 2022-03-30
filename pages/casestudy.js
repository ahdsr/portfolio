import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '@/components/layout';
import FancyLink from '@/components/fancyLink';
import Divider from '@/components/molecules/Divider';
import DividerAnim from '@/components/molecules/DividerAnim';
import TextAnim from '@/components/molecules/textAnim';
import ImageAnim from '@/components/molecules/imageAnim';
import ReactPlayer from 'react-player';

//Imported Images

import Image from 'next/image';
import Placeholder from '../assets/global/bg.png';
import Placeholder2 from '../assets/global/bg2.png';

function figma() {
  const containerRef = useRef(null);

  //
  const hero = {
    visible: {
      x: 0,
      y: -100,
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <Layout>
      <NextSeo title='Home' />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className=''>
                  <div className=''>
                    <div>
                      <FancyLink
                        destination='/figma'
                        a11yText='Back'
                        label='B'
                        extraClasses='transition-all text-white bg-gradient-to-br from-yellow-500  to-yellow-400 hover:text-slate-200 inline-flex items-center w-16 h-16 self-center m-12 hover:scale-120 hover:border-4  rounded-full  text-sm font-regular uppercase'
                      />
                    </div>

                    <div className='flex flex-row'>
                      <div className='relative pb-12 mx-auto px-36'>
                        <m.div animate='visible' variants={hero}>
                          <div className='mt-36 font-light  text-[112px] max-w-4xl leading-[1] bg-clip-text bg-gradient-to-br from-[#0528F2] to-[#0742F2] text-transparent tracking-tighter mb-24'>
                            BEON PERFORMANCE
                          </div>
                        </m.div>
                        <m.div
                          animate={{ x: 0, y: -100 }}
                          transition={{ delay: 0.2, duration: 0.7 }}
                        >
                          <div className='text-3xl font-light leading-loose text-white w-72 b '>
                            Case Study
                          </div>{' '}
                        </m.div>
                        <m.div
                          animate={{ x: 0, y: -100 }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className='max-w-3xl mb-12 text-2xl font-thin text-white'>
                            {' '}
                            <TextAnim text='Creating a digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress while introducing the ACT Model including understanding its methodology, development and ongoing management to their clients. Creating a digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress while introducing the ACT Model including understanding its methodology, development and ongoing management to their clients.' />
                          </div>
                        </m.div>
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-left text-yellow-100'>
                          Mobile App
                        </div>
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-left text-yellow-100'>
                          Client: Beon Performance
                        </div>
                      </div>

                      <div className='shrink grid grid-cols-4 gap-4 max-w-6xl font-thin tracking-tighter bg-clip-text bg-gradient-to-br from-[#BF8656] to-[#E49A61] text-transparent px-36 leading-2 text-xl'>
                        <div>
                          <h3>Project</h3>
                          <div className='text-base font-bold tracking-normal'>
                            <TextAnim text='Mobile Native' />
                          </div>
                        </div>
                        <div>
                          <h3>Role</h3>
                          <div className='text-base font-bold tracking-normal'>
                            <TextAnim text='UX Manager' />
                            <TextAnim text='UX Senior Lead' />
                          </div>
                        </div>
                        <div>
                          <h3>Duration</h3>
                          <div className='text-base font-bold tracking-normal'>
                            <TextAnim text='UX Manager' />
                            <TextAnim text='5 Day Ideation Workshop' />
                          </div>
                        </div>
                        <div>
                          <h3>Tools</h3>

                          <div className='text-base font-bold tracking-normal'>
                            <TextAnim text='Sketch' />
                            <TextAnim text='Invision Studio' />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*     <div className='flex flex-row mx-auto'>
                      <div
                        data-scroll
                        data-scroll-speed='1'
                        data-scroll-delay='0.5'
                      >
                        {' '}
                        <ImageAnim />
                      </div>
                      <div
                        data-scroll
                        data-scroll-speed='3'
                        data-scroll-delay='0.5'
                      >
                        {' '}
                        <ImageAnim />
                      </div>
                    </div> */}

                    <div className='mx-auto px-36'>
                      <DividerAnim />
                      <div className='w-64 mt-12 text-5xl leading-10 text-white'>
                        C1. <br />
                        OVERVIEW
                        <FancyLink
                          destination='/'
                          a11yText='Overview'
                          label='Overview'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                        <FancyLink
                          destination='/'
                          a11yText='Illustrating the use case'
                          label='Illustrating the use case'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                        <FancyLink
                          destination='/'
                          a11yText='Ideation'
                          label='Ideation'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                      </div>
                    </div>

                    <div className='flex flex-row pb-24'>
                      <div className='max-w-6xl font-thin tracking-tighter bg-clip-text bg-gradient-to-br from-[#BF8656] to-[#E49A61] text-transparent px-36 leading-2 text-8xl'>
                        Be on point, be on your a-game, be on what matters most.
                      </div>

                      <div className='mx-auto text-xl font-thin leading-9 text-white px-36 '>
                        <DividerAnim />
                        <h3>01.</h3>
                        <TextAnim text='The companion mobile app, which would allow users to keep track of their events, create and track their ACT models, review and submit their performance scores to their mentors, and to keep up to date with any course material.' />
                        <DividerAnim />
                        <h3>02.</h3>
                        <TextAnim text='The administrative mentor side that would allow for managing teams, mentoring events and providing feedback to the user. (not included in this case study).' />
                        <DividerAnim />
                        <h3>03.</h3>
                        <TextAnim
                          text='Group session to explore what impacts performance, how
                          to deal with anxiety, getting to your individual and
                          collective A Game and performance mindset.'
                        />
                      </div>
                    </div>
                    {/* 
                    <ImageAnim /> */}

                    <div className='grid h-screen grid-cols-2 gap-4'>
                      <div className='max-w-6xl font-thin tracking-tighter text-red-400 px-36 leading-2 text-8xl'>
                        SHANE WATSON
                      </div>

                      <div className='mx-auto text-xl font-thin leading-9 text-white px-36 '>
                        <h3>
                          {' '}
                          One of the best all-rounders, Shane Watson’s
                          cricketing legacy is an illustrious one.
                        </h3>
                        <TextAnim
                          text='Group session to explore what impacts performance, how
                          to deal with anxiety, getting to your individual and
                          collective A Game and performance mindset.'
                        />

                        <h3>Visualize</h3>
                        <TextAnim
                          text='Group session to explore what impacts performance, how
                          to deal with anxiety, getting to your individual and
                          collective A Game and performance mindset.'
                        />
                        <h3>Refine</h3>
                        <TextAnim
                          text='Group session to explore what impacts performance, how
                          to deal with anxiety, getting to your individual and
                          collective A Game and performance mindset.'
                        />
                      </div>
                    </div>
                    <div className='mx-auto text-xl font-thin leading-9 text-white px-36'>
                      <div className='player-wrapper'>
                        <ReactPlayer
                          className='react-player'
                          url='https://www.youtube.com/watch?v=tyS0S1DWB2Y'
                          width='100%'
                          height='100%'
                          controls='true'
                          muted='true'
                        />
                      </div>
                    </div>

                    <div className='mt-12'>
                      <div className='max-w-6xl text-4xl font-thin text-yellow-400 px-36 leading-2'>
                        The end, go back.
                        <BsFillArrowDownRightCircleFill className='w-12 h-12 -ml-2 text-right rotate-90 text-slate-800' />
                      </div>
                    </div>
                    <FancyLink
                      destination='/figma'
                      a11yText='Back'
                      label='Back'
                      extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 hover:rounded-full inline-flex items-center p-12 border-b-2 text-sm font-regular uppercase'
                    >
                      {' '}
                    </FancyLink>
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
