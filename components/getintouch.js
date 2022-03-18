import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <div className='px-8 mx-auto my-12 md:my-24 md:max-w-3xl md:px-16 lg:max-w-6xl xl:max-w-7xl'>
      <div className='font-serif text-3xl font-semibold tracking-tight md:text-5xl text-slate-800'>
        New projects?
      </div>
      <a
        href='mailto:lucas.czuchraj@gmail.com'
        target='_blank'
        className='block font-serif text-3xl font-semibold tracking-tight md:text-5xl text-customblue hover:underline'
      >
        Let't talk.
      </a>
    </div>
  );
}
