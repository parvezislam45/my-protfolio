import React from 'react';
import './Allwork.css'

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer fill-current transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-sm head'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
