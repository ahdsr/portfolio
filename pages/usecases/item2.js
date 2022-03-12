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
import Image1 from '../../assets/global/placeholder.png';
import Placeholder from '../../assets/usecases/td.jpg';

const username = 'Lucas C';
const profile = 'Admin';
const profilePhoto =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const name =
  'Integrating older location based functionality the new mobile dashboard';
const description =
  'The queue essentially is a list of all Elements customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-10 bg-slate-50 '>
            {/*    BLOG POST #1 */}
            <div className='pb-10'>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://lucasczuchraj.com/Videos/AnimationTest.mp4'
                  loop={true}
                  controls={true}
                  width='100%'
                  height='100%'
                />
              </div>
              <div className='px-5 pt-6 mx-auto mt-4 '>
                <div className='mb-4 text-3xl font-bold tracking-tight text-customblue'>
                  {name}
                </div>
                <div className='mb-4 text-lg font-bold tracking-tight text-slate-900 text-opacity-80'>
                  {description}
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

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800'>
                <div className='mb-4 text-lg font-bold tracking-tight text-slate-900 text-opacity-80'>
                  {name}
                </div>
                <p>
                  Due to the nature and planning of the project the ordering
                  platform was faced with a disjointed experience when it comes
                  to visualizing and working with large data sets. Not only did
                  the website suffer from inconsistent components, but with
                  every iteration, unique code was adding to the
                  inconsistencies. These data tables or queues were a major
                  functional component of the ordering system.
                </p>
                <p>
                  The queue essentially is a list of all Elements customer
                  orders. The tables list everything from the vehicle that is
                  being ordered, right down to the driver and insurance
                  information. When a piece of work is done by one team, the
                  order moves along until all teams have validated the data.
                </p>
              </div>

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800'>
                <div className='mb-4 text-lg font-bold tracking-tight text-slate-900 text-opacity-80'>
                  The design problem
                </div>
                <p>
                  Due to the nature and planning of the project the ordering
                  platform was faced with a disjointed experience when it comes
                  to visualizing and working with large data sets. Not only did
                  the website suffer from inconsistent components, but with
                  every iteration, unique code was adding to the
                  inconsistencies. These data tables or queues were a major
                  functional component of the ordering system.
                </p>
                <p>
                  The queue essentially is a list of all Elements customer
                  orders. The tables list everything from the vehicle that is
                  being ordered, right down to the driver and insurance
                  information. When a piece of work is done by one team, the
                  order moves along until all teams have validated the data.
                </p>
                <div
                  className='mt-20'
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '642px',
                  }}
                >
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
