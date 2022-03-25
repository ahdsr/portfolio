import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Brief from '@/components/molecules/brief';
import ReactPlayer from 'react-player';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
import POS from './cibc_nab/pos.png';
import lowfidelitywires from './cibc_nab/low_fidelity_wires.png';
import initialflow from './cibc_nab/initial_flow.png';
import test from '../../assets/3drenders/pixel6.png';

export default function TDDashboard() {
  const ref = useRef(null);
  const restaurant =
    'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80';

  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <Layout>
      <Tween
        from={{
          opacity: 0,
          y: '-20px',
        }}
        to={{
          opacity: 1,
          y: '0px',
        }}
        duration={2}
        delay={0.0}
        ease='circ.inOut'
      >
        <div className='' id='square'>
          <Tween
            to={{
              y: '-200px',
              scrollTrigger: {
                trigger: '.square',
                start: '1000px center',
                end: '1500px center',
                scrub: 0.6,
                markers: false,
              },
            }}
          >
            <div className=''>
              <Tween
                from={{
                  opacity: 1,
                  backgroundColor: '#000',
                  y: '-800px',
                }}
                to={{
                  opacity: 1,
                  backgroundColor: '#000',
                  y: '0px',
                }}
                duration={1}
                delay={0.2}
                ease='circ.inOut'
              >
                <section className=''>
                  <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                    <Tween
                      from={{
                        x: '0px',
                        y: '-100px',
                        rotation: 0,
                        opacity: 0,
                      }}
                      to={{
                        x: '0px',
                        y: '0px',
                        rotation: 0,
                        opacity: 1,
                      }}
                      duration={0.5}
                      delay={1}
                      ease='circ.In'
                    >
                      <div>
                        <h1>
                          CIBC, NAB and VISA collaborate in a ideation workshop
                          in San Francisco
                        </h1>
                      </div>
                      <div className='summary'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Amet tellus cras adipiscing enim eu turpis
                        egestas. Tincidunt praesent semper feugiat nibh sed
                        pulvinar proin gravida.
                      </div>
                    </Tween>
                  </div>
                </section>
              </Tween>
            </div>
          </Tween>
          <section className='mx-auto my-20 xl:px-6 xl:max-w-7xl'>
            {/* <Image alt='Mountains' src={Evolution} layout='responsive' /> */}
          </section>

          <div className='px-8 py-24 pb-12 mx-auto -mt-56 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
            <Image
              alt='TD round logo'
              src={LiveLabs}
              layout='intrinsic'
              objectFit='cover'
              width={64}
              height={64}
            />
          </div>
          <section className='px-8 py-24 pb-12 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
            <h2>Overview</h2>
            <p>
              Our partners at VISA approached Live Labs (a innovation hub at
              CIBC) to solve an issue they were struggling with for some time.
              The issue at first glance was simple - customers when abroad were
              often opting to convert their CAN dollars into the currency of
              their travel destination when paying using POS merchant terminals.
              This resulted in a two fold loss - the customer paying more in
              fees, and CIBC loosing out on revenue.
            </p>
          </section>
          <NextSeo title='Blog' />

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
          <section className='py-24'>
            <div
              className='px-8 py-4 mx-auto my-8 md:px-16 lg:max-w-6xl xl:max-w-7xl '
              id='sectionA'
            >
              <h2>Illustrating the use case </h2>
              <p className='py-4'>
                The customer is at a restaurant, and it comes time to settle up
                the bill.
              </p>
              <img src={restaurant} alt='People at a restaurant' />
              <p className='py-4'>
                They are handed the POS and it shows something similar to this.
                Not all POS systems are made equally, so this information may
                appear in a different way merchant to merchant.
              </p>
              <Tween
                to={{
                  opacity: 1,
                  y: 0,
                  scrollTrigger: {
                    trigger: '.iamtrug',
                    start: '2300px center',
                    end: '2600px center',
                    scrub: 0.2,
                    markers: false,
                  },
                }}
              >
                <div className='mt-24 opacity-0' id='iamtrug'>
                  <Image
                    alt='Point of sale terminal showing purchase price'
                    src={POS}
                    layout='responsive'
                    objectFit='cover'
                    width={200}
                    height={150}
                  />
                </div>
              </Tween>
              <p className='py-4'>The results depending on what they choose:</p>
              <div className='gap-8 md:grid md:grid-cols-2 fullbleed'>
                <div className='grid grid-cols-2 py-4 mb-8 font-light text-slate-700 '>
                  <div className='col-span-2 py-4 font-bold'>EURO</div>
                  <div>Item cost EU</div>
                  <div className='text-right'>$100.00 </div>

                  <div>With conversion CAN</div>
                  <div className='text-right'>$139.04 </div>
                  <div className='pb-2 border-b border-b-slate-500 '>
                    Third Party Fee
                  </div>
                  <div className='pb-2 text-right border-b border-b-slate-500 '>
                    2.5-4.5%
                  </div>
                  <div></div>
                  <div className='pt-2 font-medium text-right '>
                    CAN $145.29{' '}
                  </div>
                </div>
                <div
                  className='grid grid-cols-2 py-4 mb-8 font-light text-slate-700'
                  id='sectionB'
                >
                  <div className='col-span-2 py-4 font-bold'>CAN</div>
                  <div>Item cost EU</div>
                  <div className='text-right'>$100.00</div>

                  <div>With conversion CAN</div>
                  <div className='text-right'>$139.04</div>
                  <div className='pb-2 border-b border-b-slate-500'>
                    CIBC Standard Fee
                  </div>
                  <div className='pb-2 text-right border-b border-b-slate-500'>
                    2.5%{' '}
                  </div>
                  <div></div>
                  <div className='pt-2 font-medium text-right '>
                    $ 142.50 CAN
                  </div>
                </div>
              </div>

              <p>
                The client is overpaying by{' '}
                <span className='p-2 pt-2 font-medium text-right bg-red-100'>
                  $2.80
                </span>{' '}
                on this transaction and at the same time, the bank is missing
                out on{' '}
                <span className='p-2 pt-2 font-medium text-right bg-red-100'>
                  $3.46
                </span>{' '}
                in revenue.=
              </p>

              <p>
                The numbers seems fairly small and insignificant at first glance
                but they can start to add up. We discovered that on a two week
                vacation based on some average spending habits, you can quickly
                be short changed around $120-180 in extra fees. Without getting
                into detailed math its evident that the bank was the biggest
                looser in the equation.
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
          <section className='py-24 inverse' id='sectionC'>
            <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>Ideation</h2>
              <p>
                In the initial stages of ideation we asked users what sort of
                tools would be helpful to them while traveling in general. The
                reason we did this was to determine if there was any other
                opportunities we were missing out on to serve our customers in a
                more complete way, aside from the main business problem.
              </p>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className='py-12 my-masonry-grid'
                columnClassName='my-masonry-grid_column '
              >
                {/* array of JSX items */}

                <FancyImage
                  src={liveideate1}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />

                <FancyImage
                  src={liveideate2}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />
                <FancyImage
                  src={liveideate3}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />

                <FancyImage
                  src={liveideate4}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />

                <FancyImage
                  src={liveideate5}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />
                <FancyImage
                  src={liveideate6}
                  transitionDuration={300}
                  zoomMargin={40}
                  overlayBgColorEnd={'rgba(0, 0,0, 0.95)'}
                  layout='intrinsic'
                />
              </Masonry>
              <h3>In our discovery session we learned that:</h3>
              <ul className='gap-8 py-12 font-light md:grid md:grid-cols-3 text-slate-300 content'>
                <li>
                  Clients were keen and interested in what to do and see while
                  at their destination
                </li>
                <li>
                  They expressed a need for budgeting their trip - "It's very
                  easy to loose track of their money while abroad."
                </li>
                <li>
                  Foreign exchange rates were confusing to them - "I generally
                  understand exchange rates, but I always worried about paying
                  hidden fees and charges."
                </li>
              </ul>
            </div>
          </section>
          <section className='py-24 bg-white '>
            <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl '>
              <h2>Low fidelity wires</h2>
              <p>
                Based on the response we got from our session, I design a few
                low fidelity concepts of what the experience may look like. At a
                high level the flow was initiated by a push notification with
                CIBC recognizing the fact that the client was at their
                destination. Once tapping on the notification, the user would be
                prompted to sign-in allowing them to choose from a simple
                currency conversion calculator, a travel guide, as well as a
                budgeting tool.
              </p>

              {/*          <ReactFlow nodes={nodes} edges={edges} fitView /> */}

              <div className='py-12'>
                <Image
                  alt='Low fidelity wires'
                  src={initialflow}
                  layout='intrinsic'
                  objectFit='cover'
                />
              </div>

              <div className='py-12'>
                <Image
                  alt='Low fidelity wires'
                  src={lowfidelitywires}
                  layout='intrinsic'
                  objectFit='cover'
                />
              </div>
            </div>
          </section>

          <section className='py-24'>
            <div className='px-8 mx-auto my-8 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <div className=''>
                <h2>Redefining the problem statement</h2>
                <p>Based on our testing we came a few real world issues.</p>
                <a href='#sectionA' className='go-to-end' data-scroll-to>
                  asdsadsd
                </a>
                <p>
                  We learned that it would be impossible to know to trigger a
                  notification at the time of a purchase. This meant that if the
                  customer ignored their push notification, or had them
                  completely disabled as part of their phone settings they would
                  never know we were offering them this service.
                </p>
                <p>
                  After the first day of the collaboration workshop in San
                  Francisco we discovered a few key differences between our and
                  NAB's capability for delivering a full travel experience
                  solution. NAB being situated in Australia, already had a more
                  comprehensive support framework for travel tools. Their
                  geographical location simply demanded it. CIBC on the other
                  hand did not - we distilled our key problem statement.
                </p>
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
              </div>

              <div className='gap-4 lg:grid lg:grid-cols-3'>
                <p className='p-8 border border-gray-400 border-dashed'>
                  <span>Given that</span> I am at a point of sale terminal in a
                  foreign country or an eCommerce website that is not domiciled
                  in my home currency.
                </p>
                <p className='p-8 border border-gray-400 border-dashed'>
                  <span>When</span> I am about to make a payment.
                </p>
                <p className='p-8 border border-gray-400 border-dashed'>
                  <span>Then</span> give me an opportunity to compare the option
                  of paying in foreign currency or a pre-converted amount in my
                  home currency.
                </p>
              </div>
            </div>
          </section>
          <Image
            alt='Mountains'
            src={test}
            layout='responsive'
            objectFit='cover'
          />
          <section className='px-8 pt-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
            <h2>Reference Links</h2>
            <ul className='external_links'>
              <li>
                <a
                  href='https://usa.visa.com/partner-with-us/developer.html'
                  className='external_links'
                >
                  Welcome to Visa Developer
                </a>
              </li>
              <li>
                <a
                  href='https://www.itbusiness.ca/news/live-labs-illustrates-cibcs-commitment-to-digital-transformation/90212'
                  className='external_links'
                >
                  Live Labs illustrates CIBC’s commitment to digital
                  transformation
                </a>
              </li>
            </ul>

            <div className='mb-12 player-wrapper'>
              <ReactPlayer
                className='react-player'
                url=' https://www.youtube.com/watch?v=YHerjbGsNSw'
                loop={false}
                light={false}
                muted={false}
                controls={true}
                width='100%'
                height='100%'
              />
            </div>
            <div className='mb-12 player-wrapper'>
              <ReactPlayer
                className='react-player'
                url=' https://www.youtube.com/watch?v=EeVmxcY9Vqs'
                loop={false}
                light={false}
                muted={false}
                controls={true}
                width='100%'
                height='100%'
              />
            </div>
          </section>
        </div>
      </Tween>

      <GetInTouch />
      <Footer />
    </Layout>
  );
}
