import React from 'react';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Usecaseheader from '@/components/molecules/usecaseheader';
import Layout from '@/components/layout';
import ReactPlayer from 'react-player';
import Testimonial from '@/components/molecules/testimonial';

import { useRef } from 'react';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

//Usecase Images
import Image from 'next/image';
import Hero from './cibc_nab/watch.webp';
import Avatar from '../../assets/global/avatar_beon.png';
import Featuremindmap from '../../pages/usecases/beon/beon_feature_mindmap.png';
import Evolution1 from '../../pages/usecases/beon/evolution.png';

const projectname = 'BEON Mobile App';
const title = 'Be on point, Beon  your A Game, Be on when it matters most.';
const subtitle =
  'Creating a digital foundation for BEON to maximize a Mentor’s ability to efficiently monitor their clients’ progress while introducing the ACT Model including understanding its methodology, development and ongoing management to their clients.';
const avatar = Avatar;
const hero = Hero;
const heroalt = 'BEON Mobile App';

function WithoutImage() {
  return (
    <div>
      <h1 className='heading1'>{title}</h1>

      <Image
        alt='TD round logo'
        src={avatar}
        layout='intrinsic'
        objectFit='cover'
        width={64}
        height={64}
      />
      <h2 className='heading2'>{subtitle}</h2>
      <div className='grid grid-cols-4 gap-12'>
        <div>
          <p className='pt-2 font-bold'>Project Type</p>
          <ul>
            <li>
              New client proposal pitch work, Preliminary concepts and designs
            </li>
          </ul>
        </div>
        <div>
          <p className='pt-2 font-bold'>My Role</p>
          <ul>
            <li>UX and UI Design Strategy Usability Testing Research</li>
          </ul>
        </div>
        <div>
          <p className='pt-2 font-bold'>Duration</p>
          <ul>
            <li>4-6 months</li>
          </ul>
        </div>
        <div>
          <p className='pt-2 font-bold'>Tools</p>
          <ul>
            <li>Figma</li>
            <li>Protopie</li>
            <li>Invision Studio</li>
          </ul>
        </div>
      </div>

      <div className='pt-12 pb-12 mx-auto text-center'></div>
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
              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <WithoutImage />

                <div className='pb-12 mx-auto '>
                  <span className='heading3'>Ideation</span>
                  <span className='subheading'>The Design Problem</span>
                </div>

                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    01 - The companion mobile app, which would allow users to
                    keep track of their events, create and track their ACT
                    models, review and submit their performance scores to their
                    mentors, and to keep up to date with any course material.
                  </p>

                  <p className='pright'>
                    02 - The administrative mentor side that would allow for
                    managing teams, mentoring events and providing feedback to
                    the user. (not included in this case study).
                  </p>
                </div>

                <Image
                  alt='Beon App feature mind map'
                  src={Featuremindmap}
                  layout='responsive'
                  objectFit='cover'
                />
                <Image
                  alt='Beon App feature mind map'
                  src={Evolution1}
                  layout='responsive'
                  objectFit='cover'
                />
                <div className='md:grid md:grid-cols-3'>
                  <Testimonial
                    quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                  />

                  <Testimonial
                    quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                  />

                  <Testimonial
                    quote="I'm an existing customer, why do I have to fill out a
                      long application form."
                  />
                </div>
                <div className='pt-20 mx-auto mt-20'>
                  <span className='heading3'>The evolution of banking</span>
                  <span className='subheading'>Research & Planning</span>
                </div>

                <h3 className='heading3'>Dashboard card design updates</h3>
              </div>
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
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
