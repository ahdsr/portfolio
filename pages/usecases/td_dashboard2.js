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
import Evolution from './td_dashboard/dashboard_evolution.png';
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
          <m.main variants={fade} className='mx-auto bg-slate-50 '>
            <div className=''>
              <section className=' bg-customblue'>
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

              <section className='px-8 mx-auto mb-32 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Questions we had to ask ourselves</h2>
                <div className='mx-auto fullbleed'>
                  <div className='gap-8 mx-auto md:grid md:grid-cols-3 md:max-w-7xl '>
                    <p className='p-8 border border-b-gray-400'>
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
                <div className='px-8 mx-auto my-8 md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <div className='md:grid md:grid-cols-2'>
                    <div className='mr-16 bg-hero-pattern'>
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
                    <div className='md:w-auto md:relative'>
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
              <div className='mx-auto -mt-16 md:-mt-12 caption md:max-w-6xl '>
                A sample of what the users were saying during the interview
                process
              </div>

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
                  <div className='w-auto p-8 bg-slate-200 '>
                    <p>
                      Stakeholder availability was intermittent. Reviewing and
                      presenting solutions for a design pattern that affected
                      (everyone) using the Ordering system proved to be
                      logistically very difficult.
                    </p>
                  </div>
                  <div className='w-auto p-8 bg-white '>
                    <p>
                      Functional prototypes and detailed wires were sent out to
                      circumvent the issue, and meetings when available were
                      very focused for approvals and sign-offs.
                    </p>
                  </div>
                </div>

                <div className='mt-8 shadow-md md:grid md:grid-cols-2 shadow-slate-200 '>
                  <div className='w-auto p-8 bg-slate-200 '>
                    <p>
                      Big differences of opinion. Not all lines of business
                      worked together, but all lines of business had to use the
                      same application. This revealed that certain
                      component-like solutions just weren’t going to work even
                      though ultimately they would prove to be the most
                      efficient.
                    </p>
                  </div>
                  <div className='w-auto p-8 bg-white '>
                    <p>Compromises were made where absolutely needed.</p>
                  </div>
                </div>
              </section>

              <section className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Reference Links</h2>
                <ul className='external_links'>
                  <li>
                    <a
                      href='https://mobilesyrup.com/2020/12/10/td-launches-new-personalized-app-experience-powered-by-ai/'
                      alt=''
                    >
                      TD launches new personalized app experience powered by AI
                    </a>
                  </li>
                  <li>
                    <a
                      href='  https://mobilesyrup.com/2021/12/08/td-low-balance-prediction-mobile-banking-app/'
                      alt=''
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
    </Layout>
  );
}