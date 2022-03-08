import { useRef } from 'react';
import React, { useState, useEffect } from 'react';

import Layout from '@/components/layout';
import Navbar from '@/components/navbvar';
import Footer from '@/components/footer';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

// Import Images
import Image from 'next/image';

import Image1 from '../../pages/usecases/item1/hero.jpg';
import Placeholder from '../../assets/global/placeholder.png';

// Content

const tag = 'Data Design';
const name = 'Modernizing data tables for the backend user ordering system';
const description =
  'When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.';

export default function Item1() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Portfolio Item 1' />
      <Navbar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          scrollFromAnywhere: true,
          reloadOnContextChange: true,
          tablet: { smooth: false, breakpoint: 1280 },
          smartphone: { smooth: false },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='pb-20'>
                  <Container>
                    <div className='content mx-auto mt-40 '>
                      <h1 className='font-bold text-2xl md:text-7xl xl:text-7xl mb-4 mx-auto text-center text-cyan-300'>
                        {name}
                      </h1>
                      <p className='text-2xl font-medium mb-4 mx-auto text-center px-24'>
                        {description}
                      </p>
                      {/* Image */}
                      <div
                        className='mt-20'
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '800px',
                        }}
                      >
                        <Image
                          alt='Mountains'
                          src={Image1}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                      <h3>The design problem</h3>

                      <div class='flex mt-10 mb-20'>
                        <div class='item w-1/2 h-auto pr-4'>
                          <p>
                            Due to the nature and planning of the project the
                            ordering platform was faced with a disjointed
                            experience when it comes to visualizing and working
                            with large data sets. Not only did the website
                            suffer from inconsistent components, but with every
                            iteration, unique code was adding to the
                            inconsistencies. These data tables or queues were a
                            major functional component of the ordering system.
                          </p>
                        </div>
                        <div class='item w-1/2 h-auto pl-4  '>
                          <p>
                            The queue essentially is a list of all Elements
                            customer orders. The tables list everything from the
                            vehicle that is being ordered, right down to the
                            driver and insurance information. When a piece of
                            work is done by one team, the order moves along
                            until all teams have validated the data.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '800px',
                        }}
                      >
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>

                      <h3 className='mt-20'>Preparations and research</h3>
                      <div class='flex mt-10 mb-20'>
                        <div class='item w-1/2 h-auto pr-4'>
                          <p>
                            Understanding the feature set and how to improve it
                            was done by sitting down with the main users as well
                            as their leads and managers to understand how each
                            data table is used not only by team members
                            specializing in a specific area of the business, but
                            also with all users that have access to the ordering
                            system. We also had the advantage to review how they
                            use the legacy systems and what actions they perform
                            between the two frameworks. This gave us a great
                            base for comparison to make sure nothing was missed.
                          </p>
                        </div>
                        <div class='item w-1/2 h-auto pl-4  '>
                          <p>
                            Keeping track and laying out all the features based
                            on which were working, and which needed fixing was
                            also an important part of the preparation. The
                            example below is a method I used to take notes, and
                            keep track of requirements aside from the officially
                            captured requirements in Confluence and JIRA.
                            Whimsical, aside from being a great planning tool,
                            is also a great note capturing tool especially
                            during quick fire meeting with business. Most of the
                            notes were gathered in the forms of mind maps.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '800px',
                        }}
                      >
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>

                      <h3 className='mt-20'>Challenges and solutions</h3>
                      <div class='flex mt-10 mb-20'>
                        <div class='item w-1/3 h-auto pr-4'>
                          <h3>Data is king</h3>
                          <p>
                            One off the key observations and loudest set of
                            feedback from our users was that they wanted to
                            maximize their ability to view more data. This
                            created an interesting design challenge - how do you
                            tightly pack a lot of data onto the screen and still
                            maintain a good level of legibility.
                          </p>
                        </div>
                        <div class='item w-1/3 h-auto pl-4  '>
                          <h3>
                            Multiple function to perform on a single order
                          </h3>
                          <p>
                            Each unique data table presented itself with a
                            challange. Some functional features are common to
                            all data tables, some needed very custom solutions.
                            A way to solve this was to introduce overflow menus
                            that can be customized based on table and or based
                            on orders within a single table. The original design
                            would expose the actions on the page which made them
                            hard to maintain and wouldnt allow for a scalable
                            solution
                          </p>
                        </div>
                        <div class='item w-1/3 h-auto pl-4  '>
                          <h3>Screen size and real estate issues</h3>
                          <p>
                            One off the key observations and loudest set of
                            feedback from our users was that they wanted to
                            maximize their ability to view more data. The design
                            introduced mechanism for users to hide certain
                            sections away from view. An example of that was
                            filters. Each queue had a specific set of filters
                            that varied in number, by introducing a show/hide
                            feature we were able to maximize the screen for max
                            efficiency
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '800px',
                        }}
                      >
                        <Image
                          alt='Mountains'
                          src={Placeholder}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                    </div>
                    <div class='flex justify-evenly items-end'>
                      <div class='item w-1/3 h-auto'>
                        <FancyLink
                          destination='/'
                          a11yText='Navigate to the home page'
                          label='< Back to use cases'
                          extraClasses='mx-auto block text-left'
                        />
                      </div>
                      <div class='item w-2/3 h-auto'></div>
                      <div class='item w-1/3 h-auto'>
                        <FancyLink
                          destination='/'
                          a11yText='Navigate to the home page'
                          label='Next >'
                          extraClasses='mx-auto block text-right'
                        />
                      </div>
                    </div>
                  </Container>
                </m.main>

                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
