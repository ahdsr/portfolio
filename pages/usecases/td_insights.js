import React from 'react';
import { Component } from 'react';

import Protect from 'react-app-protect';
import 'react-app-protect/dist/index.css';

import { useRef } from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

import Brief from '@/components/molecules/brief';

//Usecase Images
import Image from 'next/image';
import TDLogo from '../../assets/global/avatar_td.webp';

import tdinsights1 from './td_insights/td_insights_01.png';
import tdinsights2 from './td_insights/td_insights_02.png';
import tdinsights3 from './td_insights/td_insights_03.png';
import tdinsights4 from './td_insights/td_insights_04.png';
import tdinsights5 from './td_insights/td_insights_05.png';
import tdinsights6 from './td_insights/td_insights_06.png';
import tdinsights7 from './td_insights/td_insights_07.png';
import tdinsights8 from './td_insights/td_insights_08.png';
import tdinsights9 from './td_insights/td_insights_09.png';
import tdinsights10 from './td_insights/td_insights_10.png';
import tdinsights11 from './td_insights/td_insights_11.png';
import tdinsights12 from './td_insights/td_insights_12.png';
import tdinsights13 from './td_insights/td_insights_13.png';
import tdinsights14 from './td_insights/td_insights_14.png';
import tdinsights15 from './td_insights/td_insights_15.png';
import tdinsights16 from './td_insights/td_insights_16.png';
import tdinsights17 from './td_insights/td_insights_17.png';
import tdinsights18 from './td_insights/td_insights_18.png';
import tdinsights19 from './td_insights/td_insights_19.png';
import tdinsights20 from './td_insights/td_insights_20.png';

export default function TDDashboard() {
  if (typeof window === 'undefined') return '';

  const restaurant =
    'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80';
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <Protect
      sha512='534E5CCC6A9FCCAB2728E6A3DB388C6221A094C87EB87E2D1BFF2302A0360529304FD271211D4E4F9D7DC210FD7B4866DE4781D0580C8DA3E78CDA28B0A72691'
      blur='true'
    >
      <Layout>
        <NextSeo title='Blog' />
        <LazyMotion features={domAnimation}>
          <m.div initial='initial' animate='enter' exit='exit'>
            <m.main variants={fade} className='mx-auto bg-slate-50'>
              <div className=''>
                <section className='bg-customblue'>
                  <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                    <h1>
                      Working with artificial intelligence to bring TD customer
                      valuable insights into their banking habits
                    </h1>
                    <div className='summary'>
                      A suite of intelligent insights with personalized
                      real-time information that are relevant to customers'
                      banking needs
                    </div>
                  </div>
                </section>
                <section className='mx-auto my-20 xl:px-6 xl:max-w-7xl'>
                  {/* <Image alt='Mountains' src={Evolution} layout='responsive' /> */}
                </section>

                <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
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
                    Leveraging the new{' '}
                    <Link
                      href='/usecases/td_dashboard2'
                      className='p-2 bg-yellow-100'
                    >
                      dashboard
                    </Link>{' '}
                    introduced new digital insights within the TD app designed
                    to prompt customers with guided self-serve options based on
                    their transaction history. These insights offer pro-active
                    guidance to help customers to intuitively complete an action
                    without having to search within the app or navigate to the
                    external site.
                  </p>
                </section>

                <Brief
                  projectb1='Native app'
                  projectb2=''
                  roleb1='UI / UX Lead'
                  roleb2=''
                  duration='4-6 months'
                  toolsb1='Sketch'
                  toolsb2='Invision Studio'
                  toolsb3=''
                />

                <section className='bg-white '>
                  <div className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                    <h2>Low fidelity wires and user testing</h2>
                    <p>
                      Based on the response we got from our session, I designed
                      a few low fidelity concepts of what the experience may
                      look like. At a high level the flow was initiated by a
                      push notification with CIBC recognizing the fact that the
                      client was at their destination. Tapping on the
                      notification, the user would be taken to a page where they
                      could do their calculation, a travel guide, as well as a
                      budgeting tool.
                    </p>

                    {/*          <ReactFlow nodes={nodes} edges={edges} fitView /> */}

                    <div className='py-8'></div>

                    <p>User testing results</p>
                  </div>
                </section>

                <section className='inverse'>
                  <div className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                    <h2>Types of cards</h2>
                    <p>
                      In the initial stages of ideation we asked users what sort
                      of tools would be helpful to them while traveling in
                      general. The reason we did this was to determine if there
                      was any other opportunities we were missing out on to
                      serve our customers in a more complete way, aside from the
                      main business problem.
                    </p>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className='py-12 my-masonry-grid'
                      columnClassName='my-masonry-grid_column'
                    >
                      {/* array of JSX items */}

                      <FancyImage
                        src={tdinsights1}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />

                      <FancyImage
                        src={tdinsights2}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights3}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />

                      <FancyImage
                        src={tdinsights4}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />

                      <FancyImage
                        src={tdinsights5}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights6}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights7}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights8}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights9}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                    </Masonry>
                    <h3>Insufficient Funds</h3>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className='py-12 my-masonry-grid'
                      columnClassName='my-masonry-grid_column'
                    >
                      {/* array of JSX items */}

                      <FancyImage
                        src={tdinsights8}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights9}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                    </Masonry>
                    <h3>Bottom Drawer</h3>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className='py-12 my-masonry-grid'
                      columnClassName='my-masonry-grid_column'
                    >
                      {/* array of JSX items */}

                      <FancyImage
                        src={tdinsights10}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights11}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                    </Masonry>
                    <h3>High Spending</h3>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className='py-12 my-masonry-grid'
                      columnClassName='my-masonry-grid_column'
                    >
                      {/* array of JSX items */}

                      <FancyImage
                        src={tdinsights12}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights13}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights14}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights15}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights16}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights17}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights18}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights19}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                      <FancyImage
                        src={tdinsights20}
                        transitionDuration={300}
                        zoomMargin={40}
                        overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                        layout='intrinsic'
                      />
                    </Masonry>
                    <h3>In our discovery session we learned that:</h3>
                    <ul className='gap-8 font-light md:grid md:grid-cols-3 text-slate-300 content'>
                      <li>
                        They expressed a need for budgeting their trip - "It's
                        very easy to loose track of my money while abroad."
                      </li>
                      <li>
                        Clients were keen and interested in what to do and see
                        while at their destination - "It's very easy to loose
                        track of my money while abroad."
                      </li>
                      <li>
                        Confusion around exchange rates - "I generally
                        understand exchange rates, but I always worried about
                        paying hidden fees and charges."
                      </li>
                    </ul>
                  </div>
                </section>

                <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                  <h2>Reference Links</h2>
                  <div>
                    <ul className='external_links'>
                      <li>
                        <a
                          href='https://stories.td.com/ca/en/news/2021-12-08-td-empowers-customers-with-new-intuitive-mobile-app-experien'
                          className='external_links'
                          target='_blank'
                        >
                          TD empowers customers with new intuitive mobile app
                          experiences
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </m.main>
          </m.div>
        </LazyMotion>
      </Layout>
    </Protect>
  );
}
