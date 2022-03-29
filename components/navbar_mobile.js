import { IoImageOutline } from 'react-icons/io5';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoChatboxOutline } from 'react-icons/io5';

import FancyLink from './fancyLink';

export default function NavbarMobile() {
  return (
    <div className='sticky bottom-0 z-50 md:hidden'>
      <nav className='h-20 pt-2 mx-auto bg-customblue'>
        <div className='grid grid-cols-4'>
          <div className='mx-auto text-sm text-center text-slate-800'>
            <IoImageOutline className='w-10 h-10 p-2 text-slate-300 text-opacity-80 ' />
            <FancyLink
              destination='/'
              a11yText='Use Cases'
              label='Cases'
              extraClasses='tinytext text-slate-300 uppercase s'
            />
          </div>

          <div className='mx-auto text-sm text-center text-slate-800'>
            <IoFlaskOutline className='w-10 h-10 p-2 text-blue-900 border rounded-full bg-cyan-400 border-slate-600 text-slate-300 text-opacity-80' />
            <FancyLink
              destination='/portfolio2'
              a11yText='Other Work'
              label='Other'
              extraClasses='tinytext text-slate-300 uppercase'
            />
          </div>

          <div className='mx-auto text-sm text-center text-slate-800'>
            <IoPersonCircleOutline className='w-10 h-10 p-2 text-slate-300 text-opacity-80 ' />
            <FancyLink
              destination='/resume2'
              a11yText='Resume'
              label='Resume'
              extraClasses='tinytext text-slate-300 uppercase'
            />
          </div>

          <div className='mx-auto text-sm text-center text-slate-800'>
            <IoChatboxOutline className='w-10 h-10 p-2 text-slate-300 text-opacity-80 ' />
            <FancyLink
              destination='/blog2'
              a11yText='Blog'
              label='Blog'
              extraClasses='tinytext text-slate-300 uppercase'
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
