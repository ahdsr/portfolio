import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import FancyLink from '@/components/fancyLink';
import Container from '@/components/container';
import VideoPost from '@/components/molecules/blogvideopost';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import ReactPlayer from 'react-player';

//Blog Images
import Image from 'next/image';
const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-20'>
            <Container>
              <div className='content pt-40 px-4'>
                <div className='mx-auto max-w-7xl md:flex md:flex-wrap overflow-hidden'>
                  <div className='mb-4 md:w-3/4 overflow-hidden'>
                    <div className='content mb-20'>
                      <h1>Blog</h1>
                      <div className='player-wrapper'>
                        <ReactPlayer
                          className='react-player'
                          url='https://lucasczuchraj.com/Videos/AnimationTest.mp4'
                          playing={true}
                          loop={true}
                          controls={true}
                          width='100%'
                          height='100%'
                        />
                      </div>
                      <VideoPost
                        id='1'
                        title='Testing the site with Sizzy'
                        date=' March 11, 2020'
                        url='https://youtu.be/oCMQEDL_iBU'
                        p1={
                          "Since I started to develop, I'm discovering a lot of new and useful tools. One of them being Sizzy. This app lets you preview your project on a bunch of different devices all at the same time."
                        }
                      />

                      <VideoPost
                        id='1'
                        title={"So I've been working on this tune... "}
                        date='March 9, 2020'
                        url='https://www.youtube.com/watch?v=xqwukUxdssI'
                      />

                      <VideoPost
                        id='1'
                        title='Playing with the drone again, at a car meet in
                        Brampton'
                        date='March 8, 2020'
                        url='https://youtu.be/zm1nonknpV4'
                        p1="Edited to look like it was shot in wide screen.
                        Unfortunately I had to leave early before all the cars
                        got setup. Actually I didn't mind as flying the drone
                        over top of some of these vehicles were making my
                        palms sweat."
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
                      />
                      <FancyLink
                        destination='http://www.hodgeefilms.com/'
                        a11yText='http://www.hodgeefilms.com//'
                        label='http://www.hodgeefilms.com/'
                        extraClasses='underline bg-yellow-200 hover:bg-yellow-400  p-1'
                      />
                    </div>
                  </div>
                  <div className='content mb-4 md:w-1/4 overflow-hidden md:pl-10'>
                    <ul>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        Testing the site with Sizzy
                      </li>
                      <li className='block w-fit underline bg-yellow-200 m-1'>
                        So I've been working on this tune...
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
                </div>
              </div>
            </Container>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
