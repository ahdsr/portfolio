import { IoImageOutline } from 'react-icons/io5';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoChatboxOutline } from 'react-icons/io5';

import FancyLink from './fancyLink';

export default function NavbarMobile() {
  return (
    <div className='md:hidden sticky bottom-0 z-50 '>
      <nav className='bg-black flex overflow-x-auto h-20 pt-3'>
        <div
          className='flex flex-col flex-grow items-center justify-top 
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out  text-slate-800 '
        >
          <IoImageOutline className='w-6 h-6 text-yellow-600 ' />

          <FancyLink
            destination='/'
            a11yText='Use Cases'
            label='Use Cases'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-top
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out  text-slate-800'
        >
          <IoFlaskOutline className='w-6 h-6 text-yellow-600 ' />
          <FancyLink
            destination='/portfolio'
            a11yText='Work in Progress'
            label='WIP'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-top
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out  text-slate-800'
        >
          <IoPersonCircleOutline className='w-6 h-6 text-yellow-600 ' />
          <FancyLink
            destination='/resume'
            a11yText='Resume'
            label='Resume'
            extraClasses='tinytext text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-top
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out  text-slate-800'
        >
          <IoChatboxOutline className='w-6 h-6 text-yellow-600 ' />
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
