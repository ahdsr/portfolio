import FancyImage from '../fancyimage';

export default function FancyImagePost({ src, title, date, p1, p2, p3, p4 }) {
  return (
    <div className='content mb-20 '>
      <div className='px-4'>
        <h2>{title}</h2>
      </div>

      <span className='inline-block font-bold bg-black px-4'>{date}</span>
      <span className='block bg-black text-left pb-0 rounded-tl-full h-4'></span>

      <FancyImage
        src={src}
        transitionDuration={300}
        zoomMargin={40}
        overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
      />
      <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10 px-4'></span>

      <p className='content px-4'>{p1}</p>
      <p className='content px-4'>{p2}</p>
      <p className='content px-4'>{p3}</p>
      <p className='content px-4'>{p4}</p>
    </div>
  );
}
