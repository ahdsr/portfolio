import ReactPlayer from 'react-player';
import SocialBar from './socialBar';

export default function VideoPost({
  postTitle,
  videoSource,
  date,
  looping,
  playing,
  muted,
  light,
  controls,
  postUser,
  postUserProfile,
  postUserImage,
  postCount,
  p1,
  p2,
  p3,
}) {
  return (
    <div className=''>
      <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <h2>{postTitle}</h2>
        <SocialBar postCount={postCount} />
        <div className='flex items-start pb-4'>
          <div className='inline-flex flex-shrink-0 rounded-full'>
            <img
              className='w-12 h-12 rounded-full'
              src={postUserImage}
              alt=''
            />
          </div>
          <div className='ml-4 grow'>
            <div className='user'>{postUser}</div>
            <div className='userprofile'>{postUserProfile}</div>
          </div>
          <div className='text-sm font-light text-right grow item text-slate-800 text-opacity-90'>
            {date}
          </div>
        </div>
      </div>
      <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={videoSource}
            loop={looping}
            light={light}
            playing={playing}
            muted={muted}
            controls={controls}
            width='100%'
            height='100%'
          />
        </div>
      </div>

      <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl'>
        <div className='pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800'>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
        <div className='pb-24 bg-white border-b-slate-500'></div>
      </div>
    </div>
  );
}
