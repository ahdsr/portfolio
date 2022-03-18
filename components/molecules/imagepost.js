import SocialBar from './socialBar';
import FancyImage from '@/components/fancyimage';

export default function ImagePost({
  postTitle,
  imageSource,
  date,
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
      <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl '>
        <h2>{postTitle}</h2>
        <div className='flex items-start'>
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

        <SocialBar postCount={postCount} />
      </div>
      <FancyImage
        src={imageSource}
        transitionDuration={300}
        zoomMargin={30}
        overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
      />

      <div className='px-8 mx-auto md:px-16 lg:max-w-6xl xl:max-w-7xl '>
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
