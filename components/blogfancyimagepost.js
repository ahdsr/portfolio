import FancyImage from './fancyimage';
export default function FancyImagePost({ src, title, date, p1, p2, p3, p4 }) {
  return (
    <div className='content mb-20'>
      <h1>{title}</h1>
      <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
        {date}
      </span>
      <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>

      <FancyImage
        src={src}
        transitionDuration={300}
        zoomMargin={40}
        overlayBgColorEnd={'rgba(255, 255,255, 0.95)'}
      />
      <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>

      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
    </div>
  );
}
