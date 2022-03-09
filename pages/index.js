import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Navbar from '@/components/navbar';

//import Breadcrumb from '@/componsents/breadcrumb';

import PortfolioList from '@/components/portfoliolist';

//Imported Images
import Image from 'next/image';
import Image1 from '../assets/global/main.jpg';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <>
      <Navbar />

      <Layout>
        <NextSeo title='Home' />
        <LazyMotion features={domAnimation}>
          <m.div initial='initial' animate='enter' exit='exit'>
            <m.main variants={fade} className='pb-4'>
              <div
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
              </div>

              <div className='relative grid place-items-center -mt-20 h-36 bg-slate-900 sm:mx-6 md:mx-24 lg:mx-24 xl:mx-40 z-10'>
                <p className='block p-8 text-white '>⊷ CLIENT LIST BOX ⊷</p>
              </div>

              <div className=' pt-32 pb-28 md:pt-44 md:pb-44 lg:pt-60 lg:pb-60 bg-gradient-to-bl from-customblue via-customblue to-customblue text-white z-0 -mt-20  '>
                <div className='md:flex px-8 md:px-12 lg:px-24 xl:px-20 max-w-7xl mx-auto  '>
                  <div className='homepage md:item md:w-1/2 h-auto content md:pr-16  '>
                    <h1>Research, design, prototype, test and evaluate ↻ </h1>
                    <p>
                      As a designer, I've been lucky enough to be exposed to a
                      vast number of employers, teams and projects.
                    </p>
                  </div>
                  <div className='homepage md:item md:w-1/2 h-auto content'>
                    <p>
                      As a designer, I've been lucky enough to be exposed to a
                      vast number of employers, teams and projects. Irregardless
                      of where I work, the process is very similar. Research,
                      design, prototype, test and evaluate.
                    </p>
                    <p>
                      Each of them has been a unique and rewarding learning
                      experience, but above design cycle pattern doesn't usually
                      change. Irregardless of where I work, the process is very
                      similar. Research, design, prototype, test and evaluate.
                    </p>
                    <p>
                      Each of them has been a unique and rewarding learning
                      experience, but above design cycle pattern doesn't usually
                      change.
                    </p>
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
      </Layout>
    </>
  );
}
