import Container from '@/components/container';
import Image from 'next/image';
import Image1 from '../assets/global/404.gif';

export default function UnderConstruction() {
  return (
    <Container>
      <Image alt='404' src={Image1} layout='responsive' objectFit='cover' />
    </Container>
  );
}
