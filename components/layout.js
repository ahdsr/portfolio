import NavbarMobile from './navbar_mobile';
import MobileHeader from '@/components/header_mobile';
import Footer from './footer';
import GetInTouch from './getintouch';

export default function Layout({ children }) {
  return (
    <>
      {/*   <div className='sticky top-0 z-50 md:hidden '>
        <MobileHeader />
      </div> */}
      {children}
      <GetInTouch />
      <Footer />
      <div className='sticky bottom-0 z-50 md:hidden '>
        <NavbarMobile />
      </div>
    </>
  );
}
