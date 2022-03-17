import React from 'react';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Usecaseheader from '@/components/molecules/usecaseheader';
import Layout from '@/components/layout';
import ReactPlayer from 'react-player';

import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

//Usecase Images
import Image from 'next/image';
import Hero from './cibc_nab/watch.webp';
import Avatar from '../../assets/global/avatar_beon.png';
import designupdate1 from './cibc_accountopen/cibc_accounts_open_01.webp';

const projectname = 'BEON Performance Mobile App';
const title = 'Your best game, maximum performance.';
const subtitle =
  'To create the digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress. The client-facing native mobile app will be developed with a focus on introducing the ACT Model including understanding its methodology, development and ongoing management.';
const avatar = Avatar;
const hero = Hero;
const heroalt = 'BEON Performance Mobile App';

function WithoutImage() {
  return (
    <div>
      <h1 className='heading1'>{title}</h1>
      <h2 className='heading2'>{subtitle}</h2>
      <div className='pb-12 mx-auto text-center'>
        <Image
          alt='TD round logo'
          src={avatar}
          layout='intrinsic'
          objectFit='cover'
          width={64}
          height={64}
        />
        <p className='smalltext'>BEON Performance Mobile App</p>
      </div>
    </div>
  );
}

function WithImage() {
  return (
    <div>
      <Usecaseheader
        title={title}
        subtitle={subtitle}
        avatar={Avatar}
        hero={hero}
        heroalt={heroalt}
      />
    </div>
  );
}

export default function CICBnab() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 1,
    1100: 1,
    700: 1,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase '>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <WithoutImage />
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=tyS0S1DWB2Y'
                  width='100%'
                  height='100%'
                  controls='true'
                  muted='true'
                />
              </div>
              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <h3 className='heading3'>The design problem</h3>
                <p>
                  User engagement and attracting new users to your financial
                  institution is not a simple challenge. Canadian banks, and
                  banks in general have very similar offerings at the end of the
                  day - so what can we do to make TD stand out? How do we
                </p>

                <h3 className='heading3'>BEON all screens</h3>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
