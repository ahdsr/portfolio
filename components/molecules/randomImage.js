import React, { useRef } from 'react';
import Image from 'next/image';
import myImg from '../../assets/global/avatar_cibc.webp';

const RandomImage = () => {
  const ChipStyles = useRef({
    position: 'fixed',
    top: Math.floor(Math.random() * 50),
    left: Math.floor(Math.random() * 50),
    transform: 'translate(-50%, -50%)',
  });
  console.log(ChipStyles);
  return <Image src={myImg} className={{ ChipStyles }} alt='Alt Text' />;
};

export default RandomImage;
