import React from 'react';
import FancyLink from '@/components/fancyLink';

function LocoPageHeading({
  heading,
  number,
  destination,
  a11yText,
  label,
  extraClasses,
}) {
  return (
    <>
      <div className='inline-block p-3 m-2 mx-auto text-2xl font-semibold tracking-tight text-yellow-500 uppercase rounded-full bg-[#FF3A3A] bg-opacity-70  w-24 h-24 shadow-custom z-0'>
        {number}
      </div>
      <div
        className='z-10 pr-24 mx-auto mb-12 font-bold tracking-tight uppercase md:text-3xl lg:text-5xl text-stone-100'
        data-scroll
        data-scroll-speed='1'
      >
        {heading}
      </div>
      {/*  <FancyLink
        destination={destination}
        a11yText={a11yText}
        label={label}
        extraClasses={extraClasses}
      /> */}
    </>
  );
}

export default LocoPageHeading;
