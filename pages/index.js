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
import Me from '../assets/global/me.png';
import LeftLines from '../assets/global/leftLines.png';
import LogoGroup from '../assets/global/logogroup.png';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='bg-white'>
            {/*  Hero */}

            <div className='mx-auto pb-20 md:pb-30 max-w-screen-2xl '>
              <div className='flex flex-row max-w-7xl mt-32 md:mt-36 lg:mt-40 mx-2 sm:mx-auto md:mx-auto lg:mx-auto'>
                <div className='flex-none mx-2'>
                  <div className='block w-3 h-12 mt-60'>
                    <Image
                      alt='Mountains'
                      src={LeftLines}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='grow mx-auto max-w-7xl pt-8'>
                  <div className='md:flex mx-auto'>
                    <div className='hero item w-fit mx-0 sm:px-8 '>
                      <h1>
                        Hi, I’m Lucas a{' '}
                        <span className='text-yellow-500'>UX & UI</span>{' '}
                        designer based out of Toronto.
                      </h1>
                      <h4>Things I enjoy:</h4>
                      <ul>
                        <li>A tough design problem</li>
                        <li>Subtle animation & motion</li>
                        <li>Design driven by science and data</li>
                        <li>Complex design systems</li>
                        <li>Transparent, constructive feedback</li>
                        <li>Selling a solution</li>
                      </ul>
                    </div>
                    <div className='item mx-auto mt-10 w-56 md:w-96 text-center lg:mr-8'>
                      <Image alt='Lucas' src={Me} layout='responsive' />
                    </div>
                  </div>
                </div>
                <div className='flex-none mx-2'>
                  <div className='block w-3 h-12 mt-60 opacity-0'>
                    <Image
                      alt='Mountains'
                      src={LeftLines}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*  Blue Section */}
            <div className='bg-white'>
              <div className='flex flex-row max-w-full mx-auto pt-20 md:pt-20 bg-gradient-to-bl from-customblue via-customblue to-customblue2 text-white rounded-tr-huge'>
                <div className='flex-none w-8 lg:w-12 '></div>
                <div className='grow mx-auto max-w-7xl pt-10 sm:pt-20 sm:pb-24 px-0 sm:px-4 md:px-4 xl:px-0 '>
                  <div className='md:pb-24 z-0 rounded-tr-huge'>
                    <div className='md:flex max-w-screen-2xl mx-auto'>
                      <div className='homepage md:item md:w-1/2 h-auto content md:pr-16 pl-0 lg:pl-4 '>
                        <h1>
                          Research, design, prototype, test and evaluate ↻{' '}
                        </h1>
                        <div className='pt-4 pb-12 md:pt-10 '>
                          <Image
                            alt='Mountains'
                            src={LogoGroup}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='homepage md:item md:w-1/2 h-auto content pr-0 lg:pr-4 pb-32 md:pb-4 lg:pb-8'>
                        <p>
                          As a designer, I've been lucky enough to be exposed to
                          a vast number of employers, teams and projects. Each
                          of them have given me a rewarding learning experience.
                        </p>
                        <p>
                          I approach all my projects, regardless of the project
                          size with a a discovery session to understand my
                          client’s needs, the business objectives and what the
                          user research is indicating.
                        </p>
                        <p>
                          I help my clients improve their usability experience
                          and provide them with a product we can be mutually
                          proud of.
                        </p>
                        <p>
                          Below you'll find a few selected use case studies that
                          go into a detailed design process. You can also view
                          other work in the{' '}
                          <FancyLink
                            destination='/portfolio'
                            a11yText='portfolio'
                            label='portfolio'
                            extraClasses=' underline bg-black bg-opacity-30 p-1 hover:bg-yellow-400'
                          />{' '}
                          section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-n flex-none w-8 lg:w-12'></div>
              </div>
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
            <div className='flex flex-row max-w-full mx-auto -mt-40 pt-24 bg-gradient-to-bl bg-customyellow rounded-tr-large'>
              <div className='flex-none px-2'></div>
              <div className='grow mx-auto max-w-screen-2xl mt-20 md:mt-0 px-0 sm:px-4 md:px-4 xl:px-12'>
                <div className='hero pb-12  md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 rounded-tr-huge px-2'>
                  <div className='flex-none w-8 lg:w-12'></div>
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
                <div className='flex-none w-8 lg:w-12'></div>
              </div>
              <div className='flex-none px-2'></div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
