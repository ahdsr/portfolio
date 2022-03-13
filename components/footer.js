import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <div className=' bg-customblue'>
      <div className='pt-8 mx-5 md:text-center max-w-7xl'>
        <div className='justify-between w-full text-white md:flex md:items-center h-36'>
          <div className='block text-left md:flex-1 '>
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              label='Portfolio Info'
            />
          </div>

          <div className='block md:text-center md:flex-1 '>
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              extraClasses='underline hover:text-gray-500 focus:text-gray-500'
            >
              LinkedIn
            </a>
          </div>
          <div className='block md:text-center md:flex-1 '>
            Lucas Czuchraj © 2022
          </div>
        </div>
      </div>
    </div>
  );
}
