import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

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
import Me from '../assets/global/me.jpg';
import Lines from '../assets/global/lines.png';
import LogoGroup from '../assets/global/logogroup.png';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4'>
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '800px',
                  overflow: 'hidden',
                }}
              >
                <div className='hero relative lg:px-8  md:max-w-4xl lg:max-w-full mx-auto z-40 sm:pt-60 md:pt-52 xl:pt-52 text-left tracking-normal'>
                  <div className='  md:flex md:max-w-4xl lg:max-w-7xl mx-auto  '>
                    <div className='hero md:item md:w-2/3 h-auto content md:pr-16 max-w-full '>
                      <h1>
                        Hi, I’m Lucas a{' '}
                        <span className='text-yellow-500'>UX & UI</span>{' '}
                        designer, based out of Toronto.
                      </h1>
                      <ul className='font-medium'>
                        Things I like:
                        <li>A tough design problem</li>
                        <li>Some subtle animation & motion</li>
                        <li>Open and transparent communication</li>
                        <li>Science and data</li>
                        <li>Arguing a good point</li>
                        <li>Design systems</li>
                      </ul>
                    </div>
                    <div className='hero md:item md:w-1/3 h-auto content'>
                      <Image
                        alt='Mountains'
                        src={Me}
                        layout='responsive'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                </div>
                <Image
                  alt='Mountains'
                  src={Image1}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>

            <div className=' mt-24 pb-24  md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 bg-gradient-to-bl from-customblue via-customblue to-customblue2 text-white z-0 rounded-tr-huge   '>
              <div className='md:flex  max-w-7xl mx-auto  '>
                <div className='homepage md:item md:w-1/2 h-auto content md:pr-16 lg:px-8  '>
                  <h1>Research, design, prototype, test and evaluate ↻ </h1>
                  <p>
                    As a designer, I've been lucky enough to be exposed to a
                    vast number of employers, teams and projects.
                  </p>
                </div>
                <div className='homepage md:item md:w-1/2 h-auto content'>
                  <p>
                    Each of them has been a unique and rewarding learning
                    experience and I approach all my projects, regardless of the
                    project size with a a discovery session to understand my
                    client’s needs, the business objectives and what the user
                    research is indicating.
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
                  <div className='pt-20'>
                    <Image
                      alt='Mountains'
                      src={Lines}
                      layout='responsive'
                      objectFit='cover'
                    />
                    <Image
                      alt='Mountains'
                      src={LogoGroup}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
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
  );
}
