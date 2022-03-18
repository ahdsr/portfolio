import React from 'react';

export default function Testimonial({ quote }) {
  return (
    <div className='p-4 m-2 text-gray-800 bg-white rounded-lg shadow'>
      <div className='mb-2'>
        <div className='h-3 text-4xl text-left text-gray-300'>“</div>
        <p className='px-12 font-normal text-center text-gray-600'>{quote}</p>
        <div className='h-3 text-4xl text-right text-gray-300'>”</div>
      </div>
    </div>
  );
}
