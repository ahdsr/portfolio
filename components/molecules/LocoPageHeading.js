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
      <div className='inline-block p-3 m-2 mx-auto text-base font-semibold tracking-tight text-black uppercase rounded-full bg-customblue bg-opacity-70 md:text-sm'>
        {number}
      </div>
      <div
        className='mx-auto mb-12 font-thin tracking-tight uppercase md:text-3xl lg:text-5xl text-stone-100'
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
