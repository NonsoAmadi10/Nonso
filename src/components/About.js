import React from 'react';
import Nonso from '../assets/Nonso.jpg';


function About() {
    return (
        <section className="px-12 py-6 w-full" id="about_me">
            <h3 className="text-3xl font-semibold animate-pulse">
                About Me
            </h3>
        <div className="w-full mt-10 p-2 flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 px-4 mb-4">
            <p className="text-xl text-left text-gray-400">A Software Engineer from Lagos State, Nigeria with 2+ years experience in software development and infrastructural engineering. I am very passionate about building software products that solves complex problem and products that people will love and keep using.
           I specialize mainly in backend-development and infrastructural engineering, however, I also have experience in building picture-perfect pixel frontend pages. I am bullish about the blockchain ecosystem and the potential a decentralized financial system holds for the future.</p>
           
           <div className="flex mt-3 w-full lg:w-4/12 px-4 justify-between">
               <a href="https://github.com/NonsoAmadi10">
               <i className="fa fa-github text-red-800 text-2xl" aria-hidden="true"></i>
               </a>
               <a href="https://linkedin.com/in/justice-amadi">
               <i className="fa fa-linkedin text-blue-300 text-2xl" aria-hidden="true"></i>
               </a>
               <a href="https://linkedin.com/in/justice-amadi">
               <i className="fa fa-twitter text-blue-600 text-2xl" aria-hidden="true"></i>
               </a>
           </div>
        </div>
        <div className="w-full flex justify-center items-center lg:w-5/12">
            <img src={Nonso} alt="nonso" className="w-full shadow-lg" />
        </div>
        </div>


        <div className="mt-20">
        <h3 className="text-3xl font-semibold animate-pulse">
                Skills
            </h3>

            <p className="text-md mt-5"> Here is a list of technologies I have worked with:</p>

            <div className="flex m-auto flex-wrap p-2 mt-8 w-full justify-between">
            <div className="p-3">
            <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="typescript"/>
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/nolan/64/ruby-programming-language.png" alt="ruby"/>
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="nodejs"/>
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/windows/96/000000/ruby-on-rails.png" alt="ruby_on_rails"/>
            
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="react_js"/>
            
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/color/96/000000/redux.png" alt="redux"/>
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/cute-clipart/64/000000/github.png" alt="github"/>
            
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/color/96/000000/google-cloud.png"  alt="gcp"/>
            
            </div>

            <div className="p-3">
            <img src="https://img.icons8.com/color/96/000000/kubernetes.png" alt="k8s"/>
            
            </div>
           

            </div>

        </div>
            
        </section>
    )
}

export default About;
