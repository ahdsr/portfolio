import { IoImageOutline } from 'react-icons/io5';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoChatboxOutline } from 'react-icons/io5';

import FancyLink from './fancyLink';

export default function NavbarMobile() {
  return (
    <div className='sticky bottom-0 z-50 md:hidden '>
      <nav className='flex h-24 pt-2 overflow-x-auto border-t bg-slate-50 border-t-slate-200 '>
        <div className='flex flex-col items-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out justify-top text-slate-800 '>
          <IoImageOutline className='w-10 h-10 p-2 mb-2 text-customblue text-opacity-80 ' />

          <FancyLink
            destination='/'
            a11yText='About'
            label='About'
            extraClasses='tinytext text-slate-600  uppercase'
          />
        </div>

        <div className='flex flex-col items-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out justify-top text-slate-800'>
          <IoFlaskOutline className='w-10 h-10 p-2 mb-2 text-customblue text-opacity-80 ' />
          <FancyLink
            destination='/portfolio'
            a11yText='Portfolio'
            label='Portfolio'
            extraClasses='tinytext text-slate-600 uppercase tracking-tight'
          />
        </div>

        <div className='flex flex-col items-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out justify-top text-slate-800'>
          <IoPersonCircleOutline className='w-10 h-10 p-2 mb-2 text-customblue text-opacity-80 ' />
          <FancyLink
            destination='/resume2'
            a11yText='Resume'
            label='Resume'
            extraClasses='tinytext text-slate-600 uppercase tracking-tight'
          />
        </div>

        <div className='flex flex-col items-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out justify-top text-slate-800'>
          <IoPersonCircleOutline className='w-12 h-10 p-2 mb-2 text-customblue text-opacity-80 ' />
          <FancyLink
            destination='/resume2'
            a11yText='Resume'
            label='Resume'
            extraClasses='tinytext text-slate-600 uppercase tracking-tight'
          />
        </div>

        <div className='flex flex-col items-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out justify-top text-slate-800'>
          <IoChatboxOutline className='w-10 h-10 p-2 mb-2 text-customblue text-opacity-80 ' />
          <FancyLink
            destination='/blog2'
            a11yText='Blog'
            label='Blog'
            extraClasses='tinytext text-slate-600 uppercase tracking-tight'
          />
        </div>
      </nav>
    </div>
  );
}
