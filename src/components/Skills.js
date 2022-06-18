import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section id='services' className='bg-tertiary py-12 section'>
      <div className='container mx-auto'>
      <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-Skills relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            My Skills
          </h2>
        </div>
        <div
          className='grid grid-cols-1 md:grid-cols-6 gap-10 mt-10 gap-y-10'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
