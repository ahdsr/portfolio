import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

//Usecase Images
import Image from 'next/image';
import ElementLogo from '../../assets/global/avatar_element.webp';
import ElementTable from '../../pages/usecases/element_tables/pc.png';

const name = 'Modernizing data tables for the backend user ordering system';
const description =
  'The queue essentially is a list of all Elements customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

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
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase '>
            <div className='pt-16 pb-10 mx-auto max-w-screen-2xl xl:max-w-screen-xl'>
              <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
                <h1 className='heading1'>{name}</h1>
                <div className='block w-16 h-16 rounded-full'>
                  <Image
                    alt='Mountains'
                    src={ElementLogo}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
                <h2 className='heading2'>{description}</h2>

                <div className='grid grid-cols-4 gap-6 text-base text-slate-700'>
                  <div>
                    <p className='font-bold '>Project Type</p>
                    <ul className='pt-2 '>
                      <li>Web design</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold '>My Role</p>
                    <ul className='pt-2 '>
                      <li>UI Design Consultant</li>
                      <li>UX Designer</li>
                      <li>Prototyping</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold '>Duration</p>
                    <ul className='pt-2 '>
                      <li>4 months</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold '>Tools</p>
                    <ul className='pt-2 '>
                      <li>Figma</li>
                    </ul>
                  </div>
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
                    alt='Element Ordering tables'
                    src={ElementTable}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>

              <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-10 lg:px-16 xl:px-24'>
                <div className='pb-12 mx-auto '>
                  <span className='subheading'>The Design Problem</span>
                </div>

                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    At the point when I joined the project, it was suffering
                    from a disjointed user experience due to a large number of
                    development teams involved. We started to notice that even
                    some core site components were inconsistent. One of the
                    major components was a data table.
                  </p>

                  <p className='pright'>
                    These data tables or queues were a major functional
                    component of the ordering system. The queue displayed a list
                    of all Element's client orders. The table lists everything
                    from the vehicle that is being ordered, right down to the
                    driver and insurance information. When a piece of work is
                    done by one team, the order moves along until all teams have
                    validated the data.
                  </p>
                </div>

                <div className='md:grid md:grid-cols-3'>
                  <p className='md:mr-6 callout'>
                    “ I want to see all of data on one screen? ”
                  </p>
                  <p className='md:mr-6 callout'>
                    “I don't want to have to click to many times to do what I
                    need to get done.”
                  </p>
                  <p className='md:ml-6 callout'>
                    “What can we do to ease their apprehensions?”
                  </p>
                </div>
                <div className='pt-20 mx-auto mt-20'>
                  <span className='subheading'>Research & Planning</span>
                </div>
                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    Understanding the feature set and how to improve it was done
                    by sitting down with the main users as well as their leads
                    and managers to understand how each data table is used not
                    only by team members specializing in a specific area of the
                    business, but also with all users that have access to the
                    ordering system. We also had the advantage to review how
                    they use the legacy systems and what actions they perform
                    between the two frameworks. This gave us a great base for
                    comparison to make sure nothing was missed.
                  </p>

                  <p className='pright'>
                    Keeping track and laying out all the features based on which
                    were working, and which needed fixing was also an important
                    part of the preparation. The example below is a method I
                    used to take notes, and keep track of requirements aside
                    from the officially captured requirements in Confluence and
                    JIRA. Whimsical, aside from being a great planning tool, is
                    also a great note capturing tool especially during quick
                    fire meeting with business. Most of the notes were gathered
                    in the forms of mind maps.
                  </p>
                </div>
                <div className='pt-20 mx-auto mt-20'>
                  <span className='heading3'>Challenges and solutions</span>
                </div>
                <div className='md:grid md:grid-cols-3'>
                  <p className='pleft'>
                    One off the key observations and loudest set of feedback
                    from our users was that they wanted to maximize their
                    ability to view more data. This created an interesting
                    design challenge - how do you tightly pack a lot of data
                    onto the screen and still maintain a good level of
                    legibility.
                  </p>

                  <p className='pright'>
                    Each unique data table presented itself with a challenge.
                    Some functional features are common to all data tables, some
                    needed very custom solutions. A way to solve this was to
                    introduce overflow menus that can be customized based on
                    table and or based on orders within a single table. The
                    original design would expose the actions on the page which
                    made them hard to maintain and wouldn't allow for a scalable
                    solution
                  </p>

                  <p className='pright'>
                    One off the key observations and loudest set of feedback
                    from our users was that they wanted to maximize their
                    ability to view more data. The design introduced mechanism
                    for users to hide certain sections away from view. An
                    example of that was filters. Each queue had a specific set
                    of filters that varied in number, by introducing a show/hide
                    feature we were able to maximize the screen for max
                    efficiency
                  </p>
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
