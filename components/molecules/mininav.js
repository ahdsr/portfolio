import React from 'react';

function Mininav({ anchorlink1, anchorlink2 }) {
  return (
    <div className='sticky z-50 w-56 p-8 bg-yellow-500 h-96 top-24 left-24'>
      <ul>
        <li>
          <a href={anchorlink1} className='go-to-end' data-scroll-to>
            One
          </a>
        </li>
        <li>
          <a href={anchorlink2} className='go-to-end' data-scroll-to>
            Two
          </a>
        </li>
        <li>
          <a href='#sectionC' className='go-to-end' data-scroll-to>
            Three
          </a>
        </li>
        <li>
          <a href='#sectionD' className='go-to-end' data-scroll-to>
            Four
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Mininav;
