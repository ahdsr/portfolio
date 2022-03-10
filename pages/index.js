import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/navbar';
import FancyLink from '@/components/fancyLink';

//import Breadcrumb from '@/componsents/breadcrumb';

import PortfolioList from '@/components/portfoliolist';

//Imported Images
import Image from 'next/image';
import Image1 from '../assets/global/main.jpg';
import Logo1 from '../assets/global/logo_td.png';
import Logo2 from '../assets/global/logo_cibc.png';
import Logo3 from '../assets/global/logo_om.png';
import Logo4 from '../assets/global/logo_rsa.png';
import Logo5 from '../assets/global/logo_element.png';
import Logo6 from '../assets/global/logo_bmo.png';

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

              <div className=' relative grid place-items-center sm:mx-6 md:mx-12 lg:mx-24 xl:mx-40 -mt-20 z-10  md:h-36  bg-slate-900'>
                <div className='mt-10 align-middle space-x-4 md:space-x-8 mx-8 '>
                  <div className='inline-block w-8 h-8 md:w-12 md:h-12 '>
                    <Image
                      alt='Mountains'
                      src={Logo1}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='inline-block w-14 h-14 md:w-24 md:h-24'>
                    <Image
                      alt='Mountains'
                      src={Logo2}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='inline-block w-14 h-14 md:w-22 md:h-22'>
                    <Image
                      alt='Mountains'
                      src={Logo3}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='inline-block w-14 h-14 md:w-24 md:h-24'>
                    <Image
                      alt='Mountains'
                      src={Logo4}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='inline-block w-14 h-14 md:w-24 md:h-24'>
                    <Image
                      alt='Mountains'
                      src={Logo5}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='inline-block w-14 h-14 md:w-24 md:h-24'>
                    <Image
                      alt='Mountains'
                      src={Logo6}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                </div>
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
                      Each of them has been a unique and rewarding learning
                      experience and I approach all my projects, regardless of
                      the project size with a a discovery session to understand
                      my client’s needs, the business objectives and what the
                      user research is indicating.
                    </p>
                    <p>
                      I help my clients improve their usability experience and
                      provide them with a product we can be mutually proud of.
                    </p>
                    <p>
                      Below you'll find selected use case studies that review a
                      detailed design process. You can also view non client work
                      in the{' '}
                      <FancyLink
                        destination='/portfolio'
                        a11yText='More work'
                        label='work in progress'
                        extraClasses=' underline bg-black bg-opacity-30 p-1 hover:bg-yellow-400'
                      />{' '}
                      section.
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
