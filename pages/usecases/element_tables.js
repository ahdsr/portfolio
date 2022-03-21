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
import ElementLogo from '../../assets/global/avatar_element.webp';
import ElementTable from '../../pages/usecases/element_tables/pc.png';

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
          <m.main variants={fade} className='pb-10 bg-slate-50 usecase'>
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
                    <p className='font-bold'>Project Type</p>
                    <ul className='pt-2'>
                      <li>Web design</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold'>My Role</p>
                    <ul className='pt-2'>
                      <li>UI Design Consultant</li>
                      <li>UX Designer</li>
                      <li>Prototyping</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold'>Duration</p>
                    <ul className='pt-2'>
                      <li>4 months</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-bold'>Tools</p>
                    <ul className='pt-2'>
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
                <div className='pb-12 mx-auto'>
                  <span className='subheading'>Interviewing the users</span>
                </div>

                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    After conducting some brief interviews with the users, it
                    was evident that their needs and understanding of what the
                    queue is, was very different. Since the ordering team is
                    broken down into a number of sub-teams, sometimes very
                    granular and specific roles had very unique needs. One thing
                    became clear, the functional inconsistencies between each
                    queue was creating confusion on how users should interact
                    with it, what functions it performed and how to ultimately
                    use it in the most efficient way.
                  </p>

                  <p className='pright'>
                    <Testimonial
                      quote='I want to see all of the data on one screen?
                      '
                    />
                    <Testimonial
                      quote="I don't want to have to click too many times to do what I need to get done.
                      "
                    />
                  </p>
                </div>

                <div className='pt-12 pb-12 mx-auto'>
                  <span className='subheading'>Research</span>
                </div>

                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    Once I had a better understanding of what the users needed,
                    I researched out-of-the-box solutions that were already in
                    the wild. At its core the queue is a data table no different
                    from an Excel document (without all the complex features).
                    In fact a lot of users would export data out of the site,
                    and use Excel to further filter the results. In an ideal
                    situation we can leverage and modify one of these existing
                    frameworks but due to technical limitations this was not
                    possible.
                  </p>

                  <p className='pright'>
                    <span className='block mb-8 font-medium'>
                      Some stand out examples were:
                    </span>
                    <ul>
                      <li> https://www.ag-grid.com/</li>
                      <li> http://swimlane.github.io/ngx-datatable/</li>
                      <li> https://datatables.net/examples/index</li>
                    </ul>
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
                  <span className='heading3'>Design challenges</span>
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

                <div className='pt-20 mx-auto mt-20'>
                  <span className='heading3'>Other issues</span>
                </div>
                <div className='md:grid md:grid-cols-2'>
                  <p className='pleft'>
                    Stakeholder availability was intermittent. Reviewing and
                    presenting solutions for a design pattern that affected
                    (everyone) using the Ordering system proved to be
                    logistically very difficult.
                    <span className='block p-4 mt-8 text-sm italic leading-relaxed bg-yellow-50'>
                      Functional prototypes and detailed wires were sent out to
                      circumvent the issue, and meetings when available were
                      very focused for approvals and sign-offs.
                    </span>
                  </p>

                  <p className='pright'>
                    Big differences of opinion. Not all lines of business worked
                    together, but all lines of business had to use the same
                    application. This revealed that certain component-like
                    solutions just weren’t going to work even though ultimately
                    they would prove to be the most efficient.
                    <span className='block p-4 mt-8 text-sm italic leading-relaxed bg-yellow-50'>
                      Compromises were made where absolutely needed.
                    </span>
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
