import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';

import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Testimonial from '@/components/molecules/testimonial';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

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
          <m.main variants={fade} className='mx-auto bg-slate-50'>
            <section className='bg-customblue'>
              <div className='px-8 mx-auto py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h1>Modern data tables for processing vehicle orders</h1>

                <div className='summary'>
                  The “queue” is essentially a list of all Element’s customer
                  orders. The tables list everything from the vehicle that is
                  being ordered, right down to the driver and insurance
                  information. When a piece of work is done by one team, the
                  order moves along until all teams have validated the data.
                </div>
              </div>
            </section>

            <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>Interviewing the users</h2>
              <h3>Learning about the queues</h3>
              <p>
                After conducting some in-depth interviews with the core user
                group, it was quickly evident that their needs and understanding
                of what the queue is, was very different. Since the ordering
                team is broken down into a number of sub-teams, sometimes very
                granular and specific roles had very unique needs.{' '}
                <span>One thing became clear</span>, the functional
                inconsistencies between each queue was creating confusion on how
                users should interact with it, what functions it performed and
                how to ultimately use it in the most efficient way.
              </p>
            </section>

            <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>What the users told us</h2>
              <div className='mx-auto fullbleed'>
                <div className='gap-8 mx-auto md:grid md:grid-cols-3 md:max-w-7xl'>
                  <p className='p-8 border border-b-gray-400'>
                    "I want to see all of the data on one screen?"
                  </p>
                  <p className='p-8 border border-b-gray-400'>
                    "I don't want to have to click too many times to do what I
                    need to get done."
                  </p>
                  <p className='p-8 border border-b-gray-400'>
                    “What can we do to ease their apprehensions?”
                  </p>
                </div>
              </div>
            </section>

            <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>Research</h2>

              <p>
                Once I had a better understanding of what the users needed, I
                researched out-of-the-box solutions that were already in the
                wild. At its core the queue is a data table no different from an
                Excel document (without all the complex features). In fact a lot
                of users would export data out of the site, and use Excel to
                further filter the results. In an ideal situation we can
                leverage and modify one of these existing frameworks but due to
                technical limitations this was not possible.
              </p>
            </section>

            <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>Planning</h2>
              <h3>Learning about the queues</h3>
              <p>
                Understanding the feature set and how to improve it was done by
                sitting down with the main users as well as their leads and
                managers to understand how each data table is used not only by
                team members specializing in a specific area of the business,
                but also with all users that have access to the ordering system.
                We also had the advantage to review how they use the legacy
                systems and what actions they perform between the two
                frameworks. This gave us a great base for comparison to make
                sure nothing was missed.
              </p>
              <h3>Learning about the queues</h3>
              <p>
                Keeping track and laying out all the features based on which
                were working, and which needed fixing was also an important part
                of the preparation. The example below is a method I used to take
                notes, and keep track of requirements aside from the officially
                captured requirements in Confluence and JIRA. Whimsical, aside
                from being a great planning tool, is also a great note capturing
                tool especially during quick fire meeting with business. Most of
                the notes were gathered in the forms of mind maps.
              </p>
            </section>

            <section className='inverse'>
              <div className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <h2>Takeaways</h2>
                <div className='gap-8 md:grid md:grid-cols-3'>
                  <div className=''>
                    <h3>Learning about the queues</h3>
                    <p>
                      One off the key observations and loudest set of feedback
                      from our users was that they wanted to maximize their
                      ability to view more data. This created an interesting
                      design challenge - how do you tightly pack a lot of data
                      onto the screen and still maintain a good level of
                      legibility.
                    </p>
                  </div>
                  <div className='relative w-auto'>
                    {' '}
                    <h3>Learning about the queues</h3>
                    <p>
                      Each unique data table presented itself with a challenge.
                      Some functional features are common to all data tables,
                      some needed very custom solutions. A way to solve this was
                      to introduce overflow menus that can be customized based
                      on table and or based on orders within a single table. The
                      original design would expose the actions on the page which
                      made them hard to maintain and wouldn't allow for a
                      scalable solution
                    </p>
                  </div>
                  <div className='relative w-auto'>
                    {' '}
                    <h3>Learning about the queues</h3>
                    <p>
                      One off the key observations and loudest set of feedback
                      from our users was that they wanted to maximize their
                      ability to view more data. The design introduced mechanism
                      for users to hide certain sections away from view. An
                      example of that was filters. Each queue had a specific set
                      of filters that varied in number, by introducing a
                      show/hide feature we were able to maximize the screen for
                      max efficiency
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className='mx-auto -mt-16 md:-mt-12 md:px-16 caption md:max-w-6xl'>
              A sample of what the users were saying during the interview
              process
            </div>

            <section className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <h2>Other hurdles</h2>
              <p>
                Stakeholder availability was intermittent. Reviewing and
                presenting solutions for a design pattern that affected
                (everyone) using the Ordering system proved to be logistically
                very difficult.
              </p>
              <p>
                Functional prototypes and detailed wires were sent out to
                circumvent the issue, and meetings when available were very
                focused for approvals and sign-offs.
              </p>
              <p>
                Big differences of opinion. Not all lines of business worked
                together, but all lines of business had to use the same
                application. This revealed that certain component-like solutions
                just weren’t going to work even though ultimately they would
                prove to be the most efficient.
              </p>
              <p>Compromises were made where absolutely needed.</p>
            </section>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
