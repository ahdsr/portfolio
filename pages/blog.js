import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Container from '@/components/container';
import VideoPost from '@/components/blogvideopost';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

import ReactPlayer from 'react-player/lazy';
import ImagePost from '@/components/blogimagepost';

import testImage from '../assets/global/placeholder.png';
//Blog Images
import Image from 'next/image';
const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <Navbar />

      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-20'>
            <Container>
              <div className='content mt-40 '>
                <div className='mx-auto max-w-7xl md:flex md:flex-wrap overflow-hidden mt-32'>
                  <div className='content mb-4 md:w-1/4 overflow-hidden md:pr-10'>
                    <h1>Blog</h1>
                    <ul>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        Site launch
                      </li>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        Cyberpunk 2077 inspired atmospherics
                      </li>

                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        WFH
                      </li>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        Playing with the drone again, at a car meet in Brampton
                      </li>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        Some more ariel footage for my brother in law's company
                        Hodge Films
                      </li>
                    </ul>
                  </div>

                  <div className='mb-4 md:w-3/4 overflow-hidden md:pl-10'>
                    <div className='content mb-20'>
                      <VideoPost
                        id='1'
                        title='Site launch'
                        date=' March 11, 2020'
                        url='https://youtu.be/M9tD4Z6FebY'
                        p1={
                          "Values determine the future. As a designer, Ive been exposed to a great number of employers teams and projects. I approach all my projects regardless of the project size, with a kick-off discovery session to understand my clients vision, the business objectives and what the user data is indicating. I've trained myself to make a quick usability test the moment I open a new website or an app so this comes almost for free during our first meeting."
                        }
                        p2=''
                        p3=''
                        p4=''
                      />

                      <ImagePost
                        title='Site launch'
                        date='March 11, 2020'
                        url={PostImage1}
                        src={testImage}
                        p1={
                          "Values determine the future. As a designer, Ive been exposed to a great number of employers teams and projects. I approach all my projects regardless of the project size, with a kick-off discovery session to understand my clients vision, the business objectives and what the user data is indicating. I've trained myself to make a quick usability test the moment I open a new website or an app so this comes almost for free during our first meeting."
                        }
                        p2={
                          "Values determine the future. As a designer, Ive been exposed to a great number of employers teams and projects. I approach all my projects regardless of the project size, with a kick-off discovery session to understand my clients vision, the business objectives and what the user data is indicating. I've trained myself to make a quick usability test the moment I open a new website or an app so this comes almost for free during our first meeting."
                        }
                        p3={
                          "I've trained myself to make a quick usability test the moment I open a new website or an app so this comes almost for free during our first meeting."
                        }
                        p4={
                          'Values determine the future. As a designer, Ive been exposed to a great number of employers teams and projects.'
                        }
                      />

                      <VideoPost
                        id='1'
                        title='Cyberpunk 2077 inspired atmospherics'
                        date='March 9, 2020'
                        url='https://www.youtube.com/watch?v=xqwukUxdssI'
                        p1={
                          "Values determine the future. As a designer, Ive been exposed to a great number of employers teams and projects. I approach all my projects regardless of the project size, with a kick-off discovery session to understand my clients vision, the business objectives and what the user data is indicating. I've trained myself to make a quick usability test the moment I open a new website or an app so this comes almost for free during our first meeting."
                        }
                        p2=''
                        p3=''
                        p4=''
                      />

                      <VideoPost
                        id='1'
                        title='Working from home is fun aint it?'
                        date='March 8, 2020'
                        url='https://youtu.be/oCMQEDL_iBU'
                        p1='Working from home, is what I be doing. Testing this
                        blog is what I be doing. Looking for work, is what I
                        be doing.'
                        p2=''
                        p3=''
                        p4=''
                      />

                      <VideoPost
                        id='1'
                        title='  Playing with the drone again, at a car meet in
                        Brampton'
                        date='March 8, 2020'
                        url='https://youtu.be/kAwpW7kcjBY'
                        p1='Edited to look like it was shot in wide screen.
                        Unfortunately I had to leave early before all the cars
                        got setup. Actually I didnt mind as flying the drone
                        over top of some of these vehicles were making my
                        palms sweat.'
                        p2=''
                        p3=''
                        p4=''
                      />

                      <VideoPost
                        id='1'
                        title='Some more ariel footage for my brother in laws
                        company Hodge Films'
                        date='March 6, 2020'
                        url='https://youtu.be/NgwhTrjqdac'
                        p1=' Fun times editing this one. It was put together last
                        minute to show Brent the kind of quality we can get
                        out of the DJI Phantom Pro. Just like ot looks, a lot
                        off random flying session to string this together but
                        in the end I was happy with it. Happy enough that a
                        few weeks later we went to shoot some ariels for his
                        upcoming special Freaks and Geeks: The Documentary.
                        The Nolan fan that I am, could help myself to throw
                        some score by Zimmerman.'
                        p2=''
                        p3=''
                        p4=''
                      />
                    </div>
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
