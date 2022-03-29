import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import ReactPlayer from 'react-player';

//Icons
import { HiOutlineHeart } from 'react-icons/hi';
import { HiShare } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import { HiChat } from 'react-icons/hi';

//blog2 Images
import Image from 'next/image';
const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const username = 'Lucas C';
const profile = 'Admin';
const profilePhoto =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'linear' }}
        >
          <m.main variants={fade} className='pb-10 bg-slate-50'>
            {/*    BLOG POST #1 */}
            <div className='mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='pb-10'>
                <div className='px-5 pt-6 mx-auto mt-16'>
                  <div className='mb-4 text-lg font-bold tracking-tight text-slate-900 text-opacity-80'>
                    Electric Avenue, bottom drawer
                  </div>
                  <div className='flex items-start'>
                    <div className='inline-flex flex-shrink-0 rounded-full'>
                      <img
                        className='w-12 h-12 rounded-full'
                        src={profilePhoto}
                        alt=''
                      />
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-slate-700'>
                        {username}
                      </div>
                      <div className='text-sm font-light text-slate-800 text-opacity-90'>
                        {profile}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row items-center justify-center w-full h-12 mx-auto mt-6 mb-4'>
                    <div className='w-1/2'>
                      <span className='relative inline-block'>
                        <HiChat className='p-2 border rounded-md w-9 h-9 text-slate-800 border-slate-800 border-opacity-40 hover:bg-slate-800 hover:border-slate-800' />
                        <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400'>
                          7
                        </span>
                      </span>
                    </div>
                    <div className='flex flex-row justify-end w-1/2 space-x-2 justify-items-center'>
                      <HiOutlineHeart className='p-2 border rounded-md w-9 h-9 text-slate-800 border-slate-800 border-opacity-40 hover:bg-slate-800 hover:border-slate-800' />
                      <HiShare className='p-2 border rounded-md w-9 h-9 text-slate-800 border-slate-800 border-opacity-40 hover:bg-slate-800 hover:border-slate-800' />
                      <HiInformationCircle className='p-2 border rounded-md w-9 h-9 text-slate-800 border-slate-800 border-opacity-40 hover:bg-slate-800 hover:border-slate-800' />
                    </div>
                  </div>
                </div>
                <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url='https://lucasczuchraj.com.s218761.gridserver.com/Videos/AnimationTest.mp4'
                    loop={true}
                    controls={true}
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800'>
                  <div className='mb-4 text-lg font-bold tracking-tight text-slate-900 text-opacity-80'>
                    Electric Avenue, bottom drawer
                  </div>
                  <p>
                    Images are powerful assets that are used in the majority of
                    digital products today. Being able to organize photos is
                    critical to a user's experience in apps that emphasize
                    imagery.
                  </p>
                  <p>
                    You will be able to demonstrate how a user can select and
                    deselect photos while keeping a numerical order in this
                    demonstration.
                  </p>
                  <p>
                    This tutorial introduces some sequential logic, which makes
                    it very intellectually stimulating! You'll be able to master
                    randomness by using components, variables, and formulas to
                    bring order to photos that can be selected and deselected.
                  </p>
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
