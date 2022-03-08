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

export default function About() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <Navbar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          scrollFromAnywhere: true,
          reloadOnContextChange: true,
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
                  <Container>
                    <div className='content max-w-3xl mb-4 mt-40'>
                      <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>
                        Work in progress...
                      </h1>
                      <h2>Coming soon</h2>

                      <p>Soon</p>
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
