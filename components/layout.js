import Navbar from '@/components/navbar';
import NavbarMobile from './navbar_mobile';
import Mininav from '@/components/molecules/mininav';
import { Tween } from 'react-gsap';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {children}

      {/* <div className='sticky bottom-0 z-50 md:hidden navshadow'>
        <NavbarMobile />
      </div> */}
    </>
  );
}
