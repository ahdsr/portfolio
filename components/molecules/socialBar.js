import { HiOutlineHeart } from 'react-icons/hi';
import { HiShare } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import { HiChat } from 'react-icons/hi';

export default function SocialBar({ postCount }) {
  return (
    <div className='flex flex-row items-center justify-center w-full h-12 mx-auto mt-6 mb-4'>
      <div className='w-1/2'>
        <span className='relative inline-block'>
          <HiChat className='p-2 text-yellow-500 transition-all border border-yellow-800 rounded-md ext-yellow-500 w-9 h-9 border-opacity-40 hover:bg-slate-800 hover:border-yellow-800' />
          <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full '>
            {postCount}
          </span>
        </span>
      </div>
      <div className='flex flex-row justify-end w-1/2 space-x-2 justify-items-center'>
        <HiOutlineHeart className='p-2 text-yellow-500 transition-all border border-yellow-800 rounded-md w-9 h-9 border-opacity-40 hover:bg-slate-800 hover:border-yellow-800' />
        <HiShare className='p-2 text-yellow-500 transition-all border border-yellow-800 rounded-md w-9 h-9 border-opacity-40 hover:bg-slate-800 hover:border-yellow-800' />
        <HiInformationCircle className='p-2 text-yellow-500 transition-all border border-yellow-800 rounded-md w-9 h-9 border-opacity-40 hover:bg-slate-800 hover:border-yellow-800' />
      </div>
    </div>
  );
}
