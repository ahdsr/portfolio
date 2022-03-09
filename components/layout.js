import NavbarMobile from './navbar_mobile';
export default function Layout({ children }) {
  return (
    <>
      {children}
      <div className='sticky bottom-0 z-50 '>
        <NavbarMobile />
      </div>
    </>
  );
}
