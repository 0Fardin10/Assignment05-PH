import React from 'react';

export default function Header() {
  const navLinks = (
    <>
      <li><a className="hover:text-pink-500">Home</a></li>
      <li><a className="hover:text-pink-500">Technologies</a></li>
      <li><a className="hover:text-pink-500">Projects</a></li>
      <li><a className="hover:text-pink-500">About</a></li>
      <li><a className="hover:text-pink-500">Contact</a></li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-sm">
      <div className="navbar container mx-auto px-4">
        {/* Mobile Hamburger & Brand */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="text-2xl font-bold text-brand-gradient cursor-pointer">Dev Stack</a>
        </div>
        
        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
            {navLinks}
          </ul>
        </div>
        
        {/* Auth Buttons */}
        <div className="navbar-end gap-3">
          <button className="font-semibold text-gray-700 hover:text-pink-500 hidden sm:block">Sign In</button>
          <button className="btn bg-brand-gradient border-none rounded-full px-6 text-white min-h-0 h-10">Sign Up</button>
        </div>
      </div>
    </header>
  );
}