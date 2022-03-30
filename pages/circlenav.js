import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import FancyLink from '@/components/fancyLink';
import Layout from '@/components/layout';
import Divider from '@/components/molecules/Divider';
import DividerAnim from '@/components/molecules/DividerAnim';
import TextAnim from '@/components/molecules/textAnim';
import ImageAnim from '@/components/molecules/imageAnim';

//Imported Images
import Image from 'next/image';
import Placeholder from '../assets/usecases/beon_hero.webp';

function CircleNav() {
  const containerRef = useRef(null);

  //
  const hero = {
    visible: { x: 0, y: [-1000, 50, 0] },
    hidden: { opacity: 0 },
  };

  return (
    <Layout>
      <NextSeo title='Home' />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          multiplier: 1,
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className=''>
                  <div className='bg-[#F6FAE2]'>
                    <div className='relative h-screen mx-auto md:px-20 lg:px-24 xl:px-36'>
                      <m.div animate={{ x: 0, y: 50 }}>
                        <FancyLink
                          destination='/figma'
                          a11yText='X'
                          label='X'
                          extraClasses='transition-all border-transparent text-white bg-customblue hover:border-yellow-500 hover:text-slate-200 inline-flex items-center px-3 py-2 border-t-2 text-sm font-regular uppercase'
                        />
                        <FancyLink
                          destination='/casestudy'
                          a11yText='Beon Performance'
                          label='Beon Performance'
                          extraClasses='text-4xl font-bold tracking-tight'
                        />
                      </m.div>
                    </div>
                  </div>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export default CircleNav;
