import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//blog2 Images
import Image from 'next/image';
import avatarLivelabs from '../assets/global/avatar_livelabs.webp';
import avatarCIBC from '../assets/global/avatar_cibc.webp';
import avatarOM from '../assets/global/avatar_om.webp';
import avatarTD from '../assets/global/avatar_td.webp';
import avatarRSA from '../assets/global/avatar_rsa.webp';
import avatarElement from '../assets/global/avatar_element.webp';

const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const username = 'Lucas C';
const profile = 'Admin';
const profilePhoto =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function NavigationFull() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='w-screen h-screen bg-black'>
            <div className='px-24 mx-auto text-center bg-black'>
              <div className='grid grid-cols-4 bg-black'>
                <motion.div
                  animate={{ x: 0, y: 50 }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                >
                  <div className='text-5xl font-bold text-teal-400 bg-black bg-opacity-90'>
                    <Link href='/'>
                      <a aria-label='asd'>Use Cases</a>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ x: 0, y: 50 }}
                  transition={{ ease: 'easeInOut', duration: 1, delay: 0.1 }}
                >
                  <div className='text-5xl font-bold text-teal-400 bg-black bg-opacity-90'>
                    <Link href='/'>
                      <a aria-label='asd'>Use Cases</a>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ x: 0, y: 50 }}
                  transition={{ ease: 'easeInOut', duration: 1, delay: 0.2 }}
                >
                  <div className='text-5xl font-bold text-teal-400 bg-black bg-opacity-90'>
                    <Link href='/'>
                      <a aria-label='asd'>Use Cases</a>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ x: 0, y: 50 }}
                  transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
                >
                  <div className='text-5xl font-bold text-teal-400 bg-black bg-opacity-90'>
                    <Link href='/'>
                      <a aria-label='asd'>Use Cases</a>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
