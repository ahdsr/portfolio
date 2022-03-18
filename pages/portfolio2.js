import { useRef } from 'react';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';
import Gallery from '@/components/filter';
import Tabs from '@/components/tabs';

//blog2 Images
import image1 from '../assets/3drenders/city1.jpg';
import image2 from '../assets/3drenders/city2.jpg';
import image3 from '../assets/3drenders/djm1.jpg';
import image4 from '../assets/3drenders/djm2.jpg';
import image5 from '../assets/3drenders/djm3.jpg';
import image6 from '../assets/3drenders/house1.jpg';
import image7 from '../assets/3drenders/interior1.jpg';
import image8 from '../assets/3drenders/scene1.jpg';
import image9 from '../assets/3drenders/scene2.jpg';
import image10 from '../assets/3drenders/tech1.jpg';
import image11 from '../assets/3drenders/tech2.jpg';
import image12 from '../assets/3drenders/tech3.jpg';

export default function Resume() {
  const containerRef = useRef(null);
  const breakpointColumnsObj = {
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
          <m.main variants={fade} className='py-24 bg-white '>
            <div className='px-5 mx-auto mt-8 md:px-12 max-w-screen-2xl xl:max-w-screen-xl sm:pt-12'>
              <div className='pb-10 resume'>
                <h2>Other Work</h2>
                <Tabs />
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
