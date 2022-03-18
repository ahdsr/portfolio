import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <div className='text-white bg-customblue'>
      <div className='px-8 mx-auto md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <div className='pt-12 pb-12'>
          <div className='block text-sm'>
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              label='Portfolio Info'
            />
          </div>

          <div className='block text-sm'>
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
            >
              LinkedIn
            </a>
          </div>

          <div className='block text-sm '>
            {' '}
            ©2022 Lucas Czuchraj. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
