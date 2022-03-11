import { useRef } from 'react';
import Layout from '@/components/layout';
import ImagePost from '@/components/blogimagepost';
import Container from '@/components/container';
import FancyLink from '@/components/fancyLink';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';

const PostImage1 =
  'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// Molecules

import DateTag from '@/components/molecules/dateTag';

export default function Resume() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title='Resume' />
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit'>
          <m.main variants={fade} className='pb-4  '>
            <Container>
              <div className='content mt-40 '>
                <div className='mx-auto max-w-7xl md:flex md:flex-wrap overflow-hidden '>
                  <div className='content mb-4 md:w-2/5 overflow-hidden md:pr-10'>
                    <h1>Profile</h1>
                    <ul>
                      <li>
                        Bachelor of Design Honours (B.Des.) York University /
                        Sheridan Institute
                      </li>
                      <li>
                        Highly knowledgeable in all facets of design, including
                        user experience, layout, typography, colour, user
                        interfaces and information architecture
                      </li>
                      <li>
                        Expert in{' '}
                        <a
                          href='https://www.sketch.com/'
                          target='_blank'
                          className='underline bg-yellow-200 p-1 hover:bg-yellow-400'
                        >
                          Sketch
                        </a>
                        ,{' '}
                        <a
                          href='https://www.figma.com/'
                          target='_blank'
                          className='underline bg-yellow-200 p-1 hover:bg-yellow-400'
                        >
                          Figma
                        </a>
                        ,{' '}
                        <a
                          href='https://www.invisionapp.com/studio/learn/welcome-to-invision-studio'
                          target='_blank'
                          className='underline bg-yellow-200 p-1 hover:bg-yellow-400'
                        >
                          Invision Studio
                        </a>{' '}
                        <a
                          href='https://www.adobe.com/ca/creativecloud.html'
                          target='_blank'
                          className='underline bg-yellow-200 p-1 hover:bg-yellow-400'
                        >
                          Adobe Cloud
                        </a>{' '}
                        &{' '}
                        <a
                          href='https://www.protopie.io/'
                          target='_blank'
                          className='underline bg-yellow-200 p-1 hover:bg-yellow-400'
                        >
                          Protopie
                        </a>{' '}
                        as well as other prototyping & design software
                      </li>
                      <li>
                        Always strives to achieve simplicity for the end user,
                        despite the complexity of the process or back-end
                        systems
                      </li>
                      <li>
                        Skilled in delivering adaptive responsive layouts and
                        elevated in understanding the technology that drives
                        them
                      </li>
                      <li>
                        Adept at aligning business needs with creativity while
                        respecting brand standards
                      </li>
                      <li>
                        High aptitude for quality assurance and improvement with
                        a keen eye for detail
                      </li>
                      <li>
                        Excellent verbal & written communication, and strong
                        people skills with clients and colleagues
                      </li>
                    </ul>

                    <h3 className='mt-4'>Accomplishments</h3>
                    <ul>
                      <li>
                        <FancyLink
                          destination='https://www.rgd.ca/studentsgrads/student-awards/2002'
                          a11yText='https://www.figma.com/'
                          label='RGD Ontario Scholarship Award Adobe GoLive Award'
                          extraClasses='underline bg-yellow-200 hover:bg-yellow-400  p-1'
                        />
                      </li>
                    </ul>

                    <h3 className='mt-4'>Interests</h3>
                    <ul>
                      <li>
                        <FancyLink
                          destination='/blog'
                          a11yText='Music'
                          label='Music'
                          extraClasses='underline bg-yellow-200 hover:bg-yellow-400  p-1'
                        />{' '}
                        and score production, sound editing, aerial photography,{' '}
                        <FancyLink
                          destination='/about'
                          a11yText='3D rendering'
                          label='3D rendering'
                          extraClasses='underline bg-yellow-200 hover:bg-yellow-400  p-1'
                        />
                        , video editing
                      </li>
                    </ul>
                  </div>

                  <div className='content mb-4 md:w-3/5 overflow-hidden md:pl-10'>
                    <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>
                      Experience
                    </h1>

                    <div className='content pt-12 bg-slate-100 p-8'>
                      <DateTag date={'Current from Jan 2020'} />
                      <h3>User Experience Consultant</h3>
                      <h4>Element Fleet Management</h4>
                      <ul>
                        <li>
                          Contributing and designing component library for new
                          Ordering platform
                        </li>
                        <li>
                          Helping define future standards and direction of B2B
                          Ordering platform
                        </li>
                        <li>
                          Support developers using JIRA and Confluence to
                          deliver ongoing projects as well as providing guidance
                          and specifications throughout the project sprints
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 p-8'>
                      <DateTag date={'Jan 2018 – Dec 2019'} />
                      <h3>Senior UX/UI Designer</h3>
                      <h4>TD Canada </h4>
                      <ul>
                        <li>
                          Designed and launched the TD Mobile App dashboard, a
                          pre sign and post sign on experience
                        </li>
                        <li>
                          Redesigning TD for Me experience from ground up using
                          push and location service technology allowing
                          customers to always be informed on what TD has to
                          offer based on their location
                        </li>
                        <li>
                          Wireframed, designed and prototyped a new TD EasyWeb
                          redesign experience with internal stakeholders and an
                          outside vendor
                        </li>
                        <li>
                          Support developers using JIRA and Confluence to
                          deliver ongoing projects as well as providing guidance
                          and specifications throughout the project sprints
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 bg-slate-100 p-8'>
                      <DateTag date={'Aug 2017 – Jan 2018'} />
                      <h3>Senior UX/UI Designer</h3>

                      <h4>RSA Group </h4>

                      <ul>
                        <li>
                          Designed and facilitated implementation of a Broker
                          B2B Portal
                        </li>
                        <li>
                          Redesigned Johnson Insurance online quoting an
                          application tool
                        </li>
                        <li>
                          Worked on numerous marketing websites and initiatives
                        </li>
                        <li>
                          Support developers using JIRA and Confluence to
                          deliver ongoing projects as well as providing guidance
                          and specifications throughout the project sprints
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 p-8'>
                      <DateTag date={'Aug 2016 – Feb 2017 '} />
                      <h3>Senior UX/UI Designer</h3>
                      <h4>TD Canada </h4>
                      <ul>
                        <li>
                          Redesigned the Bill Pay experience for US TD customers
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 bg-slate-100 p-8'>
                      <DateTag date={'Aug 2016 – Feb 2017 '} />
                      <h3>Senior Manager UX </h3>
                      <h4>CIBC Live Labs </h4>
                      <ul>
                        <li>
                          Inspire and lead a team of talented UX/Visual
                          designers in an environment that focuses on innovation
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
                          Engage with and contribute to a project team made up
                          of Business, Development, Editorial and Analyst
                          specialists, as well as third parties and stakeholders
                        </li>
                        <li>
                          Participated in and lead design thinking and ideation
                          workshops
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 p-8'>
                      <DateTag date={'July 2015 – July 2016 '} />
                      <h3>Lead Creative / UX Designer </h3>
                      <h4>CIBC</h4>
                      <ul>
                        <li>
                          Worked on the redesign of iOS/Android native app
                          product application forms
                        </li>
                        <li>
                          Involved with improving the customer journey path for
                          applying for products within the native CIBC Online
                          Banking app.
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
                          Lead the visual design for a responsive design
                          solution for two major sales initiatives that included
                          application forms and mobile targeted offers.
                        </li>
                        <li>
                          Created a new visual system for desktop targeted
                          offers
                        </li>
                      </ul>
                    </div>

                    <div className='content pt-12 bg-slate-100 p-8'>
                      <DateTag date={'July 2011 - August 2012'} />
                      <h3>Senior Interactive Designer </h3>
                      <h4>Ogilvy & Mather</h4>
                      <ul>
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
                          Worked closely with Senior Art Directors to deliver
                          rich media banners, including high-profile homepage
                          takeover ads, Google DoubleClick environment and full
                          video ads
                        </li>
                        <li>
                          Proactively identified and solved potential issues
                          within assigned projects including creative that may
                          impact deliverables or the quality of the work
                        </li>
                        <li>
                          Developed and maintained email marketing campaign
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
