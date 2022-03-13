import SocialBar from './socialBar';
import FancyImage from '@/components/fancyimage';

export default function ImagePost({
  postTitle,
  imageSource,
  postUser,
  postUserProfile,
  postUserImage,
  postCount,
  p1,
  p2,
  p3,
}) {
  return (
    <div className='mx-auto blog max-w-screen-2xl xl:max-w-screen-xl '>
      <div className='px-5 mx-auto mt-8 md:px-12 '>
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
        <FancyImage
          priority
          src={imageSource}
          transitionDuration={300}
          zoomMargin={30}
          overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
        />
      </div>

      <div className='px-5 pt-12 mx-auto space-y-4 font-light leading-relaxed text-md text-slate-800 md:px-12'>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      <div className='pb-24 bg-white border-b-slate-500'></div>
    </div>
  );
}
