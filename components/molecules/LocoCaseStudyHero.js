import React from 'react';
import TextAnim from '@/components/molecules/textAnim';
import FancyLink from '@/components/fancyLink';
import Image from 'next/image';

import Placeholder from '../../assets/usecases/beon_hero.webp';

function LocoCaseStudyHero() {
  return (
    <div className=' mb-24 md:grid md:grid-cols-2 bg-[#0f0f0f] hover:shadow-custom hover:scale-95 hover:bg-opacity-20 duration-700 ease-in-out'>
      <div className='p-8 lg:p-24'>
        <div className='mb-8 text-2xl font-thin text-yellow-500 lg:mb-12 lg:text-6xl leading-2'>
          LONGER TITLE GOES HERE
        </div>
        <TextAnim
          text="As a designer, I've been lucky enough to be exposed to
          a vast number of employers, teams and projects. Each
          of them have given me a rewarding learning experience."
        />
        <FancyLink
          destination='/casestudy'
          a11yText='Check it'
          label='Check it'
          extraClasses='cta inline-block mt-12'
        />
      </div>
      <div className='overflow-hidden transition-all duration-700 ease-in-out rounded-lg hover:scale-110 shrink opacity-60 hover:opacity-90'>
        <Image
          alt='Mountains'
          src={Placeholder}
          layout='intrinsic'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default LocoCaseStudyHero;
