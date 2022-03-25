import React from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import GetInTouch from '@/components/getintouch';
import Footer from '@/components/footer';

//blog2 Images
import Image from 'next/image';
import avatarLivelabs from '../assets/global/avatar_livelabs.webp';
import avatarCIBC from '../assets/global/avatar_cibc.webp';
import avatarOM from '../assets/global/avatar_om.webp';
import avatarTD from '../assets/global/avatar_td.webp';
import avatarRSA from '../assets/global/avatar_rsa.webp';
import avatarElement from '../assets/global/avatar_element.webp';

const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const username = 'Lucas C';
const profile = 'Admin';
const profilePhoto =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Blog' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter'>
          <m.main variants={fade} className='bg-white'>
            <section className='bg-customblue'>
              {/*   <img src={profilePhoto} alt='' /> */}
              <div className='px-8 mx-auto py-52 md:py-52 md:px-16 lg:max-w-6xl xl:max-w-7xl'>
                <div className='mx-auto'>
                  <h1>Resume</h1>
                </div>
              </div>
            </section>

            <div className='px-8 py-24 mx-auto md:flex flex-rows md:px-16 lg:max-w-6xl xl:max-w-7xl'>
              <div className='md:w-1/3 md:item'>
                <h2>Profile</h2>

                <ul className='mb-4 font-sans font-light leading-relaxed text-slate-800'>
                  <li>
                    Bachelor of Design Honours (B.Des.) York University /
                    Sheridan Institute
                  </li>
                  <li>
                    Highly knowledgeable in all facets of design, including user
                    experience, layout, typography, colour, user interfaces and
                    information architecture
                  </li>
                  <li>
                    Expert in{' '}
                    <a
                      href='https://www.sketch.com/'
                      target='_blank'
                      className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                    >
                      Sketch
                    </a>
                    ,{' '}
                    <a
                      href='https://www.figma.com/'
                      target='_blank'
                      className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                    >
                      Figma
                    </a>
                    ,{' '}
                    <a
                      href='https://www.invisionapp.com/studio/learn/welcome-to-invision-studio'
                      target='_blank'
                      className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                    >
                      Invision Studio
                    </a>{' '}
                    <a
                      href='https://www.adobe.com/ca/creativecloud.html'
                      target='_blank'
                      className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                    >
                      Adobe Cloud
                    </a>{' '}
                    &{' '}
                    <a
                      href='https://www.protopie.io/'
                      target='_blank'
                      className='p-1 underline bg-yellow-200 bg-opacity-20 hover:bg-yellow-400'
                    >
                      Protopie
                    </a>{' '}
                    as well as other prototyping & design software
                  </li>
                  <li>
                    Always strives to achieve simplicity for the end user,
                    despite the complexity of the process or back-end systems
                  </li>
                  <li>
                    Skilled in delivering adaptive responsive layouts and
                    elevated in understanding the technology that drives them
                  </li>
                  <li>
                    Adept at aligning business needs with creativity while
                    respecting brand standards
                  </li>
                  <li>
                    High aptitude for quality assurance and improvement with a
                    keen eye for detail
                  </li>
                  <li>
                    Excellent verbal & written communication, and strong people
                    skills with clients and colleagues
                  </li>
                </ul>
              </div>
              <div className='mt-12 mb-4 font-sans font-light leading-relaxed item md:mt-0 md:ml-12 md:w-2/3 md:item text-slate-800'>
                <div className=''>
                  <h2>Experience</h2>
                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarElement}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>Jan 2020 - Current</div>
                        <div className='jobrole'>
                          User Experience Consultant
                        </div>

                        <div className='client'>Element Fleet Management</div>
                      </div>
                    </div>
                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Contributing and designing component library for new
                        Ordering platform
                      </li>
                      <li>
                        Helping define future standards and direction of B2B
                        Ordering platform
                      </li>
                      <li>
                        Support developers using JIRA and Confluence to deliver
                        ongoing projects as well as providing guidance and
                        specifications throughout the project sprints
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarTD}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>
                          Jan 2018 – Dec 2019
                        </div>
                        <div className='jobrole'>Senior UX/UI Designer</div>

                        <div className='client'>TD Canada</div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Designed and launched the TD Mobile App dashboard, a pre
                        sign and post sign on experience
                      </li>
                      <li>
                        Redesigning TD for Me experience from ground up using
                        push and location service technology allowing customers
                        to always be informed on what TD has to offer based on
                        their location
                      </li>
                      <li>
                        Wireframed, designed and prototyped a new TD EasyWeb
                        redesign experience with internal stakeholders and an
                        outside vendor
                      </li>
                      <li>
                        Support developers using JIRA and Confluence to deliver
                        ongoing projects as well as providing guidance and
                        specifications throughout the project sprints
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarRSA}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>
                          Aug 2017 – Jan 2018
                        </div>
                        <div className='jobrole'>Senior UX/UI Designer</div>

                        <div className='client'>RSA Group</div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Designed and facilitated implementation of a Broker B2B
                        Portal
                      </li>
                      <li>
                        Redesigned Johnson Insurance online quoting an
                        application tool
                      </li>
                      <li>
                        Worked on numerous marketing websites and initiatives
                      </li>
                      <li>
                        Support developers using JIRA and Confluence to deliver
                        ongoing projects as well as providing guidance and
                        specifications throughout the project sprints
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarTD}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>
                          Aug 2016 – Feb 2017
                        </div>
                        <div className='jobrole'>Senior UX/UI Designer</div>

                        <div className='client'>TD Canada</div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Redesigned the Bill Pay experience for US TD customers
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarCIBC}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>
                          Aug 2016 – Feb 2017
                        </div>
                        <div className='jobrole'>Senior Manager UX</div>
                        <div className='client'>CIBC Live Labs</div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Inspire and lead a team of talented UX/Visual designers
                        in an environment that focuses on innovation
                      </li>
                      <li>
                        Work directly with the Director of UX to plan and
                        coordinate business tasks and deliverables for ongoing
                        digital projects
                      </li>
                      <li>
                        Work with business / marketing in the creation of a
                        vision for user experience within the overall business
                        strategy
                      </li>
                      <li>
                        Engage with and contribute to a project team made up of
                        Business, Development, Editorial and Analyst
                        specialists, as well as third parties and stakeholders
                      </li>
                      <li>
                        Participated in and lead design thinking and ideation
                        workshops
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarLivelabs}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='ml-6'>
                        <div className='font-bold date'>
                          July 2015 – July 2016
                        </div>
                        <div className='jobrole'>
                          {' '}
                          Lead Creative / UX Designer
                        </div>
                        <div className='client'>
                          {' '}
                          Lead Creative / UX Designer
                        </div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Worked on the redesign of iOS/Android native app product
                        application forms
                      </li>
                      <li>
                        Designed and executed rapid prototypes to explore and
                        promote upcoming CIBC native app releases
                      </li>
                      <li>
                        Worked with Marketing/Strategy teams to create
                        compelling and effective designs on many aggressive
                        sales Multivariate Testing initiatives across CIBC.com
                        properties
                      </li>
                      <li>
                        Lead the visual design for a responsive design solution
                        for two major sales initiatives that included
                        application forms and mobile targeted offers.
                      </li>
                      <li>
                        Created a new visual system for desktop targeted offers
                      </li>
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <div className='flex items-center mt-8 mb-6'>
                      <div className='flex-shrink-0 inline-block rounded-full'>
                        <div className='block w-12 h-12 rounded-full'>
                          <Image
                            alt='Mountains'
                            src={avatarOM}
                            layout='responsive'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      <div className='ml-6'>
                        <div className='font-bold date'>
                          July 2011 - August 2012
                        </div>
                        <div className='jobrole'>
                          Senior Interactive Designer
                        </div>
                        <div className='client'>Ogilvy & Mather</div>
                      </div>
                    </div>

                    <ul className='pl-2 pr-2 ml-16'>
                      <li>
                        Conception and development of interface design,
                        animation, micro websites and online rich media
                        campaigns
                      </li>
                      <li>
                        Collaborated with marketing, strategists, content
                        writers, and IA/IX team members, and developers
                      </li>
                      <li>
                        Worked closely with Senior Art Directors to deliver rich
                        media banners, including high-profile homepage takeover
                        ads, Google DoubleClick environment and full video ads
                      </li>
                      <li>
                        Proactively identified and solved potential issues
                        within assigned projects including creative that may
                        impact deliverables or the quality of the work
                      </li>
                      <li>Developed and maintained email marketing campaign</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>
      <GetInTouch />
      <Footer />
    </Layout>
  );
}
