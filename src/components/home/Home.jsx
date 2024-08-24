import React from "react";
import bg from "../../assets/bg.jpg";
const Home = () => {
  return (
    <>
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline ">Bridging</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600 xl:inline">
                    Languages
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Discover seamless translation services, bridging language barriers effortlessly. Access various languages with our intuitive tool for precise communication.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="/trynow"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white font-extrabold bg-gradient-to-r from-sky-400 to-emerald-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Try Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md  sm:rounded-xl">
                <img src={bg} alt="bg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second landing   

        <section className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

        
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              <div className="text-center pb-12 md:pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Bridging<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">Languages</span></h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Discover seamless transliteration services, bridging language barriers effortlessly. Access 16 languages with our intuitive tool for precise communication.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                      <a className="inline-block btn font-bold text-white bg-black w-full mb-4 sm:w-auto sm:mb-0 rounded px-4" href="/trynow">Try Now</a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
    */}
    </>
  );
};

export default Home;
