import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { routes } from '../../data/layout';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <Image
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/github.svg"
              width={60}
              height={60}
              alt="Let's go"
            />
            {`Let's go`.split('').map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? 'opacity-100'
                  : 'opacity-40 hover:opacity-100 transition-opacity'
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
