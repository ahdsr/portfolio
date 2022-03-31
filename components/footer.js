import FancyLink from './fancyLink';
import Container from './container';

import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='text-white bg-customblue '>
      <div className='px-8 mx-auto md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <div className='flex flex-row items-center h-6 pt-12 pb-12 space-x-6 '>
          <div className='flex items-center h-6 text-xs'>
            <AiFillLinkedin className='w-6 h-6 ' />
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              className='ml-2 font-mono'
            >
              LinkedIn
            </a>
          </div>

          <div className='flex items-center h-6 text-xs'>
            <AiOutlineMail className='w-5 h-5' />
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              className='ml-2 font-mono'
            >
              Contact Me
            </a>
          </div>

          <div className='flex flex-row font-mono text-xs '>
            <FancyLink
              destination='/about'
              a11yText='Navigate to site info'
              label='Site Info'
            />
          </div>

          <div className='flex items-center h-6 font-mono text-xs'>
            ©2022 Lucas Czuchraj. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
