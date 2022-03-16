import React from 'react';

export default function Testimonial({ quote }) {
  return (
    <div className='max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow m-8'>
      <div className='mb-2'>
        <div className='h-3 text-4xl text-left text-gray-300'>“</div>
        <p className='px-12 font-normal text-center text-gray-600'>{quote}</p>
        <div className='h-3 text-4xl text-right text-gray-300'>”</div>
      </div>
    </div>
  );
}
