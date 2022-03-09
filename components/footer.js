import FancyLink from './fancyLink';
import Container from './container';

export default function Footer() {
  return (
    <Container>
      <div className='mx-auto max-w-7xl block border-t border-black py-4 text-black px-8 h-24 '>
        <div className='flex flex-wrap text-xs '>
          <div className='flex space-x-1 mb-1 md:mb-0'>
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              label='Portfolio Info'
            />
          </div>

          <div className='md:ml-auto w-full md:w-auto flex space-x-1'>
            <span className='block'>
              Maintained by{' '}
              <a
                href='mailto:lucas.czuchraj@gmail.com'
                target='_blank'
                rel=''
                className='underline hover:text-gray-500 focus:text-gray-500'
              >
                Lucas Czuchraj
              </a>
              © 2022 ahdsr.com
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
