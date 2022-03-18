import NavbarMobile from './navbar_mobile';
import Footer from './footer';
import GetInTouch from './getintouch';
import Navbar from '@/components/navbar';

export default function Layout({ children }) {
  return (
    <div className='bg-white'>
      <Navbar />
      {children}
      <GetInTouch />
      <Footer />
      {/* <div className='sticky bottom-0 z-50 md:hidden navshadow'>
        <NavbarMobile />
      </div> */}
    </div>
  );
}
