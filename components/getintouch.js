import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function GetInTouch() {
  return (
    <Container>
      <div className='text-center text-5xl border-t-4 border-t-blue-700 py-10 md:py-20'>
        <p className='block font-extrabold text-xl md:text-4xl tracking-tighter pb-2 text-slate-800'>
          Like what you see?
        </p>
        <p className='block font-bold text-5xl md:text-5xl tracking-tighter pb-4 text-customblue hover:underline'>
          Get in touch
        </p>
        <div className='inline-block w-14 h-14 bg-yellow-500 self-center rounded-full'>
          <IoChatboxOutline className='inline-block w-10 h-10 self-center text-customblue ' />
        </div>
      </div>
    </Container>
  );
}
