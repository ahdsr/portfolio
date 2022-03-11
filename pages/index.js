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
import LeftLines from '../assets/global/leftLines.png';
import LogoGroup from '../assets/global/logogroup.png';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4'>
            <div class='flex flex-row mx-auto max-w-screen-2xl mt-32  md:mt-36 lg:mt-40'>
              <div class='flex-none w-12 px-4 '>
                <div className='block w-4 h-12 mt-64'>
                  <Image
                    alt='Mountains'
                    src={LeftLines}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div class='grow mx-auto max-w-screen-2xl'>
                <div className='md:flex mx-auto  '>
                  <div className='hero md:item md:w-2/3 lg:w-2/3 xl:w-1/2  md:pr-32 max-w-full '>
                    <h1>
                      Hi, I’m Lucas a{' '}
                      <span className='text-yellow-500'>UX & UI</span> designer,
                      based out of Toronto.
                    </h1>
                    <p>Things I like:</p>
                    <ul>
                      <li>A tough design problem</li>
                      <li>Some subtle animation & motion</li>
                      <li>Open and transparent communication</li>
                      <li>Science and data</li>
                      <li>Arguing a good point</li>
                      <li>Design systems</li>
                    </ul>
                  </div>
                  <div className='item mx-auto mt-10 w-56 md:w-64 lg:w-80 text-center'>
                    <Image alt='Lucas' src={Me} layout='responsive' />
                  </div>
                </div>
              </div>
              <div class='flex-none w-12 px-4'></div>
            </div>
            <div class='flex flex-row max-w-full mx-auto mt-20  md:mt-40 bg-gradient-to-bl from-customblue via-customblue to-customblue2 text-white sm: rounded-tr-huge'>
              <div class='flex-none px-2'></div>
              <div class='grow mx-auto max-w-screen-2xl px-8 mt-20 md:mt-0'>
                <div className='md:pt-44 md:pb-44 lg:pt-40 lg:pb-40  z-0 rounded-tr-huge   '>
                  <div className='md:flex max-w-screen-2xl mx-auto  '>
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
                        experience and I approach all my projects, regardless of
                        the project size with a a discovery session to
                        understand my client’s needs, the business objectives
                        and what the user research is indicating.
                      </p>
                      <p>
                        I help my clients improve their usability experience and
                        provide them with a product we can be mutually proud of.
                      </p>
                      <p>
                        Below you'll find selected use case studies that review
                        a detailed design process. You can also view non client
                        work in the{' '}
                        <FancyLink
                          destination='/portfolio'
                          a11yText='More work'
                          label='work in progress'
                          extraClasses=' underline bg-black bg-opacity-30 p-1 hover:bg-yellow-400'
                        />{' '}
                        section.
                      </p>
                      <div className='pt-10 pb-28 '>
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
              </div>
              <div class='flex-none px-2'></div>
            </div>
            <Container>
              <div className='content '>
                <div>
                  <PortfolioList />
                </div>
              </div>
            </Container>
            s
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
