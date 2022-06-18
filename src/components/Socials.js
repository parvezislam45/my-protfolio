import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent hover:text-accent cursor-pointer fill-current transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
            key={index}
          >
            <a className='text-base' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
