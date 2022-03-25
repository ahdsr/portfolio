import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import GetInTouch from '@/components/getintouch';
import { FocusTrap } from '@headlessui/react';

export default function Social() {
  const containerRef = useRef(null);

  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter'>
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-black'>
                <div className='px-8 py-64 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>Gave it up!</h1>
                  <div className='summary'>
                    It was a big waste of time - sorry.
                    <div className='mx-auto text-center summary'></div>
                  </div>
                </div>
              </section>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
