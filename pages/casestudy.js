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
      y: [-500, 0, 0],
      transition: {
        duration: 1,
        delay: 0.5,
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
                  <div className='bg-indigo-900 bg-opacity-50 '>
                    <div>
                      <FancyLink
                        destination='/figma'
                        a11yText='Back'
                        label='Back'
                        extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center p-12 border-b-2 text-sm font-regular uppercase'
                      />
                    </div>
                    <div className='relative mx-auto px-36 pb-36'>
                      <Divider />

                      <m.div animate='visible' variants={hero}>
                        <div className='mt-36  text-[112px] max-w-7xl leading-[1] bg-clip-text bg-gradient-to-br from-[#0528F2] to-[#0742F2] text-transparent tracking-tighter mb-24'>
                          BEON PERFORMANCE
                        </div>
                      </m.div>
                      <m.div
                        animate={{ x: 0, y: -100 }}
                        transition={{ delay: 1 }}
                      >
                        <div className='text-5xl leading-loose text-white w-72'>
                          Case Study
                        </div>{' '}
                      </m.div>

                      <div className='max-w-3xl mb-12 text-2xl font-thin text-white'>
                        {' '}
                        <TextAnim text='Creating a digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress while introducing the ACT Model including understanding its methodology, development and ongoing management to their clients. Creating a digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress while introducing the ACT Model including understanding its methodology, development and ongoing management to their clients.' />
                      </div>

                      <div className='mx-auto mt-2 text-sm font-thin leading-loose text-left text-yellow-100'>
                        Mobile App
                      </div>
                      <div className='mx-auto mt-2 text-sm font-thin leading-loose text-left text-yellow-100'>
                        Client: Beon Performance
                      </div>
                    </div>

                    <div className='grid grid-cols-4 gap-4 max-w-6xl font-thin tracking-tighter bg-clip-text bg-gradient-to-br from-[#BF8656] to-[#E49A61] text-transparent px-36 leading-2 text-xl'>
                      <div>
                        <h3>Project</h3>
                        <p>
                          <TextAnim text='Mobile Native' />
                        </p>
                      </div>
                      <div>
                        <h3>Role</h3>

                        <TextAnim text='UX Manager' />
                        <TextAnim text='UX Senior Lead' />
                      </div>
                      <div>
                        <h3>Duration</h3>
                        <TextAnim text='UX Manager' />
                        <TextAnim text='5 Day Ideation Workshop' />
                      </div>
                      <div>
                        <h3>Tools</h3>
                        <TextAnim text='UX Manager' />
                        <TextAnim text='Sketch' />
                        <TextAnim text='Invision Studio' />
                      </div>
                    </div>

                    <div className='flex flex-row mx-auto px-36'>
                      <div
                        data-scroll
                        data-scroll-speed='1'
                        data-scroll-delay='0.5'
                        className='pr-4'
                      >
                        {' '}
                        <ImageAnim />
                      </div>
                      <div
                        data-scroll
                        data-scroll-speed='2'
                        data-scroll-delay='0.5'
                        className='pl-4'
                      >
                        {' '}
                        <ImageAnim />
                      </div>
                    </div>

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

                    <ImageAnim />

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

                    <div className='py-24'>
                      <div className='max-w-6xl text-4xl font-thin text-yellow-400 px-36 leading-2'>
                        <BsFillArrowDownRightCircleFill className='w-12 h-12 m-4 text-right text-slate-800' />
                        The end, go back.
                      </div>
                    </div>
                  </div>
                  <FancyLink
                    destination='/figma'
                    a11yText='Back'
                    label='Back'
                    extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center p-12 border-b-2 text-sm font-regular uppercase'
                  >
                    {' '}
                  </FancyLink>
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
