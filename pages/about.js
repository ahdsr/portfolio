import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

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
        <m.div initial='initial' animate='enter'>
          <m.main variants={fade} className='pb-4'>
            <Container>
              <div className='px-4 pt-40 content'>
                <div className='mx-auto overflow-hidden max-w-7xl md:flex md:flex-wrap'>
                  <div className='mb-4 overflow-hidden content md:w-2/5 md:pr-10'>
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

                  <div className='mb-4 overflow-hidden content md:w-3/5 md:pl-10'>
                    <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>
                      My journey into front end development
                    </h1>

                    <div className='p-8 pt-12 content bg-slate-100'>
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
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
