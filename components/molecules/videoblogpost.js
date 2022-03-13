import { HiOutlineHeart } from 'react-icons/hi';
import { HiShare } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import { HiChat } from 'react-icons/hi';

import ReactPlayer from 'react-player';
import SocialBar from './socialBar';

export default function VideoPost({
  postTitle,
  videoSource,
  postUser,
  postUserProfile,
  postUserImage,
  postCount,
  p1,
  p2,
  p3,
}) {
  return (
    <div className='mx-auto blog max-w-screen-2xl xl:max-w-screen-xl md:px-8'>
      <div className='px-5 mx-auto mt-8 '>
        <div className='heading1'>{postTitle}</div>
        <div className='flex items-start'>
          <div className='inline-flex flex-shrink-0 rounded-full'>
            <img
              className='w-12 h-12 rounded-full'
              src={postUserImage}
              alt=''
            />
          </div>
          <div className='ml-4'>
            <div className='user'>{postUser}</div>
            <div className='userprofile'>{postUserProfile}</div>
            <div className='text-sm font-light item text-slate-800 text-opacity-90'>
              March 22, 2020
            </div>
          </div>
        </div>
        <SocialBar postCount={postCount} />
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={videoSource}
          loop={true}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
      <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800'>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      <div className='border-b border-b-slate-300'></div>
    </div>
  );
}
