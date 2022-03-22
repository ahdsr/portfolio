import React from 'react';

function Brief({
  projectb1,
  projectb2,
  roleb1,
  roleb2,
  duration,
  toolsb1,
  toolsb2,
  toolsb3,
}) {
  return (
    <section className='px-8 py-8 mx-auto md:py-12 md:px-16 lg:max-w-6xl xl:max-w-7xl '>
      <div className='grid grid-cols-2 pt-8 text-base border-t md:gap-4 md:flex md:flex-row text-slate-700 border-t-slate-300'>
        <div className='md:flex-1'>
          <h3>Project</h3>
          <ul className='text-sm md:pt-2'>
            <li>{projectb1}</li>
            <li>{projectb2}</li>
          </ul>
        </div>
        <div className='md:flex-1'>
          <h3>Role</h3>
          <ul className='text-sm md:pt-2'>
            <li>{roleb1}</li>
            <li>{roleb2}</li>
          </ul>
        </div>
        <div className='md:flex-1'>
          <h3>Duration</h3>
          <ul className='text-sm md:pt-2'>
            <li>{duration}</li>
          </ul>
        </div>
        <div className='md:flex-1'>
          <h3>Tools</h3>
          <ul className='text-sm md:pt-2'>
            <li>{toolsb1}</li>
            <li>{toolsb2}</li>
            <li>{toolsb3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Brief;
