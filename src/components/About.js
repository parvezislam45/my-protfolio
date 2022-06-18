import React from 'react';

// import img
import Image from '../assets/img/david.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Parvez Islam
              </h2>
              <p className='mb-4 text-accent'>
                MERN Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              I Am Parvez Islam. I am a Mechanical Engineer. I Will Complete my
              B.S.C Engineering From International University of Business
              Agriculture & Technology (IUBAT) University in 2021. Ordinary
              people.I Respect Any Work and Love to do it Honestly. I Want to
              Establish Myself as a Web Developer
              </p>
            </div>
            <button className='btn btn-outline btn-accent btn-md hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
