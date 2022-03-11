import NavbarMobile from './navbar_mobile';
import MobileHeader from '@/components/header_mobile';
import Footer from './footer';
import GetInTouch from './getintouch';
import Container from './container';
import Navbar from '@/components/navbar';

export default function Layout({ children }) {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      {children}
      {/*  <GetInTouch />
      <Footer /> */}
      {/* <div className='sticky bottom-0 z-50 md:hidden'>
        <NavbarMobile />
      </div> */}
    </div>
  );
}
