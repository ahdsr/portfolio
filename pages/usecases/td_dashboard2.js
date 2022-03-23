import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';

import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

//Usecase Images
import Image from 'next/image';
import FeatureSet from './td_dashboard/feature_set.png';
import Brainstorming from './td_dashboard/brainstorming.png';
import TDLogo from '../../assets/global/avatar_td.webp';

const name = 'Modern data tables for processing vehicle orders';
const description =
  'The “queue” is essentially a list of all Element’s customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

export default function TDDashboard() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <div className=''>
              <section className='bg-customblue'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>
                    A smart, targeted & helpful front door to increase customer
                    engagement.
                  </h1>
                  <div className='summary'>
                    Canadian, well - most banks don't have a huge difference in
                    product offerings from one another. They deal with the
                    tested and true saving/chequings, mortgages and investment
                    accounts. So why would you join TD as a new customer? What's
                    stopping you to jump ship to a competitor? Let's have a look
                    below how I tackled these questions.
                  </div>
                </div>
              </section>
              <section className='mx-auto my-20 xl:px-6 xl:max-w-7xl'>
                {/* <Image alt='Mountains' src={Evolution} layout='responsive' /> */}
              </section>

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <div className='absolute -mt-28'>
                  <Image
                    alt='TD round logo'
                    src={TDLogo}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                </div>
                <h2>Overview</h2>
                <p>
                  Probably one of the most overused terms I've heard over the
                  last 6 years but love it or hate it, dashboards are a thing.
                </p>
                <p>
                  So what does a dashboard look like for mobile banking? It can
                  be a snapshot of your balances or investments. It can surface
                  common data you're used to seeing about your accounts, but it
                  can do more than that. Maybe it can surface data that's
                  normally cumbersome to find. Financial corporations, like the
                  bank aren't typically very nimble in releasing big updates -
                  as a result a lot of things are harder and harder to find, or
                  they are so buried, they never get used.
                </p>
                <FancyImage
                  src={FeatureSet}
                  transitionDuration={300}
                  zoomMargin={80}
                  overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                  layout='intrinsic'
                />
              </section>

              <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Questions we had to ask ourselves</h2>
                <div className='mx-auto fullbleed'>
                  <div className='gap-8 mx-auto md:grid md:grid-cols-3 md:max-w-7xl'>
                    <p className='p-8 text-base border border-b-gray-400'>
                      “What do users feel comfortable with seeing before signing
                      into a secure environment?”
                    </p>
                    <p className='p-8 border border-b-gray-400'>
                      “Will users opt-in and make a conscious choice to see some
                      of their secure data without signing in?”
                    </p>
                    <p className='p-8 border border-b-gray-400'>
                      “What can we do to ease their apprehensions?”
                    </p>
                  </div>
                </div>
              </section>

              <section className='inverse'>
                <div className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <div className='lg:grid lg:grid-cols-2'>
                    <div className='mr-16'>
                      <h2>Planning</h2>
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Amet tellus cras adipiscing enim eu turpis
                        egestas. Tincidunt praesent semper feugiat nibh sed
                        pulvinar proin gravida. Ut diam quam nulla porttitor.
                        Vel facilisis volutpat est velit egestas dui id. Lorem
                        ipsum dolor sit amet consectetur adipiscing elit duis.
                        Elit pellentesque habitant morbi tristique senectus.
                        Nisi quis eleifend quam adipiscing vitae proin sagittis
                        nisl. Arcu risus quis varius quam quisque id diam. Et
                        netus et malesuada fames ac turpis. Nisl rhoncus mattis
                        rhoncus urna neque viverra justo nec ultrices. Erat
                        velit scelerisque in dictum non. Integer malesuada nunc
                        vel risus commodo.
                      </p>
                      <h3>ltricies mi quis hendrerit dolor</h3>
                      <p>
                        Ultricies mi quis hendrerit dolor. Condimentum id
                        venenatis a condimentum vitae sapien. Est velit egestas
                        dui id ornare arcu odio. Vestibulum lorem sed risus
                        ultricies tristique. Ac felis donec et odio pellentesque
                        diam volutpat commodo. Tortor pretium viverra
                        suspendisse potenti nullam. Neque sodales ut etiam sit
                        amet nisl purus in mollis. In nisl nisi scelerisque eu
                        ultrices vitae auctor eu. In tellus integer feugiat
                        scelerisque varius morbi enim nunc. Aliquam purus sit
                        amet luctus venenatis lectus. Nibh sed pulvinar proin
                        gravida hendrerit lectus a. Diam volutpat commodo sed
                        egestas egestas. Sed turpis tincidunt id aliquet risus.
                        Sapien et ligula ullamcorper malesuada proin libero nunc
                        consequat. Ornare suspendisse sed nisi lacus. Pharetra
                        magna ac placerat vestibulum lectus mauris ultrices eros
                        in.
                      </p>
                    </div>
                    <div className='md:w-auto md:relative md:my-12'>
                      <Image
                        alt='Mountains'
                        src={Brainstorming}
                        layout='responsive'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className='mx-auto -mt-16 md:-mt-12 md:px-16 caption md:max-w-6xl'>
                A sample of what the users were saying during the interview
                process
              </div>

              <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Planning</h2>
                <h3>Learning about the queues</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
                <h3>Learning about the queues</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
              </section>
              <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Takeaways</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt
                  praesent semper feugiat nibh sed pulvinar proin gravida.
                </p>
              </section>

              <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Other hurdles</h2>
                <div className='shadow-md shadow-slate-200 md:grid md:grid-cols-2'>
                  <div className='w-auto p-8 bg-slate-200'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Amet tellus cras adipiscing enim eu turpis
                      egestas. Tincidunt praesent semper feugiat nibh sed
                      pulvinar proin gravida.
                    </p>
                  </div>
                  <div className='w-auto p-8 bg-white'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Amet tellus cras adipiscing enim eu turpis
                      egestas. Tincidunt praesent semper feugiat nibh sed
                      pulvinar proin gravida.
                    </p>
                  </div>
                </div>

                <div className='mt-8 shadow-md md:grid md:grid-cols-2 shadow-slate-200'>
                  <div className='w-auto p-8 bg-slate-200'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Amet tellus cras adipiscing enim eu turpis
                      egestas. Tincidunt praesent semper feugiat nibh sed
                      pulvinar proin gravida.
                    </p>
                  </div>
                  <div className='w-auto p-8 bg-white'>
                    <p>Compromises were made where absolutely needed.</p>
                  </div>
                </div>
              </section>

              <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Reference Links</h2>
                <ul className='external_links'>
                  <li>
                    <a href='/usecases/td_insights' alt=''>
                      TD Insights
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://mobilesyrup.com/2020/12/10/td-launches-new-personalized-app-experience-powered-by-ai/'
                      alt=''
                      target='_blank'
                    >
                      TD launches new personalized app experience powered by AI
                    </a>
                  </li>
                  <li>
                    <a
                      href=' https://mobilesyrup.com/2021/12/08/td-low-balance-prediction-mobile-banking-app/'
                      alt=''
                      target='_blank'
                    >
                      TD brings low balance prediction and more to its mobile
                      banking app
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
