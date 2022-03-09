export default function DateTag(props) {
  return (
    <span className='inline-block font-bold bg-customblue text-white text-left p-2 text-xs rounded-tr-2xl'>
      {props.date}
    </span>
  );
}
