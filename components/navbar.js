import React, { useState, useEffect } from 'react';
import FancyLink from '@/components/fancyLink';
import { debounce } from '../helpers/helpers';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Image1 from '../assets/global/profile.webp';
import Logo from '../assets/global/logo.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 80) ||
        currentScrollPos < 80
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '80px',
    width: '100%',
    /*     backgroundColor: 'yellow', */
    transition: 'top  0.6s ease',
  };

  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50'
      style={{ ...navbarStyles, top: visible ? '0' : '-80px' }}
    >
      {({ open }) => (
        <>
          <div className='mx-auto'>
            <div className='relative flex justify-between h-20'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}

                <Disclosure.Button className='inline-flex items-center justify-center p-4 text-black bg-yellow-600 hover:text-gray-500 hover:bg-gray-100'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='w-12 h-12 px-3' aria-hidden='true' />
                  ) : (
                    <MenuIcon
                      className='block w-12 h-12 px-3'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div
                className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'
                data-scroll
                data-scroll-speed='10'
                data-scroll-direction='vertical'
                data-scroll-offset='100,200'
              >
                <div className='flex items-center invisible sm:visible grow'>
                  <div className='p-6 mt-2 text-lg font-bold tracking-tight transition-all bg-white hover:bg-yellow-600 shadow-custom'>
                    <a href='/' className='shadow-custom'>
                      <Image
                        alt='Mountains'
                        src={Logo}
                        layout='fixed'
                        height={32}
                        width={40}
                      />
                    </a>
                  </div>
                </div>
                {/* Desktop Links */}
                <div className='hidden px-8 sm:flex sm:space-x-2 lg:space-x-14 bg-customblue shadow-custom'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  <FancyLink
                    destination='/'
                    a11yText='Use Cases'
                    label='Use Cases'
                    extraClasses='transition-all font-mono border-transparent text-white bg-customblue hover:border-yellow-600 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                  <FancyLink
                    destination='/portfolio2'
                    a11yText='Other Work'
                    label='Other Work'
                    extraClasses='transition-all font-mono border-transparent text-white bg-customblue hover:border-yellow-600 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />

                  <FancyLink
                    destination='/blog2'
                    a11yText='Blog'
                    label='Blog'
                    extraClasses='transition-all font-mono border-transparent text-white bg-customblue hover:border-yellow-600 hover:text-slate-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                </div>
              </div>
              {/* Profile dropdown class hidden */}
              <div className='absolute inset-y-0 right-0 flex items-center pl-3 pr-4 bg-white sm:static sm:inset-auto shadow-custom'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3 '>
                  <div>
                    <Menu.Button className='flex text-sm bg-white rounded-full '>
                      <span className='sr-only'>Open user menu</span>
                      <div className='w-12 h-12 rounded-full md:h-12 md:w-12 '>
                        <Image
                          alt='Mountains'
                          src={Image1}
                          layout='responsive'
                          objectFit='cover'
                        />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 w-48 py-1 mt-2 transition-all ease-in-out origin-top-right bg-yellow-600 duration-250 ring-1 ring-black ring-opacity-5'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='/resume2'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 font-mono'
                            )}
                          >
                            Resume
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='mailto:lucas.czuchraj@gmail.com'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 font-mono'
                            )}
                          >
                            Email
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='https://www.linkedin.com/in/lucasczuchraj/'
                            target='_blank'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 font-mono'
                            )}
                          >
                            Linked In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <FancyLink
                            destination='/social'
                            a11yText='Social Media'
                            label='Social Media'
                            extraClasses='block px-4 py-2 text-sm text-gray-700 font-mono'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          />
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='/about'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 font-mono'
                            )}
                          >
                            About this site
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='w-1/2 py-1 ml-4 space-y-1 bg-yellow-600'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='block py-2 pl-3 pr-4 font-mono text-sm text-customblue font-regular bg-indigo-50'
              >
                Use Cases
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/portfolio2'
                className='block py-2 pl-3 pr-4 font-mono text-sm text-customblue font-regular hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              >
                Other Work
              </Disclosure.Button>

              <Disclosure.Button
                as='a'
                href='/blog2'
                className='block py-2 pl-3 pr-4 font-mono text-sm text-customblue font-regular hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
