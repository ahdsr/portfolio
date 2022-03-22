import Image from 'next/image';
import FancyLink from './fancyLink';
import ReactPlayer from 'react-player';

// Import Images

import image1 from '../assets/usecases/tddashboard_hero.webp';
import image2 from '../assets/usecases/cibcaccounts_hero.webp';
import image3 from '../assets/usecases/highpreistess_hero.webp';
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
  /*  {
    id: 1,

    name: 'CIBC Account Open',
    description:
      '***When an up and coming tarot card reader asks you to develop her web presence you jump on board. ',
    link: '/usecases/cibc_account_open',
    image: image2,
    color: 'bg-white',
  },
  {
    id: 2,

    name: 'CIBC Digital Butler',
    description: '***AI added to mobile banking. ',
    link: '/usecases/cibc_digital_butler',
    image: image3,
    color: 'bg-white',
  }, */
  {
    id: 3,

    name: 'CIBC & NAB Collab',
    description: '***Solving the POS currency conversion',
    link: '/usecases/cibc_nab',
    image: cibcnab,
    color: 'bg-slate-200',
  },
  {
    id: 4,

    name: 'BEON Performance',
    description: '***Solving the POS currency conversion',
    link: '/usecases/beon2',
    image: beon,
    color: 'bg-slate-200',
  },
  {
    id: 5,

    name: 'Ordering data tables',
    description: '***Solving the POS currency conversion',
    link: '/usecases/element_tables2',
    image: beon,
    color: 'bg-slate-200',
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
    <ul className='z-0 max-w-full px-8 mx-auto -mt-20 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl'>
      {usecases.map((usecases) => (
        <li
          key={usecases.id}
          className={
            usecases.id % 2 === 0
              ? 'md:flex  mb-8 md:mb-12  overflow-hidden '
              : 'md:flex md:flex-row-reverse  mb-8 md:mb-12  overflow-hidden '
          }
        >
          <div className='block overflow-hidden bg-white item md:w-1/2 h-96 md:h-auto'>
            <Image alt='Mountains' src={usecases.image} layout='responsive' />
          </div>

          <div
            className={[
              'item md:w-1/2 px-6 md:px-12 xl:p-20 overflow-hidden',
              usecases.color,
            ].join(' ')}
          >
            <div className='usecases'>
              <h2 className='usecases'>{usecases.name}</h2>
              <p className=''>{usecases.description}</p>

              <FancyLink
                destination={usecases.link}
                a11yText='See portfolio item'
                label='Learn more'
                extraClasses='cta mb-8'
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
