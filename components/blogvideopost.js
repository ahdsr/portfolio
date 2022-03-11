import ReactPlayer from 'react-player';
export default function VideoPost({ id, title, date, url, p1, p2, p3, p4 }) {
  return (
    <div className='content mb-20'>
      <h1>{title}</h1>
      <span className='inline-block font-bold bg-black text-white text-left p-2 text-xs rounded-bl-2xl'>
        {date}
      </span>
      <span className='block bg-black  text-left pb-0 rounded-tl-full h-4 '></span>
      <div className='player-wrapper '>
        <ReactPlayer
          url={url}
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
      <span className='block bg-yellow-400 text-left pb-0 h-2 mb-10'></span>

      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
    </div>
  );
}
