import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import FancyLink from '@/components/fancyLink';
import Layout from '@/components/layout';
import Divider from '@/components/molecules/Divider';

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
                <m.main variants={fade} className=''>
                  <div className='bg-stone-900 '>
                    <div className='relative h-screen mx-auto px-36'>
                      <m.div animate={{ x: 0, y: 50 }}>
                        <div className='text-3xl leading-loose text-white w-72'>
                          LUCAS C
                        </div>{' '}
                        <div className='text-sm leading-loose text-white w-72'>
                          Butter V_.01
                        </div>{' '}
                      </m.div>

                      <m.div animate='visible' variants={hero}>
                        <div className='mt-36  text-[224px] max-w-6xl leading-[1] bg-clip-text bg-gradient-to-br from-[#0528F2] to-[#D97E4A] text-transparent '>
                          AHDSR DESIGN <br />
                        </div>
                      </m.div>
                      <Divider />
                      <m.div
                        animate={{ x: 0, y: 50 }}
                        transition={{ delay: 0.3, duration: 1 }}
                      >
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-right text-yellow-100'>
                          Based in Toronto, CAN{' '}
                        </div>
                        <div className='mx-auto mt-2 text-sm font-thin leading-loose text-right text-yellow-100'>
                          43.717163112943155, -79.49685365328081
                          <BsFillArrowDownRightCircleFill className='w-12 h-12 m-4 text-right text-slate-800' />
                        </div>
                      </m.div>

                      <Divider />
                      <div className='border-red-200 ' />
                    </div>
                    <div className='mx-auto px-36'>
                      <div className='text-5xl leading-10 text-white w-96'>
                        A1. <br />
                        Quick Facts
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Beon Performance'
                          label='Beon Performance'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                        />
                      </div>
                    </div>

                    <div className='w-1/2 h-screen mx-auto px-36'>
                      <div className='top-0 right-0 text-xl font-thin leading-10 text-white uppercase '>
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
                    <div className='mx-auto px-36'>
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
                      <div
                        className='h-screen max-w-6xl font-thin text-red-400 px-36 leading-2 text-8xl'
                        data-scroll
                        data-scroll-speed='1'
                        data-scroll-delay='0.5'
                      >
                        Research, design, prototype, test and evaluate ↻
                      </div>
                      <div
                        className='mx-auto text-xl font-thin leading-9 text-white px-36 '
                        data-scroll
                        data-scroll-speed='3'
                      >
                        As a designer, I've been lucky enough to be exposed to a
                        vast number of employers, teams and projects. Each of
                        them have given me a rewarding learning experience.
                        <br />
                        <br />I approach all my projects, regardless of the
                        project size with a a discovery session to understand my
                        client’s needs, the business objectives and what the
                        user research is indicating.
                        <br />
                        <br />I help my clients improve their usability
                        experience and provide them with a product we can be
                        mutually proud of.
                        <br />
                        <br />
                        Below you'll find a few selected use case studies that
                        go into a detailed design process. You can also view
                        more stuff in the other work section.
                      </div>
                    </div>
                    <div className='mx-auto px-36'>
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
                    <div className='flex flex-row p-12 mb-24 bg-black mx-36 '>
                      <div className='max-w-6xl text-2xl font-thin text-yellow-500 leading-2'>
                        BEON PERFORMANCE
                        <p>
                          {' '}
                          As a designer, I've been lucky enough to be exposed to
                          a vast number of employers, teams and projects. Each
                          of them have given me a rewarding learning experience.
                        </p>
                      </div>
                      <div className=' shrink'>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                        />
                      </div>{' '}
                    </div>

                    <div className='flex flex-row p-12 mx-24 mb-24 bg-[#404243] '>
                      <div className='max-w-6xl text-2xl font-thin text-yellow-500 leading-2'>
                        BEON PERFORMANCE
                        <p>
                          {' '}
                          As a designer, I've been lucky enough to be exposed to
                          a vast number of employers, teams and projects. Each
                          of them have given me a rewarding learning experience.
                        </p>
                      </div>
                      <div className=' shrink'>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                        />
                      </div>{' '}
                    </div>

                    <div className='flex flex-row p-12 mx-24 mb-24 bg-[#A73651] '>
                      <div className='max-w-6xl text-2xl font-thin text-yellow-500 leading-2'>
                        BEON PERFORMANCE
                        <p>
                          {' '}
                          As a designer, I've been lucky enough to be exposed to
                          a vast number of employers, teams and projects. Each
                          of them have given me a rewarding learning experience.
                        </p>
                      </div>
                      <div className=' shrink'>
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='intrinsic'
                        />
                      </div>{' '}
                    </div>
                    <Divider />
                    <div className='flex flex-row h-screen'>
                      <div className='max-w-6xl font-thin text-red-400 px-36 leading-2 text-8xl'>
                        Before you go...
                      </div>
                      <Divider />
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
