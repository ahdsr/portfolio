import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Testimonial from '@/components/molecules/testimonial';

//Usecase Images
import Image from 'next/image';
import Hero from './cibc_accountopen/cibc_accounts_open_hero.png';
import CIBCLogo from '../../assets/global/avatar_cibc.webp';
import designupdate1 from './cibc_accountopen/cibc_accounts_open_01.webp';
import designupdate2 from './cibc_accountopen/cibc_accounts_open_02.webp';
import designupdate3 from './cibc_accountopen/cibc_accounts_open_03.webp';
import designupdate4 from './cibc_accountopen/cibc_accounts_open_04.webp';
import designupdate5 from './cibc_accountopen/cibc_accounts_error_01.webp';
import designupdate6 from './cibc_accountopen/cibc_accounts_wait01.webp';
import designupdate7 from './cibc_accountopen/cibc_accounts_wait02.webp';
import designupdate8 from './cibc_accountopen/cibc_accounts_wait03.webp';
import designupdate9 from './cibc_accountopen/cibc_accounts_error_02.webp';
import designupdate10 from './cibc_accountopen/cibc_accounts_open_05.webp';
import designupdate11 from './cibc_accountopen/cibc_accounts_open_06.webp';
import designupdate12 from './cibc_accountopen/cibc_accounts_open_07.webp';
import designupdate13 from './cibc_accountopen/cibc_accounts_open_08.webp';
import designupdate14 from './cibc_accountopen/cibc_accounts_open_09.webp';
import designupdate15 from './cibc_accountopen/cibc_accounts_open_10.webp';
import designupdate16 from './cibc_accountopen/cibc_accounts_open_11.webp';
import choosebank from './cibc_accountopen/choose_bank.png';
import choosecredit from './cibc_accountopen/choose_credit.png';

const name =
  'One source of responsive application forms accessed in web and native';
const description =
  'During the life cycle of the CIBC Native Mobile Banking app, one of the gaps that presented itself was the ability to apply for product in the native environment. This project illustrates an intelligent way to save cost, and utilize designs that can be leveraged irregardless of your platform and technology base. ';

export default function Resume() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 3,
  };
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
                <div className='pb-12 mx-auto text-center'>
                  <Image
                    alt='TD round logo'
                    src={CIBCLogo}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                  <p className='smalltext'>CIBC Accounts Open</p>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    marginTop: '80px',
                  }}
                >
                  <Image
                    alt='Mountains'
                    src={Hero}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <div className='pb-12 mx-auto text-center'>
                  <span className='heading3'>One tech stack</span>
                  <span className='uppercase subheading'>
                    The Design Problem
                  </span>
                </div>
                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    Designing a responsive web page, app or anything consumed on
                    multiple device screen sizes is not by an means an easy
                    feat. What makes it more challenging however is when you try
                    to use technologies normally reserved for native devices and
                    applying them to the web experience.
                  </p>

                  <p className='pright'>
                    Identifying where users start the application journey was
                    number one.
                  </p>
                </div>

                <div className='pt-20 mx-auto mt-20 text-center'>
                  <div className='pb-12 mx-auto text-center'>
                    <span className='heading3'>User flow deep dive</span>
                    <span className='uppercase subheading'>
                      Research and planning
                    </span>
                  </div>
                </div>

                <div className='flex flex-row mx-auto'>
                  <div className='w-1/2'>
                    <Image
                      alt='Wireframe of choose a bank account'
                      src={choosebank}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='w-1/2'>
                    <Image
                      alt='Wireframe of choose a credit card'
                      src={choosecredit}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                </div>

                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    The bank account open user journey was defined based on a
                    deep dive into the existing web applications and it formed a
                    foundation for creating an improved journey. It allowed the
                    design team to identify user pain points.
                  </p>

                  <p className='pright'>
                    Identifying where users start the application journey was
                    number one.
                  </p>
                </div>

                <div className='pt-20 mx-auto mt-20 text-center'>
                  <span className='text-2xl font-bold tracking-tight text-center text-green-700'>
                    Customer pain points
                  </span>
                </div>
                <div className='flex flex-row justify-start'>
                  <div className='flex-1'>
                    <Testimonial
                      quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                    />
                    <FancyImage
                      src={designupdate4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <p className='ml-8 mr-8 caption'>
                      Giving users the ability to sign-on at the beginning of
                      the application flow, allowed us to pull in all their
                      personal information on file. The added bonus of
                      addressing this issue served as a way for the client to
                      also confirm the info on file was accurate and current.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <Testimonial
                      quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                    />
                    <FancyImage
                      src={designupdate16}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                  </div>
                  <div className='flex-1'>
                    <Testimonial
                      quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                    />
                    <FancyImage
                      src={designupdate4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <p className='ml-8 mr-8 caption'>
                      Giving users the ability to sign-on at the beginning of
                      the application flow, allowed us to pull in all their
                      personal information on file. The added bonus of
                      addressing this issue served as a way for the client to
                      also confirm the info on file was accurate and current.
                    </p>
                  </div>
                </div>
              </div>

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <div className='pb-12 mx-auto text-center'>
                  <span className='heading3'>End to end solution</span>
                  <span className='uppercase subheading'>
                    High resolution screens
                  </span>
                </div>

                <div className='py-12'>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* array of JSX items */}

                    <FancyImage
                      src={designupdate1}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />

                    <FancyImage
                      src={designupdate2}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate3}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />

                    <FancyImage
                      src={designupdate4}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />

                    <FancyImage
                      src={designupdate6}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate7}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate8}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate9}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate10}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate11}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                      layout='intrinsic'
                    />
                    <FancyImage
                      src={designupdate12}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate13}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate14}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate15}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                    <FancyImage
                      src={designupdate16}
                      transitionDuration={300}
                      zoomMargin={40}
                      overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    />
                  </Masonry>
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
