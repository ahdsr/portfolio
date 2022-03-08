import Image from 'next/image';
import FancyLink from './fancyLink';

// Import Images

import image1 from '../assets/usecases/element_datatables_hero.png';
import image2 from '../assets/usecases/element_datatables_hero.png';
import image3 from '../assets/usecases/highpreistess_hero.png';

const usecases = [
  {
    id: 0,
    tag: 'Data Design',
    name: 'Element Data Tables',
    description:
      ' When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.',
    link: '/usecases/item1',
    image: image1,
    color: 'bg-cyan-300',
  },
  {
    id: 1,
    tag: 'Mobile Native',
    name: 'TD for Me',
    description:
      ' When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.',
    link: '/about',
    image: image2,
    color: 'bg-green-300',
  },
  {
    id: 2,
    tag: 'Responsive Web',
    name: 'High Priestess Tarot',
    description:
      ' When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.',
    link: '/about',
    image: image3,
    color: 'bg-purple-300',
  },
  {
    id: 3,
    tag: 'Responsive Web',
    name: 'High Priestess Tarot',
    description:
      ' When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.',
    link: '/about',
    image: image3,
    color: 'bg-purple-300',
  },
  {
    id: 4,
    tag: 'Responsive Web',
    name: 'High Priestess Tarot',
    description:
      ' When it comes to understanding and processing data, a work horse of a flexible and highly customizable table is needed to get the job done.',
    link: '/about',
    image: image3,
    color: 'bg-purple-300',
  },
];

export default function PortfolioList() {
  return (
    <ul className='mx-auto z-0 -mt-20 bg-white rounded-3xl '>
      {usecases.map((usecases) => (
        <li
          key={usecases.id}
          className={
            usecases.id % 2 === 0
              ? 'md:flex shadow-items mb-12 md:mb-20 rounded-3xl'
              : 'md:flex md:flex-row-reverse shadow-items mb-12 md:mb-20 rounded-3xl'
          }
        >
          <div
            className={[
              'item md:w-1/2 p-8 md:p-12 xl:p-24 rounded-3xl',
              usecases.color,
            ].join(' ')}
          >
            <div className='content '>
              <p className='block w-fit px-3 py-2 my-4 bg-slate-500 bg-opacity-20'>
                {usecases.tag}
              </p>
              <h3 className='text-3xl font-extrabold tracking-tight'>
                {usecases.name}
              </h3>
              <p className='font-medium'>{usecases.description}</p>

              <FancyLink
                destination={usecases.link}
                a11yText='See portfolio item'
                label='Learn more'
                extraClasses='block w-fit px-3 py-2 my-4 text-white bg-slate-800 hover:shadow-lg hover:scale-90 transition ease-in-out'
              />
            </div>
          </div>

          <div className='item md:w-1/2 h-auto rounded-3xl '>
            <Image
              alt='Mountains'
              src={usecases.image}
              layout='responsive'
              className=''
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
