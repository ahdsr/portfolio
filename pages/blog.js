import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Container from '@/components/container';

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
                      <li className='inline-block underline bg-yellow-200  m-1'>
                        Site launch
                      </li>
                      <li className='inline-block underline bg-yellow-200  m-1'>
                        Cyberpunk 2077 inspired atmospherics
                      </li>
                      <li className='inline-block underline bg-yellow-200  m-1'>
                        Some other post
                      </li>
                    </ul>
                  </div>

                  <div className='mb-4 md:w-3/4 overflow-hidden md:pl-10'>
                    <div className='content mb-20'>
                      <div className='content'>
                        <h3>Site launch</h3>

                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <div className='player-wrapper '>
                          <ReactPlayer
                            url='https://youtu.be/M9tD4Z6FebY'
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls={true}
                          />
                        </div>
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>

                        <p>
                          Values determine the future. As a designer, I've been
                          exposed to a great number of employers, teams and
                          projects. I approach all my projects, regardless of
                          the project size, with a kick-off discovery session to
                          understand my clients vision, the business objectives
                          and what the user data is indicating. I've trained
                          myself to make a quick usability test the moment I
                          open a new website or an app, so this comes almost for
                          free during our first meeting.
                        </p>
                        <p>
                          Values determine the future. As a designer, I've been
                          exposed to a great number of employers, teams and
                          projects. I approach all my projects, regardless of
                          the project size, with a kick-off discovery session to
                          understand my clients vision, the business objectives
                          and what the user data is indicating. I've trained
                          myself to make a quick usability test the moment I
                          open a new website or an app, so this comes almost for
                          free during our first meeting.
                        </p>
                      </div>

                      <div className='content mt-20 mb-20'>
                        <h3>Cyberpunk 2077 inspired atmospherics</h3>
                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <div className='player-wrapper '>
                          <ReactPlayer
                            url='https://www.youtube.com/watch?v=xqwukUxdssI'
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls={true}
                          />
                        </div>
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>

                        <p>
                          Values determine the future. As a designer, I've been
                          exposed to a great number of employers, teams and
                          projects. I approach all my projects, regardless of
                          the project size, with a kick-off discovery session to
                          understand my clients vision, the business objectives
                          and what the user data is indicating. I've trained
                          myself to make a quick usability test the moment I
                          open a new website or an app, so this comes almost for
                          free during our first meeting.
                        </p>
                        <p>
                          Values determine the future. As a designer, I've been
                          exposed to a great number of employers, teams and
                          projects. I approach all my projects, regardless of
                          the project size, with a kick-off discovery session to
                          understand my clients vision, the business objectives
                          and what the user data is indicating. I've trained
                          myself to make a quick usability test the moment I
                          open a new website or an app, so this comes almost for
                          free during our first meeting.
                        </p>
                      </div>

                      <div className='content mt-10 mb-20'>
                        <h3>Some other post</h3>
                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <img alt='Mountains' src={PostImage1} />
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>

                        <p>
                          Values determine the future. As a designer, I've been
                          exposed to a great number of employers, teams and
                          projects. I approach all my projects, regardless of
                          the project size, with a kick-off discovery session to
                          understand my clients vision, the business objectives
                          and what the user data is indicating. I've trained
                          myself to make a quick usability test the moment I
                          open a new website or an app, so this comes almost for
                          free during our first meeting.
                        </p>
                      </div>

                      <div className='content mt-10'>
                        <h3>WFH</h3>
                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <div className='player-wrapper '>
                          <ReactPlayer
                            url='https://youtu.be/oCMQEDL_iBU'
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls={true}
                          />
                        </div>
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>
                        <p>
                          Working from home, is what I be doing. Testing this
                          blog is what I be doing. Looking for work, is what I
                          be doing.
                        </p>
                      </div>

                      <div className='content mt-10 mb-20'>
                        <h3>
                          Playing with the drone again, at a car meet in
                          Brampton
                        </h3>
                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <div className='player-wrapper '>
                          <ReactPlayer
                            url='https://youtu.be/kAwpW7kcjBY'
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls={true}
                          />
                        </div>
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>
                        <p>
                          Edited to look like it was shot in wide screen.
                          Unfortunatley I had to leave early before all the cars
                          got setup. Actually I didn't mind as flying the drone
                          over top of some of these vehicles were making my
                          palms sweat.
                        </p>
                      </div>

                      <div className='content mt-10 mb-20'>
                        <h3>
                          Some more ariel footage for my brother in law's
                          company Hodgee Films
                        </h3>
                        <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
                          March 11, 2020
                        </span>
                        <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
                        <div className='player-wrapper '>
                          <ReactPlayer
                            url='https://youtu.be/NgwhTrjqdac'
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls={true}
                          />
                        </div>
                        <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>
                        <p>
                          Fun times editing this one. It was put together last
                          minute to show Brent the kind of quality we can get
                          out of the DJI Phantom Pro. Just like ot looks, a lot
                          off random flying session to string this together but
                          in the end I was happy with it. Happy enough that a
                          few weeks later we went to shoot some ariels for his
                          upcoming special Freaks and Geeks: The Documentary.
                          The Nolan fan that I am, could help myself to throw
                          some score by Zimmerman.
                        </p>
                      </div>
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
