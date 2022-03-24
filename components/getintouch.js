import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <div className='px-8 py-24 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
      <div
        className='font-mono text-2xl font-semibold tracking-tight text-slate-800'
        data-scroll
        data-scroll-speed='1'
        data-scroll-direction='horizontal'
        data-scroll-offset='100,200'
      >
        New projects?
      </div>

      <a
        href='mailto:lucas.czuchraj@gmail.com'
        target='_blank'
        className='block font-mono text-2xl font-black tracking-tighter md:text-3xl text-customblue hover:underline'
      >
        Let's get in touch
      </a>
    </div>
  );
}
