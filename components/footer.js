import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <div className='pb-10 resume'>
      <div className='px-5 pt-6 mx-auto mt-16 '>
        <FancyLink
          destination='/about'
          a11yText='Navigate to the about page'
          label='Portfolio Info'
        />
        <span className='block ml-4'>
          <a
            href='https://www.linkedin.com/in/lucasczuchraj/'
            target='_blank'
            extraClasses='underline hover:text-gray-500 focus:text-gray-500'
          >
            LinkedIn
          </a>
        </span>
        <a
          href='mailto:lucas.czuchraj@gmail.com'
          target='_blank'
          extraClasses='underline hover:text-gray-500 focus:text-gray-500'
        ></a>{' '}
        © 2022
      </div>
    </div>
  );
}
