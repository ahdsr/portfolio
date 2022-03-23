import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import Footer from '@/components/footer';
import GetInTouch from '@/components/getintouch';

import Tabs from '@/components/tabs';
import Image from 'next/image';
import ProductSelector from '../assets/global/cibc_product_selector.png';
import RSAMarketing from '../assets/global/rsa_marketing.png';
import RSAPortal from '../assets/global/rsa_portal.png';
import RSAQuote from '../assets/global/rsa_quote.png';

export default function Resume() {
  const containerRef = useRef(null);
  const breakpointColumnsObj2 = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='py-24 bg-white'>
            <div className='px-5 mx-auto mt-8 md:px-12 max-w-screen-2xl xl:max-w-screen-xl sm:pt-12'>
              <div className='pb-10 resume '>
                <h2>Client Work</h2>
                <p>A collection of other work</p>
                <Masonry
                  breakpointCols={breakpointColumnsObj2}
                  className='my-masonry-grid'
                  columnClassName='my-masonry-grid_column'
                >
                  <Link href='/usecases/cibc_productselector'>
                    <div className='overflow-hidden cursor-pointer'>
                      <Image
                        alt='Mountains'
                        src={ProductSelector}
                        layout='intrinsic'
                        objectFit='cover cursor-pointer'
                      />
                    </div>
                  </Link>
                  <Link href='/usecases/rsa_johnsonmarketing'>
                    <div className='cursor-pointer'>
                      <Image
                        alt='Mountains'
                        src={RSAMarketing}
                        layout='intrinsic'
                        objectFit='cover cursor-pointer'
                      />
                    </div>
                  </Link>
                  <Link href='/usecases/rsa_webbrokerportal'>
                    <div className='cursor-pointer'>
                      <Image
                        alt='Mountains'
                        src={RSAPortal}
                        layout='intrinsic'
                        objectFit='cover cursor-pointer'
                      />
                    </div>
                  </Link>
                  <Link href='/usecases/rsa_quotes'>
                    <div className='cursor-pointer'>
                      <Image
                        alt='Mountains'
                        src={RSAQuote}
                        layout='intrinsic'
                        objectFit='cover'
                      />
                    </div>
                  </Link>
                </Masonry>
                <h2>Other</h2>
                <Tabs />
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
