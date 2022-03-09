import { CollectionIcon } from '@heroicons/react/outline';
import { LightBulbIcon } from '@heroicons/react/solid';
import { PhotographIcon } from '@heroicons/react/solid';
import { DocumentTextIcon } from '@heroicons/react/solid';
import FancyLink from './fancyLink';

export default function NavbarMobile() {
  return (
    <div className='sticky bottom-0 z-50 '>
      <nav class='bg-slate-900 bg-opacity-95 flex overflow-x-auto h-16'>
        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <CollectionIcon className='w-6 h-6 text-yellow-600' />
          <FancyLink
            destination='/'
            a11yText='Use Cases'
            label='Use Cases'
            extraClasses='text-xs text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <LightBulbIcon className='w-6 h-6 text-yellow-600' />
          <FancyLink
            destination='/about'
            a11yText='WIP'
            label='WIP'
            extraClasses='text-xs text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <DocumentTextIcon className='w-6 h-6 text-yellow-600' />
          <FancyLink
            destination='/resume'
            a11yText='Resume'
            label='Resume'
            extraClasses='text-xs text-yellow-500 uppercase'
          />
        </div>

        <div
          className='flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-black text-orange-500'
        >
          <DocumentTextIcon className='w-6 h-6 text-yellow-600' />
          <FancyLink
            destination='/blog'
            a11yText='Blog'
            label='Blog'
            extraClasses='text-xs text-yellow-500 uppercase'
          />
        </div>
      </nav>
    </div>
  );
}
