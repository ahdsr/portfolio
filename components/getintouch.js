import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <div className='mx-auto  text-center text-5xl py-8 md:py-20 bg-customyellow'>
      <p className='customlink block font-extrabold text-lg sm:text-xl md:text-4xl tracking-tighter pb-2 text-slate-800'>
        I am taking new projects, so if you'd like please
      </p>
      <a
        href='mailto:lucas.czuchraj@gmail.com'
        target='_blank'
        className='block font-bold text-4xl sm:text-3xl md:text-6xl tracking-tighter pb-4 text-customblue hover:underline'
      >
        get in touch
      </a>

      <div className='inline-block w-14 h-14 bg-yellow-500 self-center rounded-full'>
        <a
          href='mailto:lucas.czuchraj@gmail.com'
          target='_blank'
          className='block font-bold text-3xl sm:text-3xl md:text-5xl tracking-tighter pb-4 text-customblue hover:underline'
        >
          <IoChatboxOutline className=' inline-flex w-5 h-5 object-center self-center mt-4 sm:mt-0 text-customblue ' />
        </a>
      </div>
    </div>
  );
}
