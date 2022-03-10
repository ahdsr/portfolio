import FancyImage from './fancyimage';
export default function ImagePost({ url, title, date, p1, p2, p3, p4 }) {
  return (
    <div className='content mb-20'>
      <h3>{title}</h3>
      <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
        {date}
      </span>
      <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
      <img src={url} alt='' />
      <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
    </div>
  );
}
