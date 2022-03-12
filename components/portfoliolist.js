import Image from 'next/image';
import FancyLink from './fancyLink';

// Import Images

import image1 from '../assets/usecases/element_datatables_hero.png';
import image2 from '../assets/usecases/tdforme_hero.png';
import image3 from '../assets/usecases/highpreistess_hero.png';

const usecases = [
  {
    id: 0,
    tag: 'Mobile Native',
    name: 'TD for Me',
    description:
      'TD For Me is a series of responsive page framed into the main TD Mobile Banking App. The usage of this location based tool has been steadily declining. We explore and tackle customer engagement.',
    link: '/underconstruction',
    image: image2,
    color: 'bg-slate-900',
  },
  {
    id: 1,
    tag: 'Responsive Web',
    name: 'High Priestess Tarot',
    description:
      'When an up and coming tarot card reader asks you to develop her web presence you jump on board. Lets have a look at this one page simple responsive solution.',
    link: '/underconstruction',
    image: image3,
    color: 'bg-slate-900',
  },
  {
    id: 2,
    tag: 'Data Design',
    name: 'Ordering Data Tables at Element Fleet',
    description:
      'When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done. Lets take a look at some of the unique challenges working with big data brings.',
    link: '/usecases/item1',
    image: image1,
    color: 'bg-slate-900',
  },
];

export default function PortfolioList() {
  return (
    <ul className='z-0 max-w-full px-4 mx-auto -mt-20 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl '>
      {usecases.map((usecases) => (
        <li
          key={usecases.id}
          className={
            usecases.id % 2 === 0
              ? 'md:flex shadow-items mb-8 md:mb-12 rounded-b-large overflow-hidden'
              : 'md:flex md:flex-row-reverse shadow-items mb-8 md:mb-12 rounded-b-large overflow-hidden'
          }
        >
          <div className='block overflow-hidden bg-black item md:w-1/2 rounded-t-large'>
            <Image alt='Mountains' src={usecases.image} layout='responsive' />
          </div>

          <div
            className={[
              'item md:w-1/2 px-6 md:p-16 xl:p-20 rounded-b-large overflow-hidden',
              usecases.color,
            ].join(' ')}
          >
            <div className='usecases'>
              <p className='block p-2 w-fit bg-slate-100'>{usecases.tag}</p>
              <h2 className='usecases'>{usecases.name}</h2>
              <p className='font-medium text-white'>{usecases.description}</p>

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
