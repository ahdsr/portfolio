import NavbarMobile from './navbar_mobile';
import { useRef } from 'react';

import Navbar from '@/components/navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  return (
    <>
      {' '}
      <Navbar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.08,
          touchMultiplier: 3,
          mobile: {
            breakpoint: 0,
            smooth: true,
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div
          data-scroll-container
          ref={containerRef}
          id='scroll-container'
          className='bg-white'
        >
          {children}

          {/* <div className='sticky bottom-0 z-50 md:hidden navshadow'>
        <NavbarMobile />
      </div> */}
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
