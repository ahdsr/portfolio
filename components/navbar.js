import React, { useState, useEffect } from 'react';
import FancyLink from '@/components/fancyLink';
import { debounce } from '../helpers/helpers';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Image1 from '../assets/global/profile.webp';

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
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 100
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
    backgroundColor: 'white',
    transition: 'top  0.3s ease',
  };

  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50 bg-white border-b border-b-slate-200 '
      style={{ ...navbarStyles, top: visible ? '0' : '-64px' }}
    >
      {({ open }) => (
        <>
          <div className='px-2 mx-auto sm:px-6 lg:px-8'>
            <div className='relative flex justify-between h-20'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='flex items-center invisible sm:visible grow'>
                  <p className='text-lg font-bold tracking-tight'>
                    Lucas Czuchraj
                  </p>
                </div>
                {/* Desktop Links */}
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <FancyLink
                    destination='/'
                    a11yText='Use Cases'
                    label='Use Cases'
                    extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                  <FancyLink
                    destination='/portfolio2'
                    a11yText='Other Work'
                    label='Other Work'
                    extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                  <FancyLink
                    destination='/resume2'
                    a11yText='Resume'
                    label='Resume'
                    extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                  <FancyLink
                    destination='/blog2'
                    a11yText='Blog'
                    label='Blog'
                    extraClasses='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-regular uppercase'
                  />
                </div>
              </div>
              {/* Profile dropdown class hidden */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>View notifications</span>
                  {/* <BellIcon className='w-6 h-6' aria-hidden='true' /> */}
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <div className='w-8 h-8 rounded-full md:h-8 md:w-8'>
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
                    <Menu.Items className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
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
            <div className='pt-2 pb-4 space-y-1'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as='a'
                href='#'
                className='block py-2 pl-3 pr-4 text-base text-indigo-700 border-l-4 border-indigo-500 font-regular bg-indigo-50'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block py-2 pl-3 pr-4 text-base text-gray-500 border-l-4 border-transparent font-regular hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block py-2 pl-3 pr-4 text-base text-gray-500 border-l-4 border-transparent font-regular hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block py-2 pl-3 pr-4 text-base text-gray-500 border-l-4 border-transparent font-regular hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
