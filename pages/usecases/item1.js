import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

// Import Images
import Image from 'next/image';

import Image1 from '../../assets/global/placeholder.png';
import Placeholder from '../../assets/usecases/td.jpg';

// Content

const tag = 'Data Design';
const name =
  'Integrating older location based functionality the new mobile dashboard';
const description =
  'The queue essentially is a list of all Elements customer orders. The tables list everything from the vehicle that is being ordered, right down to the driver and insurance information. When a piece of work is done by one team, the order moves along until all teams have validated the data.';

export default function Item1() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title={name} />
      <Navbar />

      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-20'>
            <Container>
              <div className='portfolio mx-auto max-w-7xl mt-40 '>
                <h1 className='text-center'>{name}</h1>
                <h2>{description}</h2>
                <div className='block w-24 h-24 mx-auto text-center bg-green-300'>
                  Logo
                </div>
                <div className='block w-auto mx-auto text-center mt-10 text-sm font-bold '>
                  More projects from TD
                </div>
                <div class='flex justify-evenly mx-auto max-w-md text-center mt-2'>
                  <div class='item w-36   '>
                    <FancyLink
                      destination='/usecases/item1'
                      a11yText='TD for Me'
                      label='TD for Me'
                      extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    />
                  </div>
                  <div class='item w-36 '>
                    {' '}
                    <FancyLink
                      destination='/usecases/item1'
                      a11yText='TD for Me'
                      label='Mobile Dashboard'
                      extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    />
                  </div>
                  <div class='item w-36   '>
                    {' '}
                    <FancyLink
                      destination='/usecases/item1'
                      a11yText='TD for Me'
                      label='TD US Bill Pay'
                      extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    />
                  </div>
                </div>
                {/* Image */}
                <div
                  className='mt-20'
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '642px',
                  }}
                >
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <h3 className='portfolio pt-28'>
                  Testing whimsical iframe embed
                </h3>
                <iframe
                  style={{
                    position: 'relative',
                    style: 'border:none',
                    width: '100%',
                    height: '600px',
                  }}
                  src='https://whimsical.com/embed/8BUJjyjAmuNhwz619e7doa@2Ux7TurymMe9824yCcDs'
                ></iframe>

                <div className='content sm:flex mt-10 mb-20 '>
                  <p className='sm:item sm:w-1/2  sm:pr-8  mb-4'>
                    Due to the nature and planning of the project the ordering
                    platform was faced with a disjointed experience when it
                    comes to visualizing and working with large data sets. Not
                    only did the website suffer from inconsistent components,
                    but with every iteration, unique code was adding to the
                    inconsistencies. These data tables or queues were a major
                    functional component of the ordering system.
                  </p>

                  <p className='content sm:item sm:w-1/2  sm:pl-8 mb-4'>
                    The queue essentially is a list of all Elements customer
                    orders. The tables list everything from the vehicle that is
                    being ordered, right down to the driver and insurance
                    information. When a piece of work is done by one team, the
                    order moves along until all teams have validated the data.
                  </p>
                </div>
                {/* Image */}
                <div className='desktopimage'>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='mobileimage'>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <span className='inline-block font-medium bg-yellow-400 text-black  float-right  p-3 text-sm rounded-bl-2xl'>
                  Image caption goes here, lets see what happens when it's
                  really long. Image caption goes here, lets see what happens
                  when it's really long.
                </span>

                <h3 className='portfolio pt-28'>The design problem</h3>
                <div className='content sm:flex mt-10 mb-20 '>
                  <p className='sm:item sm:w-1/2  sm:pr-8  mb-4'>
                    Due to the nature and planning of the project the ordering
                    platform was faced with a disjointed experience when it
                    comes to visualizing and working with large data sets. Not
                    only did the website suffer from inconsistent components,
                    but with every iteration, unique code was adding to the
                    inconsistencies. These data tables or queues were a major
                    functional component of the ordering system.
                  </p>

                  <p className='content sm:item sm:w-1/2  sm:pl-8 mb-4'>
                    The queue essentially is a list of all Elements customer
                    orders. The tables list everything from the vehicle that is
                    being ordered, right down to the driver and insurance
                    information. When a piece of work is done by one team, the
                    order moves along until all teams have validated the data.
                  </p>
                </div>
                {/* Image */}
                <div className='desktopimage'>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='mobileimage '>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                {/* Image */}
                <div className='desktopimage mt-8 '>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='mobileimage mt-8'>
                  <Image
                    alt='Mountains'
                    src={Placeholder}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <span className='inline-block font-medium bg-slate-800 text-yellow-500  float-left  p-3 text-sm rounded-bl-2xl'>
                  Illustration showing...
                </span>

                <h3 className='mt-36'>Challenges and solutions</h3>
                <div className='sm:flex mt-10 mb-20 '>
                  <div className='content sm:item sm:w-1/3  mb-4'>
                    <h4>Data is king</h4>
                    <p>
                      One off the key observations and loudest set of feedback
                      from our users was that they wanted to maximize their
                      ability to view more data. This created an interesting
                      design challenge - how do you tightly pack a lot of data
                      onto the screen and still maintain a good level of
                      legibility.
                    </p>
                  </div>

                  <div className='content sm:item sm:w-1/3  sm:pl-8 mb-4'>
                    <h4>Multiple function to perform on a single order</h4>
                    <p>
                      Each unique data table presented itself with a challange.
                      Some functional features are common to all data tables,
                      some needed very custom solutions. A way to solve this was
                      to introduce overflow menus that can be customized based
                      on table and or based on orders within a single table. The
                      original design would expose the actions on the page which
                      made them hard to maintain and wouldnt allow for a
                      scalable solution
                    </p>
                  </div>
                  <div className='content sm:item sm:w-1/3  sm:pl-8 mb-4'>
                    <h4>Screen size and real estate issues</h4>
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
            </Container>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
