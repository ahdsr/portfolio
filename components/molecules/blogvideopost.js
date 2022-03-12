import ReactPlayer from 'react-player';
export default function VideoPost({ id, title, date, url, p1, p2, p3, p4 }) {
  return (
    <div className='content mb-20'>
      <div className='content px-4'>
        <h2>{title}</h2>
      </div>
      <span className='inline-block font-bold text-black px-4 pb-2'>
        {date}
      </span>

      <div className='player-wrapper'>
        <ReactPlayer
          url={url}
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
        />
      </div>

      <p className='content px-4'>{p1}</p>
      <p className='content px-4'>{p2}</p>
      <p className='content px-4'>{p3}</p>
      <p className='content px-4'>{p4}</p>
    </div>
  );
}
