import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <Container>
      <div className='customlink mx-auto max-w-7xl block border-t border-black py-4 text-black px-1 h-24'>
        <div className='flex flex-wrap text-xs'>
          <div className=' flex mb-1 md:mb-0'>
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              label='Portfolio Info'
            />
          </div>
          <span className='block ml-4'>
            <a
              href='https://www.linkedin.com/in/lucasczuchraj/'
              target='_blank'
              extraClasses='underline hover:text-gray-500 focus:text-gray-500'
            >
              LinkedIn
            </a>
          </span>

          <div className='md:ml-auto w-full md:w-auto flex'>
            <span className='block'>
              <a
                href='mailto:lucas.czuchraj@gmail.com'
                target='_blank'
                extraClasses='underline hover:text-gray-500 focus:text-gray-500'
              ></a>{' '}
              © 2022
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
