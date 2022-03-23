import Image from 'next/image';
import FancyLink from './fancyLink';
import ReactPlayer from 'react-player';

// Import Images

import image1 from '../assets/usecases/tddashboard_hero.png';
import image2 from '../assets/usecases/cibcaccounts_hero.webp';
import image3 from '../assets/usecases/tdinsights_hero.png';
import cibcnab from '../assets/usecases/cibcnab_hero.webp';
import beon from '../assets/usecases/beon_hero.webp';

const usecases = [
  {
    id: 0,

    name: 'TD Dashboard',
    description:
      'TD Mobile Banking went through a complete overhaul to implement a dashboard like landing page.',
    link: '/usecases/td_dashboard2',
    image: image1,
    color: 'bg-slate-200',
  },
  /* {
    id: 1,

    name: 'CIBC Account Open',
    description: '***____',
    link: '/usecases/cibc_account_open',
    image: image2,
    color: 'bg-white',
  }, */

  {
    id: 1,

    name: 'TD Insights',
    description: '***____ ',
    link: '/usecases/td_insights',
    image: image3,
    color: 'bg-green-50',
  },
  {
    id: 2,

    name: 'CIBC & NAB Collab',
    description: '***Solving the POS currency conversion',
    link: '/usecases/cibc_nab',
    image: cibcnab,
    color: 'bg-red-50',
  },
  {
    id: 3,

    name: 'BEON Performance',
    description: '***Solving the POS currency conversion',
    link: '/usecases/beon2',
    image: beon,
    color: 'bg-orange-50',
  },
  {
    id: 4,

    name: 'Ordering data tables',
    description: '***Solving the POS currency conversion',
    link: '/usecases/element_tables2',
    image: beon,
    color: 'bg-blue-50',
  },
];

export default function PortfolioList() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <ul className='z-0 max-w-full px-8 mx-auto -mt-20 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl homepage'>
      {usecases.map((usecases) => (
        <li
          key={usecases.id}
          className={
            usecases.id % 2 === 0
              ? 'md:flex  overflow-hidden shadow-custom '
              : 'md:flex md:flex-row-reverse  mb-8 md:mb-12  overflow-hidden shadow-custom'
          }
        >
          <div className='relative overflow-hidden bg-white item md:w-1/2 h-[18rem] sm:h-[18rem] md:h-[22rem] lg:h-[34rem]'>
            <Image
              alt='Mountains'
              src={usecases.image}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div
            className={[
              'item md:w-1/2 px-6 py-12 md:py-12 lg:py-24 sm:px-8 md:px-8 xl:p-20 overflow-hidden',
              usecases.color,
            ].join(' ')}
          >
            <div className='pb-4 usecase'>
              <h2 className='usecase'>{usecases.name}</h2>
              <p className='usecase'>{usecases.description}</p>

              <FancyLink
                destination={usecases.link}
                a11yText='See portfolio item'
                label='Learn more'
                extraClasses='cta mt-4 sm:mt-12 md:mt-4 mb-4'
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
