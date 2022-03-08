import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbvar';
import Footer from '@/components/footer';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { Scrollbars } from 'rc-scrollbars';

//import Breadcrumb from '@/componsents/breadcrumb';

import PortfolioList from '@/components/portfoliolist';

//Imported Images
import Image from 'next/image';
import image1 from '../assets/global/main.jpg';

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
                <m.main variants={fade} className='pb-20'>
                  <div className=''>
                    <Image
                      alt='Mountains'
                      src={image1}
                      layout='responsive'
                      className=''
                    />
                  </div>
                  <div className='bg-black mx-0 sm:mx-6 md:mx-24 lg:mx-24 xl:mx-40 h-36 z-10 relative -mt-20 '>
                    <p className='text-white'>CLIENT LIST BOX</p>
                  </div>
                  <div className='pt-40 pb-36 md:pt-56 md:pb-44 bg-gradient-to-bl from-customblue via-customblue to-customblue text-white -mt-36 z-0  '>
                    <div className='md:flex mx-2 px-4 md:mx-24 lg:mx-24 xl:mx-40  '>
                      <div className='md:item md:w-1/2 h-auto content md:pr-16  '>
                        <h2>
                          Design creates culture. Culture shapes values. Values
                          determine the future.
                        </h2>
                      </div>
                      <div className='md:item md:w-1/2 h-auto content'>
                        <p>
                          As a designer, Ive been exposed to a great number of
                          employers, teams and projects.
                        </p>
                        <p>
                          I approach all my projects, regardless of the project
                          size, with a kick-off discovery session to understand
                          my clients vision, the business objectives and what
                          the user data is indicating. I’ve trained myself to
                          make a quick usability test the moment I open a new
                          website or an app, so this comes almost for free
                          during our first meeting.
                        </p>
                        <p>
                          I help companies to build and launch their products,
                          improve their UX and product performance or completely
                          re-brand their identity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Container>
                    <div className='content '>
                      <div>
                        <PortfolioList />
                      </div>

                      <h2>Some example content</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate.
                      </p>

                      <FancyLink
                        destination='/about'
                        a11yText='Navigate to the about page'
                        label='About Page'
                      />
                    </div>
                  </Container>
                </m.main>

                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
