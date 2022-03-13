import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <div className=' bg-customblue'>
      <div className='items-center justify-between mx-auto text-white max-w-screen-2xl md:flex h-36'>
        <div className='block text-center md:flex-1 '>
          <FancyLink
            destination='/about'
            a11yText='Navigate to the about page'
            label='Portfolio Info'
          />
        </div>

        <div className='block md:text-center md:flex-1 '>
          <a href='https://www.linkedin.com/in/lucasczuchraj/' target='_blank'>
            LinkedIn
          </a>
        </div>
        <div className='block md:text-center md:flex-1 '>
          Lucas Czuchraj © 2022
        </div>
      </div>
    </div>
  );
}
