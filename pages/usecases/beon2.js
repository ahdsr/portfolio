import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Brief from '@/components/molecules/brief';
import ReactPlayer from 'react-player';

//Usecase Images
import Image from 'next/image';
import BEON from '../../assets/global/avatar_beon.png';
import test from '../../assets/3drenders/pixel6.png';
import Featuremindmap from '../../pages/usecases/beon/beon_feature_mindmap.png';

export default function TDDashboard() {
  const restaurant =
    'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80';
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-12 mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-customblue'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>
                    Be on point, Beon your A Game, Be on when it matters most.
                  </h1>
                  <div className='summary'>
                    Creating a digital foundation for BEON to maximize a
                    Mentor’s ability to efficiently monitor their clients’
                    progress while introducing the ACT Model including
                    understanding its methodology, development and ongoing
                    management to their clients. Creating a digital foundation
                    for BEON to maximize a Mentor’s ability to efficiently
                    monitor their clients’ progress while introducing the ACT
                    Model including understanding its methodology, development
                    and ongoing management to their clients.
                  </div>
                </div>
              </section>
              <section className='mx-auto my-20 xl:px-6 xl:max-w-7xl'>
                {/* <Image alt='Mountains' src={Evolution} layout='responsive' /> */}
              </section>

              <section className='px-8 pb-12 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <div className='absolute -mt-28'>
                  <Image
                    alt='TD round logo'
                    src={BEON}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                </div>
                <h2>Overview</h2>
                <p>
                  Creating a digital foundation for BEON to maximize a Mentor’s
                  ability to efficiently monitor their clients’ progress while
                  introducing the ACT Model including understanding its
                  methodology, development and ongoing management to their
                  clients.
                </p>
              </section>

              <Brief
                projectb1='Mobile native'
                projectb2=''
                roleb1='UX Manager'
                roleb2='UX Lead'
                duration='5 days'
                toolsb1='Sketch'
                toolsb2='Invision Studio'
                toolsb3=''
              />

              <section className='pb-24'>
                <div className='px-8 mx-auto my-8 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h2>Ideation - The Design Problem</h2>
                  <p className='py-4'>
                    01 - The companion mobile app, which would allow users to
                    keep track of their events, create and track their ACT
                    models, review and submit their performance scores to their
                    mentors, and to keep up to date with any course material.
                  </p>

                  <p className='py-4'>
                    02 - The administrative mentor side that would allow for
                    managing teams, mentoring events and providing feedback to
                    the user. (not included in this case study).
                  </p>

                  {/*   <FancyImage
                  src={FeatureSet}
                  transitionDuration={300}
                  zoomMargin={80}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                /> */}
                </div>
              </section>

              <Image
                alt='Beon App feature mind map'
                src={Featuremindmap}
                layout='responsive'
                objectFit='cover'
              />

              <Image
                alt='Mountains'
                src={test}
                layout='responsive'
                objectFit='cover'
              />

              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=tyS0S1DWB2Y'
                  width='100%'
                  height='100%'
                  controls={true}
                  muted={true}
                />
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
