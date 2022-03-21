import React from 'react';

function Brief() {
  return (
    <section className='px-8 py-12 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl '>
      <div className='flex flex-row gap-4 text-base border-t text-slate-700 border-t-slate-300'>
        <div className='flex-1'>
          <h3>Project Type</h3>
          <ul className='pt-2 text-sm'>
            <li>Web design</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3>My Role</h3>
          <ul className='pt-2 text-sm'>
            <li>UI Design Consultant</li>
            <li>UX Designer</li>
            <li>Prototyping</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3>Duration</h3>
          <ul className='pt-2 text-sm'>
            <li>4 months</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3>Tools</h3>
          <ul className='pt-2 text-sm'>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Brief;
