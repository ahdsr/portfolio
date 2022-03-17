import React from 'react';
import Image from 'next/image';

export default function Usecaseheader({
  title,
  subtitle,
  avatar,
  hero,
  projectname,
  heroalt,
}) {
  return (
    <div className='px-5 pt-6 mx-auto mt-4 md:px-10 lg:px-16 xl:px-24'>
      <h1 className='heading1'>{title}</h1>
      <h2 className='heading2'>{subtitle}</h2>
      <div className='pt-12 pb-12 mx-auto text-center'>
        <Image
          alt='TD round logo'
          src={avatar}
          layout='intrinsic'
          objectFit='cover'
          width={64}
          height={64}
        />
        <p className='smalltext'>{projectname}</p>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          marginTop: '80px',
        }}
      >
        <Image alt={heroalt} src={hero} layout='responsive' objectFit='cover' />
      </div>
    </div>
  );
}
