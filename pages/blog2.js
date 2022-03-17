import React from 'react';
import Layout from '@/components/layout';
import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

import VideoPost from '@/components/molecules/videoblogpost';
import ImagePost from '@/components/molecules/imagepost';

import image1 from '../assets/3drenders/city1.jpg';

export default function Blog() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='py-24 bg-white'>
            <div className='px-5 mx-auto mt-8 md:px-12 max-w-screen-2xl xl:max-w-screen-xl sm:pt-12'>
              <VideoPost
                postTitle='BEON Youtube react=player test'
                videoSource='https://www.youtube.com/watch?v=tyS0S1DWB2Y'
                date='3/11/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='222'
                p1='Brushing back up on some After Effects skills. Testing out the blog post with embedded video content from Youtube.'
                p2=''
                p3=''
              />

              <ImagePost
                postTitle='Testing fancy image post, when user clicks on post image they can see a full screen version.'
                imageSource={image1}
                date='3/13/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='1'
                p1="Since I started to develop, I'm discovering a lot of new and useful tools. One of them being Sizzy. This app lets you preview your project on a bunch of different devices all at the same time."
                p2=''
                p3=''
              />

              <VideoPost
                postTitle="So I've been working on this tune..."
                videoSource='https://youtu.be/xqwukUxdssI'
                date='3/8/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='2'
                p1="Since I started to develop, I'm discovering a lot of new and useful tools. One of them being Sizzy. This app lets you preview your project on a bunch of different devices all at the same time."
                p2=''
                p3=''
              />
              <VideoPost
                postTitle='Testing the site with Sizzy'
                videoSource='https://youtu.be/oCMQEDL_iBU'
                date='3/4/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='2'
                p1="Since I started to develop, I'm discovering a lot of new and useful tools. One of them being Sizzy. This app lets you preview your project on a bunch of different devices all at the same time."
                p2=''
                p3=''
              />
              <VideoPost
                postTitle='Playing with the drone again, at a car meet in
              Brampton'
                videoSource='https://youtu.be/zm1nonknpV4'
                date='3/4/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='2'
                p1="Edited to look like it was shot in wide screen.
              Unfortunately I had to leave early before all the cars
              got setup. Actually I didn't mind as flying the drone
              over top of some of these vehicles were making my
              palms sweat."
                p2=''
                p3=''
              />
              <VideoPost
                postTitle='Some more ariel footage for my brother in laws
              company Hodge Films'
                videoSource='https://youtu.be/NgwhTrjqdac'
                date='3/1/2022'
                postUser='Lucas C'
                postUserProfile='Admin'
                postUserImage='https://nypost.com/wp-content/uploads/sites/2/2022/02/astronaut-305.jpg?quality=90&strip=all&w=744'
                postCount='2'
                p1='Fun times editing this one. It was put together last
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
              />
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
