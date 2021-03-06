import { useState } from 'react';
import { Tab } from '@headlessui/react';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

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
import image13 from '../assets/3drenders/djmnight_02.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  let [categories] = useState({
    Music: [
      {
        id: 1,
        image: image3,
      },
      {
        id: 2,
        image: image4,
      },
      {
        id: 3,
        image: image5,
      },
      {
        id: 4,
        image: image10,
      },
      {
        id: 5,
        image: image11,
      },
      {
        id: 6,
        image: image12,
      },
      {
        id: 7,
        image: image13,
      },
    ],
    Scene: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image7,
      },
      {
        id: 4,
        image: image8,
      },
    ],
    Photo: [
      {
        id: 1,
        image: image5,
      },
      {
        id: 2,
        image: image5,
      },
    ],
    Mobile: [
      {
        id: 1,
        image: image5,
      },
      {
        id: 2,
        image: image5,
      },
    ],
  });

  return (
    <div className='w-full mt-24'>
      <Tab.Group>
        <Tab.List className='flex mb-4 rounded-xl'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  ' font-sans w-full py-2.5 leading-5 font-medium text-blue-700 mb-8',

                  selected
                    ? 'border-b border-blue-700'
                    : 'transition-all text-blue-900 hover:bg-white/[0.12] hover:border-blue-700'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=''>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames('bg-white rounded-xl ')}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
              >
                {posts.map((post) => (
                  <FancyImage
                    key={post.id}
                    src={post.image}
                    transitionDuration={300}
                    zoomMargin={40}
                    overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                    layout='intrinsic'
                    className=''
                  />
                ))}
              </Masonry>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
