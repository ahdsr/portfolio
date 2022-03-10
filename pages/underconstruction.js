import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import ImagePost from '@/components/blogimagepost';
import UnderConstruction from '@/components/404';

import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// Molecules

import DateTag from '@/components/molecules/dateTag';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Resume' />
      <Navbar />

      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4  '>
            <Container>
              <div className='content mt-40 '>
                <div className='mx-auto max-w-7xl'>
                  <div className=' uppercase text-5xl font-black tracking-tight block mx-auto text-center '>
                    404
                  </div>
                  <div className='text-xl font-medium tracking-tight block mx-auto text-center '>
                    Page not found or under construction
                  </div>
                  <div className='block mx-auto w-48 h-48 sm:w-96 sm:h-96 text-center mt-20'>
                    <UnderConstruction />
                  </div>
                </div>
              </div>
            </Container>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}