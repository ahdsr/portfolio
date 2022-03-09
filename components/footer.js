import FancyLink from './fancyLink';
import Container from '@/components/container';

export default function Footer() {
  return (
    <footer className='mb-4'>
      <Container>
        <div className='border-t border-black py-4 bg-yellow-500 text-black px-4'>
          <div className='flex flex-wrap text-xs'>
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
                  rel='noopener noreferrer'
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
    </footer>
  );
}
