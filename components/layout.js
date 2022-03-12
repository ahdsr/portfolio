import NavbarMobile from './navbar_mobile';
import MobileHeader from '@/components/header_mobile';
import Footer from './footer';
import GetInTouch from './getintouch';
import Container from './container';
import Navbar from '@/components/navbar';
import MyModal from '@/components/molecules/modal';

export default function Layout({ children }) {
  return (
    <div className='bg-slate-50'>
      {/*  <div className='z-100'>
        <MyModal />
      </div> */}
      <Navbar />
      {children}
      {/*  <GetInTouch />
      <Footer /> */}
      <div className='sticky bottom-0 z-50 md:hidden'>
        <NavbarMobile />
      </div>
    </div>
  );
}
