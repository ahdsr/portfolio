import { useRef } from 'react';
import Layout from '@/components/layout';
import Navbar from '@/components/navbvar';
import Footer from '@/components/footer';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import GetInTouch from '@/components/getintouch';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Home' />
      <Navbar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          scrollFromAnywhere: true,
          reloadOnContextChange: true,
          tablet: { smooth: false, breakpoint: 1280 },
          smartphone: { smooth: false },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial='initial' animate='enter' exit='exit'>
                <m.main variants={fade} className='pb-20'>
                  <Container>
                    <div class='md:flex md:flex-wrap overflow-hidden mt-40'>
                      <div className='content-sub mb-4 md:w-1/4 overflow-hidden md:pr-10'>
                        <h1 className=''>Profile</h1>
                        <ul>
                          <li>
                            Bachelor of Design Honours (B.Des.) York University
                            / Sheridan Institute
                          </li>
                          <li>
                            Highly knowledgeable in all facets of design,
                            including user experience, layout, typography,
                            colour, user interfaces and information architecture
                          </li>
                          <li>
                            Expert in{' '}
                            <a
                              href='https://www.sketch.com/'
                              target='_blank'
                              className='underline bg-yellow-200 p-1'
                            >
                              Sketch
                            </a>
                            ,{' '}
                            <a
                              href='https://www.figma.com/'
                              target='_blank'
                              className='underline bg-yellow-200 p-1'
                            >
                              Figma
                            </a>
                            ,{' '}
                            <a
                              href='https://www.invisionapp.com/studio/learn/welcome-to-invision-studio'
                              target='_blank'
                              className='underline bg-yellow-200 p-1'
                            >
                              Invision Studio
                            </a>{' '}
                            &{' '}
                            <a
                              href='https://www.protopie.io/'
                              target='_blank'
                              className='underline bg-yellow-200 p-1'
                            >
                              Protopie
                            </a>{' '}
                            as well as other prototyping & design software
                          </li>
                          <li>
                            Always strives to achieve simplicity for the end
                            user, despite the complexity of the process or
                            back-end systems
                          </li>
                          <li>
                            Skilled in delivering adaptive responsive layouts
                            and elevated in understanding the technology that
                            drives them
                          </li>
                          <li>
                            Adept at aligning business needs with creativity
                            while respecting brand standards
                          </li>
                          <li>
                            High aptitude for quality assurance and improvement
                            with a keen eye for detail
                          </li>
                          <li>
                            Excellent verbal & written communication, and strong
                            people skills with clients and colleagues
                          </li>
                        </ul>

                        <h2 className='mt-4'>Accomplishments</h2>
                        <ul>
                          <li>
                            <FancyLink
                              destination='https://www.rgd.ca/studentsgrads/student-awards/2002'
                              a11yText='https://www.figma.com/'
                              label='RGD Ontario Scholarship Award Adobe GoLive Award'
                              extraClasses='underline bg-yellow-200  p-1'
                            />
                          </li>
                        </ul>

                        <h2 className='mt-4'>Interests</h2>
                        <ul>
                          <li>
                            Music and score production, sound editing, aerial
                            photography, video editing
                          </li>
                        </ul>
                      </div>

                      <div className='content-sub mb-4 md:w-3/4 overflow-hidden md:pl-10'>
                        <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>
                          Experience
                        </h1>

                        <div></div>

                        <div className='pt-12 content'>
                          <div className='grid grid-rows-2 place-content-between '>
                            <span className='inline-block  font-bold bg-gradient-to-bl from-customblue via-customblue to-customblue text-white text-left'>
                              Jan 2020 - Current
                            </span>
                            <span className='inline-block  font-bold  text-slate-500 text-left'>
                              Element Fleet Management
                            </span>
                          </div>
                          <h3 className='pt-2'>User Experience Consultant</h3>

                          <ul>
                            <li>
                              Lead designer in both the customer facing Ordering
                              app and an integrated in-house order processing
                              equivalent
                            </li>
                            <li>
                              Highly knowledgeable in all facets of design,
                              including user experience, layout, typography,
                              colour, user interfaces and information
                              architecture
                            </li>
                            <li>
                              Facilitating UX requirements gathering sessions
                            </li>
                          </ul>
                        </div>

                        <div className='pt-12 content'>
                          <div className='grid grid-rows-2 place-content-between '>
                            <span className='inline-block  font-bold bg-gradient-to-bl from-customblue via-customblue to-customblue text-white text-left'>
                              Jan 2018 – Dec 2019
                            </span>
                            <span className='inline-block  font-bold  text-slate-500 text-left'>
                              TD Canada
                            </span>
                          </div>
                          <h3 className='pt-2'>Sr UX/UI Designer</h3>

                          <ul>
                            <li>
                              Designed and launched the TD Mobile App dashboard,
                              a pre sign and post sign on experience
                            </li>
                            <li>
                              Redesigning TD for Me experience from ground up
                              using push and location service technology
                              allowing customers to always be informed on what
                              TD has to offer based on their location
                            </li>
                            <li>
                              Wireframed, designed and prototyped a new TD
                              EasyWeb redesign experience with internal
                              stakeholders and an outside vendor
                            </li>
                            <li>
                              Support developers using JIRA and Confluence to
                              deliver ongoing projects as well as providing
                              guidance and specifications throughout the project
                              sprints
                            </li>
                          </ul>
                        </div>

                        <div className='pt-12 content'>
                          <div className='grid grid-rows-2 place-content-between '>
                            <span className='inline-block  font-bold bg-gradient-to-bl from-customblue via-customblue to-customblue text-white text-left'>
                              Aug 2017 – Jan 2018
                            </span>
                            <span className='inline-block  font-bold  text-slate-500 text-left'>
                              RSA Group
                            </span>
                          </div>
                          <h3 className='pt-2'>Sr UX/UI Designer</h3>

                          <ul>
                            <li>
                              Designed and facilitated implementation of a
                              Broker B2B Portal
                            </li>
                            <li>
                              Redesigned Johnson Insurance online quoting an
                              application tool
                            </li>
                            <li>
                              Wireframed, designed and prototyped a new TD
                              EasyWeb redesign experience with internal
                              stakeholders and an outside vendor
                            </li>
                            <li>
                              Worked on numerous marketing websites and
                              initiatives
                            </li>
                          </ul>
                        </div>

                        <div className='pt-12 content'>
                          <div className='grid grid-rows-2 place-content-between '>
                            <span className='inline-block  font-bold bg-gradient-to-bl from-customblue via-customblue to-customblue text-white text-left'>
                              Mar 2017 - Aug 2017
                            </span>
                            <span className='inline-block  font-bold  text-slate-500 text-left'>
                              TD Canada
                            </span>
                          </div>
                          <h3 className='pt-2'>Sr UX/UI Designer</h3>

                          <ul>
                            <li>
                              Redesigned the Bill Pay experience for US TD
                              customers
                            </li>
                          </ul>
                        </div>

                        <div className='pt-12 content'>
                          <div className='grid grid-rows-2 place-content-between '>
                            <span className='inline-block  font-bold bg-gradient-to-bl from-customblue via-customblue to-customblue text-white text-left'>
                              Aug 2016 – Feb 2017
                            </span>
                            <span className='inline-block  font-bold  text-slate-500 text-left'>
                              CIBC Live Labs
                            </span>
                          </div>
                          <h3 className='pt-2'>Sr UX/UI Designer</h3>

                          <ul>
                            <li>
                              Inspire and lead a team of talented UX/Visual
                              designers in an environment that focuses on
                              innovation
                            </li>
                            <li>
                              Work directly with the Director of UX to plan and
                              coordinate business tasks and deliverables for
                              ongoing digital projects
                            </li>
                            <li>
                              Prototype high and low fidelity experiences of
                              varying complexities and levels of detail as well
                              as facilitate guerilla testing and user
                              interviews. Work with business / marketing in the
                              creation of a vision for user experience within
                              the overall business strategy
                            </li>
                            <li>
                              Inspire and lead a team of talented UX/Visual
                              designers in an environment that focuses on
                              innovation
                            </li>
                            <li>
                              Engage with and contribute to a project team made
                              up of Business, Development, Editorial and Analyst
                              specialists, as well as third parties and
                              stakeholders
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Container>
                </m.main>
                <GetInTouch />
                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
