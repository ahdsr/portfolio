import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import GetInTouch from '@/components/getintouch';

import ReactPlayer from 'react-player/lazy';

//Blog Images
import Image from 'next/image';
const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <Navbar />

      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-20'>
            <Container>
              <div className=' mx-auto max-w-7xl'>
                <div className=' fixed w-1/4 min-h-screen inset-0 '>
                  <h1 className='absolute bottom-0 left-0 p-20 text-white text-8xl'>
                    Benny
                    <br />
                    The Pup
                  </h1>
                  <img
                    src='https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80'
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='relative w-3/4 ml-auto'>
                  <div className='bg-red-200 h-screen flex justify-center items-center flex-col p-10'>
                    <h2 className='text-4xl mb-5'>Meet Benny</h2>
                    <p className='mb-5'>I was born 20 May 2020</p>
                  </div>
                  <div className='bg-red-50 h-screen flex justify-center items-center flex-col p-10'>
                    <h2 className='text-4xl mb-5'>I love food</h2>
                    <p className='mb-5'>Bones, Pallets, and more!</p>
                  </div>
                  <div className='bg-red-200 h-screen flex justify-center items-center flex-col p-10'>
                    <h2 className='text-4xl mb-5'>I love my humans</h2>
                    <p className='mb-5'>
                      My humans are super special to me, and I love them
                    </p>
                  </div>
                </div>
              </div>
            </Container>
            <GetInTouch />
          </m.main>

          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
