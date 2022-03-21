import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Testimonial from '@/components/molecules/testimonial';
import Brief from '@/components/molecules/brief';

//Usecase Images
import Image from 'next/image';

import Brainstorming from './td_dashboard/brainstorming.png';
import LiveLabs from '../../assets/global/avatar_livelabs.webp';

import liveideate1 from './cibc_nab/liveideate1.png';
import liveideate2 from './cibc_nab/liveideate2.png';
import liveideate3 from './cibc_nab/liveideate3.png';
import liveideate4 from './cibc_nab/liveideate4.png';
import liveideate5 from './cibc_nab/liveideate5.png';
import liveideate6 from './cibc_nab/liveideate6.png';

import test from '../../assets/3drenders/pixel6.png';

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
          <m.main variants={fade} className='pb-12 mx-auto bg-slate-50'>
            <div className=''>
              <section className=' bg-customblue'>
                <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h1>
                    Should I pay in Canadian dollars or pay in the local
                    currency?{' '}
                  </h1>
                  <div className='summary'>
                    It's easy for travelers to get confused with foreign
                    currency conversion rates. Most travelers are weary of using
                    their banks and credit cards abroad, especially those who
                    don't travel often. This use case explores ways CIBC is
                    attempting to alleviate the confusion.
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
                    src={LiveLabs}
                    layout='intrinsic'
                    objectFit='cover'
                    width={64}
                    height={64}
                  />
                </div>
                <h2>Overview</h2>
                <p>
                  Who doesn't like to travel? I do, but what I don't like about
                  traveling is brining cash with me. A majority of places I've
                  traveled to support my my bank and credit cards. I haven't had
                  any issues withdrawing money while abroad or used my credit
                  cards in restaurants and shops. The only thing that is still
                  somewhat confusing are foreign currency conversion rates. For
                  one, its easy to get confused with foreign denominations, but
                  also, all the added fees associated with them.
                </p>
                <p>
                  In this usecase we explore these questions and issues, and do
                  that in collaboration with NAB in a 5 days ideation seminar at
                  VISA's HQ in San Francisco.
                </p>

                {/*   <FancyImage
                  src={FeatureSet}
                  transitionDuration={300}
                  zoomMargin={80}
                  overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                  layout='intrinsic'
                /> */}
              </section>

              <Brief />

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Defining the problem statement</h2>
                <p>
                  After spending some time to define the problem statement in
                  Toronto at Live Labs, we determine the final statement to be:
                </p>
              </section>

              <div className='py-12'>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className='my-masonry-grid'
                  columnClassName='my-masonry-grid_column'
                >
                  {/* array of JSX items */}

                  <FancyImage
                    src={liveideate1}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate2}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={liveideate3}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate4}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />

                  <FancyImage
                    src={liveideate5}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />
                  <FancyImage
                    src={liveideate6}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                  />
                </Masonry>
              </div>

              <section className='px-8 mx-auto mb-32 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <p className='mb-16 text-2xl font-light leading-loose text-green-700 callout fullbleed'>
                  <span className=''>As a client</span> paying a bill in foreign
                  currency (physical store or website), I want to{' '}
                  <span>
                    determine whether I should pay in the foreign currency or a
                    pre-converted amount in my home currency,
                  </span>{' '}
                  so that I can{' '}
                  <span>save money or minimize transaction costs.</span>
                </p>
                <div className='mx-auto fullbleed'>
                  <div className='gap-4 mx-auto md:grid md:grid-cols-3 md:max-w-7xl'>
                    <p className='p-8 bg-blue-200 border-2 border-gray-400 border-dashed'>
                      <span>Given that</span> I am at a point of sale terminal
                      in a foreign country or an eCommerce website that is not
                      domiciled in my home currency.
                    </p>
                    <p className='p-8 bg-blue-200 border-2 border-gray-400 border-dashed'>
                      <span>When</span> I am about to make a payment.
                    </p>
                    <p className='p-8 bg-blue-200 border-2 border-gray-400 border-dashed'>
                      <span>Then</span> give me an opportunity to compare the
                      option of paying in foreign currency or a pre-converted
                      amount in my home currency.
                    </p>
                  </div>
                </div>
              </section>

              <section className='inverse'>
                <div className='px-8 mx-auto my-8 md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <div className='lg:grid lg:grid-cols-2'>
                    <div className='mr-16'>
                      <h2>Planning</h2>
                      <h3>Learning about the queues</h3>
                      <p>
                        Understanding the feature set and how to improve it was
                        done by sitting down with the main users as well as
                        their leads and managers to understand how each data
                        table is used not only by team members specializing in a
                        specific area of the business, but also with all users
                        that have access to the ordering system. We also had the
                        advantage to review how they use the legacy systems and
                        what actions they perform between the two frameworks.
                        This gave us a great base for comparison to make sure
                        nothing was missed.
                      </p>
                      <h3>Learning about the queues</h3>
                      <p>
                        Keeping track and laying out all the features based on
                        which were working, and which needed fixing was also an
                        important part of the preparation. The example below is
                        a method I used to take notes, and keep track of
                        requirements aside from the officially captured
                        requirements in Confluence and JIRA. Whimsical, aside
                        from being a great planning tool, is also a great note
                        capturing tool especially during quick fire meeting with
                        business. Most of the notes were gathered in the forms
                        of mind maps.
                      </p>
                    </div>
                    <div className='md:w-auto md:relative md:my-12'>
                      <Image
                        alt='Mountains'
                        src={liveideate6}
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
              <Image
                alt='Mountains'
                src={test}
                layout='responsive'
                objectFit='cover'
              />
              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Planning</h2>
                <h3>Learning about the queues</h3>
                <p>
                  Understanding the feature set and how to improve it was done
                  by sitting down with the main users as well as their leads and
                  managers to understand how each data table is used not only by
                  team members specializing in a specific area of the business,
                  but also with all users that have access to the ordering
                  system. We also had the advantage to review how they use the
                  legacy systems and what actions they perform between the two
                  frameworks. This gave us a great base for comparison to make
                  sure nothing was missed.
                </p>
                <h3>Learning about the queues</h3>
                <p>
                  Keeping track and laying out all the features based on which
                  were working, and which needed fixing was also an important
                  part of the preparation. The example below is a method I used
                  to take notes, and keep track of requirements aside from the
                  officially captured requirements in Confluence and JIRA.
                  Whimsical, aside from being a great planning tool, is also a
                  great note capturing tool especially during quick fire meeting
                  with business. Most of the notes were gathered in the forms of
                  mind maps.
                </p>
              </section>
              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Takeaways</h2>
                <p>
                  One off the key observations and loudest set of feedback from
                  our users was that they wanted to maximize their ability to
                  view more data. This created an interesting design challenge -
                  how do you tightly pack a lot of data onto the screen and
                  still maintain a good level of legibility.
                </p>
                <p>
                  One off the key observations and loudest set of feedback from
                  our users was that they wanted to maximize their ability to
                  view more data. This created an interesting design challenge -
                  how do you tightly pack a lot of data onto the screen and
                  still maintain a good level of legibility.
                </p>
                <p>
                  Each unique data table presented itself with a challenge. Some
                  functional features are common to all data tables, some needed
                  very custom solutions. A way to solve this was to introduce
                  overflow menus that can be customized based on table and or
                  based on orders within a single table. The original design
                  would expose the actions on the page which made them hard to
                  maintain and wouldn't allow for a scalable solution
                </p>
                <p>
                  One off the key observations and loudest set of feedback from
                  our users was that they wanted to maximize their ability to
                  view more data. The design introduced mechanism for users to
                  hide certain sections away from view. An example of that was
                  filters. Each queue had a specific set of filters that varied
                  in number, by introducing a show/hide feature we were able to
                  maximize the screen for max efficiency
                </p>
              </section>

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Other hurdles</h2>
                <div className='shadow-md shadow-slate-200 md:grid md:grid-cols-2'>
                  <div className='w-auto p-8 bg-slate-200'>
                    <p>1</p>
                  </div>
                  <div className='w-auto p-8 bg-white'>
                    <p>A</p>
                  </div>
                </div>

                <div className='mt-8 shadow-md md:grid md:grid-cols-2 shadow-slate-200'>
                  <div className='w-auto p-8 bg-slate-200'>
                    <p>2</p>
                  </div>
                  <div className='w-auto p-8 bg-white'>
                    <p>B</p>
                  </div>
                </div>
              </section>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
