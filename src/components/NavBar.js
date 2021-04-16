import React from 'react';
import developer from '../assets/developer.svg';

function NavBar() {
    return (
        <header>
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6  sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0 inner">
  <a href="/home" className="text-xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-semibold">Non⚡o</a>
  </div>

  <div className="sm:mb-0 self-center px-6">

    <a href="/" className="text-md no-underline text-red-800 hover:text-red-400 ml-2 px-1">Home</a>
    <a href="/#about_me" className="text-md no-underline text-red-800 hover:text-red-400 ml-2 px-1"> About Me</a>
    <a href="/#work" className="text-md no-underline text-red-800 hover:text-red-400 ml-2"> Work</a>
    


  </div>

</nav>

<div className="w-full  px-8 py-8 flex flex-col lg:flex-row"> 
<div className="mt-10 mx-auto w-full lg:max-w-5/12 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
            <p className="text-md tracking-tight ml-2 text-white font-light"> Hi, my name is </p>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Amadi </span>
            <span className="block text-red-800 xl:inline">Justice Chinonso</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
            Software Engineer and Infrastructural Metal Head
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="mailto:nonsoamadi@aol.com" className="w-full animate-bounce flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                Get In Touch
              </a>
            </div>
           
          </div>
        </div>
      </div>

            <div className="w-7/12 hidden lg:flex justify-center items-center p-8">
                <img src={developer} alt="dev img"  className="w-full"/>
            </div>
</div>
</header>
    )
}

export default NavBar;
