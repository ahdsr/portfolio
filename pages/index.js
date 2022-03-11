import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyLink from '@/components/fancyLink';
import PortfolioList from '@/components/portfoliolist';

//Imported Images
import Image from 'next/image';
import Me from '../assets/global/me.jpg';
import LeftLines from '../assets/global/leftLines.png';
import LogoGroup from '../assets/global/logogroup.png';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade}>
            {/*  Hero */}
            <div class='flex flex-row mx-auto max-w-screen-2xl mt-32  md:mt-36 lg:mt-40'>
              <div class='flex-none w-8 lg:w-12'>
                <div className='block w-4 h-12 mt-64 mx-2'>
                  <Image
                    alt='Mountains'
                    src={LeftLines}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div class='grow mx-auto max-w-screen-2xl'>
                <div className='md:flex mx-auto px-0 md:px-2'>
                  <div className='hero md:item md:w-3/5 lg:w-4/5 xl:w-1/2 pr-2 md:pr-8   max-w-full'>
                    <h1>
                      Hi, I’m Lucas a{' '}
                      <span className='text-yellow-500'>UX & UI</span> designer
                      based out of Toronto.
                    </h1>
                    <h4>Things I enjoy:</h4>
                    <ul>
                      <li>A tough design problem</li>
                      <li>Subtle animation & motion</li>
                      <li>Transparent feedback</li>
                      <li>Complex design systems</li>
                      <li>Science and data</li>
                      <li>Selling a solution</li>
                    </ul>
                  </div>
                  <div className='item mx-auto mt-10 w-56 md:w-64 lg:w-80 text-center'>
                    <Image alt='Lucas' src={Me} layout='responsive' />
                  </div>
                </div>
              </div>
              <div class='flex-none w-8 lg:w-12'></div>
            </div>

            {/*  Blue Section */}
            <div class='flex flex-row max-w-full mx-auto mt-20 md:mt-40 bg-gradient-to-bl from-customblue via-customblue to-customblue2 text-white rounded-tr-huge'>
              <div class='flex-none w-8 lg:w-12'></div>
              <div class='grow mx-auto max-w-screen-2xl mt-20 md:mt-0 px-0 sm:px-4 md:px-4 xl:px-12'>
                <div className='md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 z-0 rounded-tr-huge'>
                  <div className='md:flex max-w-screen-2xl mx-auto'>
                    <div className='homepage md:item md:w-1/2 h-auto content md:pr-16'>
                      <h1>Research, design, prototype, test and evaluate ↻ </h1>
                      <p>
                        As a designer, I've been lucky enough to be exposed to a
                        vast number of employers, teams and projects. Each of
                        them have given me a rewarding learning experience.
                      </p>
                    </div>
                    <div className='homepage md:item md:w-1/2 h-auto content'>
                      <p>
                        I approach all my projects, regardless of the project
                        size with a a discovery session to understand my
                        client’s needs, the business objectives and what the
                        user research is indicating.
                      </p>
                      <p>
                        I help my clients improve their usability experience and
                        provide them with a product we can be mutually proud of.
                      </p>
                      <p>
                        Below you'll find selected use case studies that review
                        a detailed design process. You can also view other work
                        in the{' '}
                        <FancyLink
                          destination='/portfolio'
                          a11yText='portfolio'
                          label='portfolio'
                          extraClasses=' underline bg-black bg-opacity-30 p-1 hover:bg-yellow-400'
                        />{' '}
                        section.
                      </p>
                      <div className='pt-4 pb-28 md:pt-10 md:pb-28'>
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
              <div class='flex-n flex-none w-8 lg:w-12one'></div>
            </div>

            {/*  Usecases */}
            <Container>
              <div className='relative content z-40'>
                <div>
                  <PortfolioList />
                </div>
              </div>
            </Container>

            {/*  Bottom */}
            <div class='flex flex-row max-w-full mx-auto -mt-40 pt-24 bg-gradient-to-bl bg-customyellow rounded-tr-large'>
              <div class='flex-none px-2'></div>
              <div class='grow mx-auto max-w-screen-2xl mt-20 md:mt-0 px-0 sm:px-4 md:px-4 xl:px-12'>
                <div className='hero pb-12  md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 rounded-tr-huge px-2'>
                  <div class='flex-none w-8 lg:w-12'></div>
                  <h1>A few other things</h1>
                  <div className='md:flex max-w-screen-2xl mx-auto '>
                    <div className='hero md:item md:w-1/2 h-auto content md:pr-16'>
                      <h4>Experience</h4>
                      <p>
                        I’ve got over 12 years of experience working in web and
                        native mobile design
                      </p>
                    </div>
                    <div className='hero md:item md:w-1/2 h-auto content md:pr-16'>
                      <h4>The Process</h4>
                      <p>
                        I enjoy the design process and understand what it means
                        to be on a team
                      </p>
                    </div>
                    <div className='hero md:item md:w-1/2 h-auto content md:pr-16'>
                      <h4>Never stop learning</h4>
                      <p>It’s never to late to learn, discover and change</p>
                    </div>
                  </div>
                </div>
                <div class='flex-none w-8 lg:w-12'></div>
              </div>
              <div class='flex-none px-2'></div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
