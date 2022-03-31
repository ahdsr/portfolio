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

//Imported Images
import Image from 'next/image';
import Placeholder from '../assets/usecases/beon_hero.webp';

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
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='' id='scroll-direction'>
                  <div
                    className='z-50 '
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target='#scroll-direction'
                  >
                    <AnimTest />
                  </div>
                  <div className='bg-black '>
                    <div className='relative h-screen mx-auto md:px-20 lg:px-24 xl:px-36'>
                      <m.div animate={{ x: 0, y: 50 }}>
                        <div className='text-3xl leading-loose text-right text-stone-600'>
                          V.01 - Lucas C{' '}
                        </div>
                        <div className='mx-auto text-2xl leading-loose text-right text-white '>
                          Mar 30 2022
                        </div>
                      </m.div>

                      <div className='mt-36 md:text-[160px] lg:text-[180px]  leading-[1] bg-clip-text bg-gradient-to-br from-[#FFD600] to-[#e0bb00] text-transparent tracking-tighter '>
                        /* INSERT CREATIVE TAGLINE HERE */
                        <br />
                      </div>

                      <m.div
                        animate={{ x: 0, y: 50 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                      >
                        <BsFillArrowDownRightCircleFill className='w-12 h-12 m-4 mx-auto text-right text-opacity-50 rotate-45 text-slate-50' />
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-right text-yellow-100'></div>
                      </m.div>
                    </div>

                    <div className='mx-auto px-36'>
                      <div className='text-5xl leading-10 text-slate-300 w-96'>
                        A1. <br />
                        Quick Facts
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Beon Performance'
                          label='Beon Performance'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-3 py-2 border-t-2 text-sm font-regular uppercase'
                        />
                      </div>
                    </div>

                    <div className='h-screen mx-auto lg:w-1/2 px-36'>
                      <div className='top-0 right-0 text-xl font-thin leading-10 text-white uppercase '>
                        <BsFillArrowDownRightCircleFill className='m-4 text-right w-96 h-96 text-slate-800 text-opacity-10' />
                        <ul>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.1'
                          >
                            01. A tough design problem
                          </li>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.2'
                          >
                            02. Subtle animation & motion
                          </li>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.3'
                          >
                            03. Design driven by science and data
                          </li>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.4'
                          >
                            04. Transparent, constructive feedback
                          </li>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.5'
                          >
                            05. Selling a solution
                          </li>
                          <li
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-delay='0.6'
                          >
                            06. A tough design problem
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className='mx-auto mb-24 px-36'
                      data-scroll
                      data-scroll-speed='1'
                    >
                      <div className='text-5xl leading-10 text-white w-96'>
                        B1. <br />
                        ABOUT ME
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Beon Performance'
                          label='Beon Performance'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row '>
                      <div className='h-screen max-w-6xl font-thin text-[#FFD600] px-36 leading-2 text-8xl'>
                        Research, design, prototype, test and evaluate ↻
                      </div>
                      <div
                        className='mx-auto text-xl font-thin leading-9 text-white px-36 '
                        data-scroll
                        data-scroll-speed='3'
                      >
                        <TextAnim
                          text=" As a designer, I've been lucky enough to be exposed to a
                        vast number of employers, teams and projects. Each of
                        them have given me a rewarding learning experience.' />
                        As a designer, I've been lucky enough to be exposed to a
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
                    <div
                      className='mx-auto mb-24 px-36'
                      data-scroll
                      data-scroll-speed='1'
                    >
                      <div className='text-5xl leading-10 text-white w-96'>
                        C1. <br />
                        CASE STUDIES
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Beon Performance'
                          label='Beon Performance'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                      </div>
                    </div>

                    <div className='mx-8 mb-24 duration-700 ease-in-out md:grid md:grid-cols-2 md:p-12 xl:p-24 md:mx-12 lg:mx-20 xl:mx-36 bg-[#0A0A0A] hover:shadow-custom hover:scale-95 hover:bg-opacity-20'>
                      <div className='pr-48 mt-24 text-6xl font-thin text-yellow-500 leading-2'>
                        BEON PERFORMANCE
                        <TextAnim
                          text="As a designer, I've been lucky enough to be exposed to
                            a vast number of employers, teams and projects. Each
                            of them have given me a rewarding learning experience."
                        />
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Check it'
                          label='Check it'
                          extraClasses='cta'
                        />
                      </div>
                      <div className='overflow-hidden transition-all duration-700 ease-in-out rounded-lg hover:scale-110 shrink opacity-60 hover:opacity-90'>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                        />
                      </div>
                    </div>

                    <div className='mx-8 mb-24 duration-700 ease-in-out bg-[#0A0A0A] md:grid md:grid-cols-2 md:p-12 xl:p-24 md:mx-12 lg:mx-20 xl:mx-36 hover:shadow-custom hover:scale-95 rounded-large hover:bg-opacity-20'>
                      <div className='pr-48 mt-24 text-6xl font-thin text-yellow-500 leading-2'>
                        BEON PERFORMANCE
                        <TextAnim
                          text="As a designer, I've been lucky enough to be exposed to
                            a vast number of employers, teams and projects. Each
                            of them have given me a rewarding learning experience."
                        />
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Check it'
                          label='Check it'
                          extraClasses='cta'
                        />
                      </div>
                      <div className='overflow-hidden transition-all duration-700 ease-in-out rounded-lg shrink opacity-60 hover:opacity-90 hover:scale-110 '>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                        />
                      </div>
                    </div>

                    <div className='mx-8 mb-24 duration-700 ease-in-out md:grid md:grid-cols-2 md:p-12 xl:p-24 md:mx-12 lg:mx-20 xl:mx-36 bg-[#0A0A0A] hover:shadow-custom hover:scale-95 hover:bg-opacity-20'>
                      <div className='pr-8 mt-24 text-6xl font-light text-yellow-500 leading-2'>
                        VISA, CIBC & NAB
                        <div className='pt-8 pr-8 text-xl font-bold text-white shrink-1'>
                          <TextAnim
                            text="As a designer, I've been lucky enough to be exposed to
                            a vast number of employers, teams and projects. Each
                            of them have given me a rewarding learning experience."
                          />
                        </div>
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Check it'
                          label='Check it'
                          extraClasses='cta'
                        />
                      </div>
                      <div className='overflow-hidden transition-all duration-700 ease-in-out rounded-lg shrink opacity-60 hover:opacity-90 hover:scale-110 '>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className='flex flex-row mb-24 '>
                      <div className='max-w-6xl font-thin text-[#FFD600] px-36 leading-2 text-8xl'>
                        Before you go...
                      </div>

                      <div className='mx-auto text-xl font-thin leading-9 text-white px-36 '>
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

                    <div className='pb-24 mx- auto px-36 '>
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
