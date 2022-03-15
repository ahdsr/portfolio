import React, { useState, useEffect } from 'react';
import FancyImage from '@/components/fancyimage';
import Masonry from 'react-masonry-css';

import image1 from '../assets/3drenders/city1.jpg';
import image2 from '../assets/3drenders/city2.jpg';
import image3 from '../assets/3drenders/djm1.jpg';
import image4 from '../assets/3drenders/djm2.jpg';
import image5 from '../assets/3drenders/djm3.jpg';

const portfolio = [
  {
    name: '3D',
    category: ['all'],
    image: image1,
  },
  {
    name: 'Mobile',
    category: ['all', '3d', 'mobile'],
    image: image2,
  },
  {
    name: 'Photos',
    category: ['all', 'photos', 'rendered'],
    image: image3,
  },
  {
    name: 'Websites',
    category: ['all', 'frontend', 'photos'],
    image: image4,
  },
  {
    name: 'Other',
    category: ['all', 'others', '3d', 'photos'],
    image: image5,
  },
];

function Gallery() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className='portfolio__labels'>
        <div
          className='p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200 '
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All
        </div>
        <div
          className='p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200 '
          active={filter === 'frontend'}
          onClick={() => setFilter('3d')}
        >
          3D
        </div>
        <div
          className='p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200 '
          active={filter === 'mobile'}
          onClick={() => setFilter('rendered')}
        >
          Rendered
        </div>
        <div
          className='p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200 '
          active={filter === 'ux-ui'}
          onClick={() => setFilter('photos')}
        >
          Photos
        </div>
        <div
          className='p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200 '
          active={filter === 'others'}
          onClick={() => setFilter('others')}
        >
          Others
        </div>
      </div>
      <div className='min-h-screen transition-all height 0.66s ease-out'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {projects.map((item) =>
            item.filtered === true ? (
              <FancyImage
                key={item.name}
                src={item.image}
                transitionDuration={300}
                zoomMargin={40}
                overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
                layout='intrinsic'
              />
            ) : (
              ''
            )
          )}
        </Masonry>
      </div>
    </>
  );
}

export default Gallery;
