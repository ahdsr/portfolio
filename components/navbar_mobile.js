import { IoImageOutline } from 'react-icons/io5';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoChatboxOutline } from 'react-icons/io5';

import FancyLink from './fancyLink';

export default function NavbarMobile() {
  return (
    <div className='md:hidden sticky bottom-0 z-50 '>
      <nav class='bg-black flex overflow-x-auto h-20'>
        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500 '
        >
          <IoImageOutline className='w-7 h-7 text-yellow-600 mb-2' />

          <FancyLink
            destination='/'
            a11yText='Use Cases'
            label='Use Cases'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <IoFlaskOutline className='w-7 h-7 text-yellow-600 mb-2' />
          <FancyLink
            destination='/about'
            a11yText='WIP'
            label='WIP'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <IoPersonCircleOutline className='w-7 h-7 text-yellow-600 mb-2' />
          <FancyLink
            destination='/resume'
            a11yText='Resume'
            label='Resume'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <IoChatboxOutline className='w-7 h-7 text-yellow-600 mb-2' />
          <FancyLink
            destination='/blog'
            a11yText='Blog'
            label='Blog'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>
      </nav>
    </div>
  );
}
