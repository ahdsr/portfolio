import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// Molecules

import DateTag from '@/components/molecules/dateTag';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Resume' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4'>
            <Container>
              <div className='content mt-40'>
                <div className='mx-auto max-w-7xl md:flex md:flex-wrap overflow-hidden'>
                  <div className='content mb-4 md:w-2/5 overflow-hidden md:pr-10'>
                    <h1>Credit</h1>
                    <ul className='customlink'>
                      <li>
                        <a
                          href='https://github.com/samuelgoddard/next-tailwind-motion'
                          target='_blank'
                          className='block px-1 text-customblue hover:underline'
                        >
                          nextjs-tailwind-motion
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='content mb-4 md:w-3/5 overflow-hidden md:pl-10'>
                    <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>
                      My journey into front end development
                    </h1>

                    <div className='content pt-12 bg-slate-100 p-8'>
                      <DateTag date={'Javascript Frameworks'} />
                      <h3>Next JS</h3>
                      <h4>
                        https://github.com/samuelgoddard/next-tailwind-motion
                      </h4>
                      <ul>
                        <li>
                          Use this section to go into recent experience with
                          front end development
                        </li>
                        <li>
                          Use this section to go into recent experience with
                          front end development
                        </li>
                        <li>
                          Use this section to go into recent experience with
                          front end development
                        </li>
                      </ul>
                    </div>
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
