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

const name = 'Product & Native App design for TD ';
const description =
  'The queue essentially is a list of all Elements customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase '>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
                <h1 className='heading1'>{name}</h1>
                <h2 className='heading2'>{description}</h2>
                <div className='player-wrapper '>
                  <div
                    className=''
                    style={{
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

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <h3 className='heading3'>The design problem</h3>
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
