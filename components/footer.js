import FancyLink from './fancyLink';
import Container from './container';

import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='text-white bg-customblue'>
      <div className='px-8 mx-auto md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <div className='flex items-center h-6 pt-12 pb-12 space-x-6 text-sm flex-co'>
          <div className='block text-sm'>
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              label='Portfolio Info'
            />
          </div>

          <div className='flex flex-row items-center h-6 text-sm'>
            <AiFillLinkedin className='w-6 h-6' />
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              className='ml-2'
            >
              LinkedIn
            </a>
          </div>

          <div className='flex flex-row items-center h-6 text-sm'>
            <AiOutlineMail className='w-5 h-5' />
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              className='ml-2'
            >
              Contact Me
            </a>
          </div>

          <div className='block text-sm'>
            {' '}
            ©2022 Lucas Czuchraj. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
