import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <div className='flex flex-row max-w-full pt-24 mx-auto -mt-40 bg-gradient-to-bl bg-slate-100 rounded-tr-large'>
      <div className='flex-none px-2'></div>
      <div className='px-0 mx-auto mt-20 grow max-w-7xl md:mt-0 sm:px-4 md:px-4 xl:px-12'>
        <div className='px-2 pb-12 hero md:pt-44 md:pb-44 lg:pt-40 lg:pb-40 rounded-tr-huge'>
          <div className='flex-none w-8 lg:w-12'></div>
          <h1>New projects? Let's talk.</h1>
          <div className='mx-auto md:flex max-w-7xl '>
            <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
              <h4>Email</h4>
              <p>
                I’ve got over 12 years of experience working in web and native
                mobile design
              </p>
            </div>
            <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
              <h4>In Person</h4>
              <a
                href='mailto:lucas.czuchraj@gmail.com'
                target='_blank'
                className='text-lg font-light text-customblue hover:underline'
              >
                get in touch
              </a>
            </div>
            <div className='h-auto hero md:item md:w-1/2 content md:pr-16'>
              <h4>Social Media</h4>
              <p>It’s never to late to learn, discover and change</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-none px-2'></div>
    </div>
  );
}
