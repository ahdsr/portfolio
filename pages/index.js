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
import Me from '../assets/global/me.webp';
import LogoGroup from '../assets/global/logogroup.webp';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='bg-customgray'>
            {/*  Hero */}

            <div className='pb-24 mx-auto lg:pt-20 hero md:pb-32 lg:pb-60 md:pb-30 max-w-screen-2xl '>
              <div className='flex flex-row px-8 pt-32 max-w-7xl md:pt-36 lg:pt-40 sm:mx-auto md:mx-auto lg:mx-auto lg:px-12'>
                <div className='pt-8 mx-auto grow max-w-7xl'>
                  <div className='mx-auto md:flex'>
                    <div className='px-0 hero item w-fit sm:px-0'>
                      <h1 className='tagline'>
                        Hi, I’m Lucas a{' '}
                        <span className='text-yellow-500'>UX & UI</span>{' '}
                        designer based out of Toronto.
                      </h1>
                      <p>Things I enjoy:</p>
                      <ul className='points'>
                        <li>A tough design problem</li>
                        <li>Subtle animation & motion</li>
                        <li>Design driven by science and data</li>
                        <li>Complex design systems</li>
                        <li>Transparent, constructive feedback</li>
                        <li>Selling a solution</li>
                      </ul>
                    </div>
                    <div className='w-64 mx-auto mt-10 text-center item md:w-96'>
                      <Image alt='Lucas' src={Me} layout='responsive' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Blue Section */}
            <div className='bg-white'>
              <div className='flex flex-row max-w-full px-8 pt-20 mx-auto text-white md:pt-20 line bg-customblue2 rounded-tr-huge lg:px-12'>
                <div className='px-0 pt-10 mx-auto grow max-w-7xl sm:pt-20 sm:pb-24 sm:px-4 md:px-4 xl:px-0 '>
                  <div className='z-0 md:pb-24 rounded-tr-huge'>
                    <div className='mx-auto md:flex max-w-screen-2xl'>
                      <div className='h-auto pl-0 homepage md:item md:w-1/2 content md:pr-16 '>
                        <h1>
                          Research, design, prototype, test and evaluate ↻{' '}
                        </h1>
                        <div className='pt-4 pb-12 md:pt-10 opacity-30'>
                          <Image
                            alt='Mountains'
                            src={LogoGroup}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='h-auto pb-32 pr-0 homepage md:item md:w-1/2 content lg:pr-4 md:pb-4 lg:pb-8'>
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
                            destination='/portfolio2'
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
              </div>
            </div>

            {/*  Usecases */}
            <Container>
              <div className='relative z-40 content'>
                <div>
                  <PortfolioList />
                </div>
              </div>
            </Container>

            {/*  Bottom */}
            <div className='flex flex-row max-w-full pt-24 mx-auto -mt-40 bg-gradient-to-bl bg-slate-100 rounded-tr-large'>
              <div className='flex-none px-2'></div>
              <div className='px-0 mx-auto mt-20 grow max-w-7xl md:mt-0 sm:px-4 md:px-4 xl:px-12'>
                <div className='px-2 pb-12 md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 rounded-tr-huge'>
                  <div className='flex-none w-8 lg:w-12'></div>

                  <div className='mx-auto md:flex max-w-screen-2xl '>
                    <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
                      <h4>Experience</h4>
                      <p>
                        I’ve got over 12 years of experience working in web and
                        native mobile design
                      </p>
                    </div>
                    <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
                      <h4>The Process</h4>
                      <p>
                        I enjoy the design process and understand what it means
                        to be on a team
                      </p>
                    </div>
                    <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
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
