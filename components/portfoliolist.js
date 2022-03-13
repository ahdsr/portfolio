import Image from 'next/image';
import FancyLink from './fancyLink';
import ReactPlayer from 'react-player';

// Import Images

import image1 from '../assets/global/placeholder.png';
import image2 from '../assets/usecases/tdforme_hero.png';
import image3 from '../assets/usecases/highpreistess_hero.png';

const usecases = [
  {
    id: 0,

    name: 'TD for Me',
    description:
      'TD For Me is a series of responsive page framed into the main TD Mobile Banking App. ',
    link: '/usecases/item1',
    image: image1,
    color: 'bg-white',
  },
  {
    id: 1,

    name: 'High Priestess Tarot',
    description:
      'When an up and coming tarot card reader asks you to develop her web presence you jump on board. ',
    link: '/usecases/item2',
    image: image2,
    color: 'bg-white',
  },
  {
    id: 2,

    name: 'Ordering Data Tables at Element Fleet',
    description:
      'When it comes to understanding and processing data, a work horse of a flexible. ',
    link: '/usecases/item1',
    image: image3,
    color: 'bg-white',
  },
];

export default function PortfolioList() {
  return (
    <ul className='z-0 max-w-full px-8 mx-auto -mt-20 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl '>
      {usecases.map((usecases) => (
        <li
          key={usecases.id}
          className={
            usecases.id % 2 === 0
              ? 'md:flex shadow-items mb-8 md:mb-12 rounded-b-large overflow-hidden '
              : 'md:flex md:flex-row-reverse shadow-items mb-8 md:mb-12 rounded-b-large overflow-hidden '
          }
        >
          <div className='block overflow-hidden bg-white item md:w-1/2 rounded-t-large h-96 md:h-auto'>
            <Image alt='Mountains' src={usecases.image} layout='responsive' />
          </div>

          <div
            className={[
              'item md:w-1/2 px-6 md:p-12 xl:p-20 rounded-b-large overflow-hidden',
              usecases.color,
            ].join(' ')}
          >
            <div className='usecases'>
              <h2 className='pt-8 usecases'>{usecases.name}</h2>
              <p className='text-sm text-white'>{usecases.description}</p>

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
