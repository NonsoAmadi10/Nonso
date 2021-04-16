import React from 'react';
import cimeeWeb from '../assets/cimee_live.png';
import cimeeMob from '../assets/cimee_mob.png';
import virtually from '../assets/virtually.png';
import okra from '../assets/okra.png';
import nickel from '../assets/nickels.png';

function Skills() {
    return (
        <section className="mt-20 w-full px-12" id="work">
            <h3 className="text-3xl font-semibold animate-pulse">
                Projects
            </h3>

            <div className="flex flex-wrap flex-col lg:flex-row justify-around">
            <div className="max-w-xs text-gray-400 shadow-lg border border-gray-800 rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-400 font-bold text-2xl ">Cimee Web</h1>
                        <p className="text-gray-600 text-sm mt-1">Cimee is a web conferencing application that allows users create a virtual meeting on the fly, it was built on Node JS, React JS and web RTC technologies.</p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={cimeeWeb} alt="Cimee Web"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-xl">{" "}</h1>
                        <a href="https://cimee.live" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                     </div>
            </div>

            <div className="max-w-xs border border-gray-800 shadow-lg rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className=" text-gray-400 font-bold text-2xl">Cimee Mobile</h1>
                        <p className="text-gray-500 text-sm mt-1">

                        Cimee mobile is the android  application  for the cimee web, it was built on Node JS, React Native and web RTC technologies.
                        </p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={cimeeMob} alt="cimee mobile"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-xl">{" "}</h1>
                         <a href="https://play.google.com/store/apps/details?id=com.cim.cimee" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                        
                     </div>
            </div>

            <div className="max-w-xs shadow-lg border border-gray-800 rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-400 font-bold text-2xl">Virtually</h1>
                        <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={virtually} alt="virtually"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-xl">{' '}</h1>
                         <a href="https://d.virtual.herokuapp.com" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                     </div>
            </div>


            <div className="max-w-xs shadow-lg border border-gray-700 rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-500 font-bold text-2xl ">Whistle</h1>
                        <p className="text-gray-400 text-sm mt-1">Make Discussions and conversations more comfortable.</p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src="https://i.ibb.co/4jQ6BR4/Screenshot-3.png" alt="Whistles"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-xl">{' '}</h1>
                         <a href="https://whistle21.herokuapp.com" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                     </div>
            </div>

            <div className="max-w-xs border border-gray-700 shadow-lg rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-500 font-bold text-2xl ">PyOkra</h1>
                        <p className="text-gray-400 text-sm mt-1"> An Open-Source SDK that allows you integrate okra in your python web applications</p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={okra} alt="Okra"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-xl">{' '}</h1>
                         <a href="https://github.com/NonsoAmadi10/Okra" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                     </div>
            </div>

            <div className="max-w-xs border border-gray-700 shadow-lg rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-500 font-bold text-2xl">Nickels</h1>
                        <p className="text-gray-400 text-sm mt-1"> Nickels is a platform that allow users save and invest their small changes in low-risk bonds and treasury bills</p>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={nickel} alt="NICKEL"/>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                         <h1 className="text-gray-200 font-bold text-sm">In Development</h1>
                         <a href="https://netlify.app" className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                            <i className="fa fa-globe" aria-hidden="true"></i></a>
                     </div>
            </div>

            </div>
             
            <div className="flex justify-center items-center w-full p-5">
            <a className="border border-red-800 text-md p-3 border-4 rounded hover:bg-red-500 hover:text-gray-300 font-light" href="https://github.com/NonsoAmadi10"> View More </a>
            </div>
        </section>
    )
}

export default Skills
