import FancyLink from './fancyLink';

export default function Footer() {
  return (
    <div className='block border-t border-black py-4 bg-yellow-500 text-black '>
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
  );
}
