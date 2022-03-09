import NavbarMobile from './navbar_mobile';
import MobileHeader from '@/components/header_mobile';

export default function Layout({ children }) {
  return (
    <>
      {/*   <div className='sticky top-0 z-50 md:hidden '>
        <MobileHeader />
      </div> */}
      {children}
      <div className='sticky bottom-0 z-50 md:hidden '>
        <NavbarMobile />
      </div>
    </>
  );
}
