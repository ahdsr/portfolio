import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import ReactPlayer from 'react-player/lazy';

import { Scrollbars } from 'rc-scrollbars';

//import Breadcrumb from '@/componsents/breadcrumb';

import PortfolioList from '@/components/portfoliolist';

//Imported Images
import Image from 'next/image';
import Image1 from '../assets/global/main.jpg';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout>
      <NextSeo title='Home' />

      <Navbar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.08,

          tablet: { smooth: false, breakpoint: 1280 },
          smartphone: { smooth: false },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='pb-4'>
                  {/* <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '800px',
                    }}
                  >
                    <Image
                      alt='Mountains'
                      src={Image1}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div> */}
                  <div className='player-wrapper '>
                    <ReactPlayer
                      url='https://youtu.be/oCMQEDL_iBU'
                      className='react-player'
                      width='100%'
                      height='100%'
                      controls={false}
                      config={{
                        file: {
                          attributes: {
                            muted: true,
                            autoPlay: true,
                          },
                        },
                      }}
                    />
                  </div>
                  <div className='bg-slate-900 mx-0 sm:mx-6 md:mx-24 lg:mx-24 xl:mx-40 h-36 z-10 relative -mt-20 grid place-items-center rounded-br-3xl rounded-bl-3xl'>
                    <p className='block p-8 text-white '>CLIENT LIST BOX</p>
                  </div>
                  <div className='pt-48 pb-36 md:pt-56 md:pb-44 bg-gradient-to-bl from-customblue via-customblue to-customblue text-white -mt-36 z-0  '>
                    <div className='md:flex mx-2 px-4 md:mx-12 lg:mx-24 xl:mx-80  '>
                      <div className='md:item md:w-1/2 h-auto content md:pr-16  '>
                        <h1>
                          Plan, discover, design and iterate ... and iterate and
                          iterate.
                        </h1>
                      </div>
                      <div className='md:item md:w-1/2 h-auto content-sub'>
                        <p>
                          As a designer, I've been lucky enough to be exposed to
                          a number of employers, teams and projects. Each has
                          been a a unique and rewarding experience, but some
                          things always remain common.
                        </p>
                        <p>
                          Irregardless of where I work, the process is very
                          similar. Plan, discover, design and iterate.
                        </p>
                        <p>Copy</p>
                        <p>Copy</p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-48 pb-36 md:pt-56 md:pb-44 bg-gradient-to-bl from-customblue via-customblue to-customblue text-white -mt-36 z-0  '>
                    <div className='md:flex mx-2 px-4 md:mx-12 lg:mx-24 xl:mx-80  '>
                      <div className='md:item md:w-1/2 h-auto content md:pr-16  '>
                        <h1>
                          Plan, discover, design and iterate ... and iterate and
                          iterate.
                        </h1>
                      </div>
                      <div className='md:item md:w-1/2 h-auto content-sub'>
                        <p>
                          As a designer, I've been lucky enough to be exposed to
                          a number of employers, teams and projects. Each has
                          been a a unique and rewarding experience, but some
                          things always remain common.
                        </p>
                        <p>
                          Irregardless of where I work, the process is very
                          similar. Plan, discover, design and iterate.
                        </p>
                        <p>Copy</p>
                        <p>Copy</p>
                      </div>
                    </div>
                  </div>

                  <Container>
                    <div className='content '>
                      <div>
                        <PortfolioList />
                      </div>
                    </div>
                  </Container>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
