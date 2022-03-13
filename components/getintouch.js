import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <div className='pt-12 mx-auto md:pb-6 usecase max-w-screen-2xl xl:max-w-screen-xl'>
      <h1 className='heading3 '>
        New projects?{' '}
        <a
          href='mailto:lucas.czuchraj@gmail.com'
          target='_blank'
          className='block text-customblue hover:underline'
        >
          Let't talk.
        </a>
      </h1>
    </div>
  );
}
