import React from 'react';

// import about img
import Image from '../assets/img/about.png';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-x-24 gap-y-6'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold tracking-[-2px] mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-7 before:hidden before:lg:block'>
                Jane Doe
              </h2>
              <p className='mb-4 italic'>Freelance Frontend Web Developer</p>
              <hr className='mb-8' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className='btn btn-md bg-secondary hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;