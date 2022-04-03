import React from 'react';
import TextAnim from '@/components/molecules/LocoTextAnim';
import FancyLink from '@/components/fancyLink';
import Image from 'next/image';

import image1 from '../../assets/usecases/tddashboard_hero.webp';
import cibcnab from '../../assets/usecases/cibcnab_hero.webp';
import beon from '../../assets/usecases/beon_hero.webp';

const usecases = [
  {
    id: 0,
    project: 'TD Dashboard',
    description:
      'TD Mobile Banking went through a complete overhaul to implement a dashboard like landing page.',
    destination: '/casestudy',
    a11yText: 'TD Dashboard',
    label: 'See more',
    extraClasses: '',
    imgSrc: image1,
    imgAlt: 'Mobile App',
    layout: 'intrinsic',
    objectFit: 'cover',
  },
  {
    id: 1,
    project: 'CIBC, NAB, VISA',
    description:
      'TD Mobile Banking went through a complete overhaul to implement a dashboard like landing page.',
    destination: '/casestudy',
    a11yText: 'TD Dashboard',
    label: 'See more',
    extraClasses: '',
    imgSrc: cibcnab,
    imgAlt: 'Mobile App',
    layout: 'intrinsic',
    objectFit: 'cover',
  },
  {
    id: 2,
    project: 'CASE STUDY',
    description:
      'TD Mobile Banking went through a complete overhaul to implement a dashboard like landing page. ',
    destination: '/casestudy',
    a11yText: 'TD Dashboard',
    label: 'See more',
    extraClasses: '',
    imgSrc: cibcnab,
    imgAlt: 'Mobile App',
    layout: 'intrinsic',
    objectFit: 'cover',
  },
];

function LocoCaseStudyHero(props) {
  return (
    <div className='grid grid-cols-2 gap-12'>
      {usecases.map((usecases) => (
        <div
          className='mb-24 md:grid md:grid-cols-2 bg-[#070E18] hover:shadow-custom hover:scale-95 hover:bg-opacity-20 duration-700 ease-in-out rounded-lg p-12'
          key={usecases.id}
        >
          <div className='p-4 lg:p-4'>
            <div className='mb-8 text-2xl font-thin text-yellow-500 lg:mb-12 lg:text-4xl lg:font-medium leading-2'>
              {usecases.project}
            </div>
            <TextAnim text={usecases.description} />
            <FancyLink
              destination={usecases.destination}
              a11yText={usecases.a11yText}
              label={usecases.label}
              extraClasses='cta inline-block mt-12'
            />
          </div>
          <div className='overflow-hidden transition-all duration-700 ease-in-out rounded-lg hover:scale-110 shrink opacity-60 hover:opacity-90'>
            <Image
              src={usecases.imgSrc}
              alt={usecases.imgAlt}
              layout={usecases.layout}
              objectFit={usecases.objectFit}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocoCaseStudyHero;
