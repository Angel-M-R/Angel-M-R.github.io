import { SectionTitle } from "../components/SectionTitle"
import coverwallet from "../../../assets/coverwallet.png";
import bbvaIT from "../../../assets/bbvaIT.png";
import { useState } from "react";

function Timeline() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col">
      <SectionTitle title="My Timeline"/>
      {/* CW */}
      <div className="min-w-[50%] max-sm:max-w-[350px] mx-auto mt-5">
        <div className="my-2 first:mt-0">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Mar. 2022 - PRESENT
          </h3>
        </div>
        <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <img className="flex-shrink-0 w-7 h-7 rounded-full" src={coverwallet} alt="Coverwallet logo" />
          </div>
        </div>
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              CoverWallet Aon Company
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 ">
              <span className="font-bold">Front-end developer</span> using react, creating form projects of the insurance company.
              <br/> Aon is one of the biggest Insurance companies in the world.
            </p>
            <div className="flex gap-2 mt-1 text-gray-200">
              <div>
                <i className="fa-brands fa-react mt-1 mr-1"></i>
                <span className="max-sm:hidden">React</span>
              </div>
              <div className="flex justify-center">
                <i className="fa-brands fa-node text-xl mr-1"></i>
                <span className="max-sm:hidden">Node</span>
              </div>
              <div>
                <i className="fa-brands fa-figma mt-1 mr-1"></i>
                <span className="max-sm:hidden">Figma</span>
              </div>
              <div>
                <i className="fa-solid fa-s mt-1 mr-1"></i>
                <span className="max-sm:hidden">StoryBook</span>
              </div>
              <div>
                <i className="fa-solid fa-vial mr-1"></i>
                <span className="max-sm:hidden">Jest</span>
              </div>
              <div>
                <i className="fa-solid fa-vial-virus mr-1"></i>
                <span className="max-sm:hidden">Cypress</span>
              </div>
              <div>
                <i className="fa-solid fa-dog mr-1"></i>
                <span className="max-sm:hidden">Datadog</span>
              </div>
            </div>
          </div>
        </div>
        {/* BBVA */}
        <div className="my-2 first:mt-0">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Oct. 2019 - Mar. 2022
          </h3>
        </div>
      
        <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <img className="flex-shrink-0 w-7 h-7 rounded-full" src={bbvaIT} alt="Coverwallet logo" />
          </div>
        </div>
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              BBVA IT
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              <span className="font-bold">Front-end developer</span> developing the mobile app, creating and maintaining operatives.
              <br/>BBVA is one of the biggest banks in Spain. Awarded with the prize of Best Mobile Banking App for many years.
            </p>
            <div className="flex gap-2 mt-1 text-gray-200">
              <div className="flex">
                <i className="fa-brands fa-ember text-xl mr-1 max-sm:text-2xl"></i>
                <span className="max-sm:hidden">Ember JS</span>
              </div>
              <div className="flex">
                <i className="fa-solid fa-bug mt-1 mr-1"></i>
                <span className="max-sm:hidden">Bugsnag</span>
              </div>
              <div className="flex">
                <i className="fa-brands fa-atlassian mr-1 mt-1"></i>
                <span className="max-sm:hidden">Bamboo</span>
              </div>
              <div>
                <i className="fa-solid fa-vial-virus mr-1"></i>
                <span className="max-sm:hidden">Cypress</span>
              </div>
            </div>
          </div>
        </div>
      
        <div className={`ps-[7px] flex gap-x-3 mt-1 ${showMore ? 'hidden' : ''}`}>
          <button 
            type="button" 
            className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="hs-timeline-collapse-content" data-hs-collapse="#hs-timeline-collapse"
            onClick={() => setShowMore(true)}
            >
            <i className="fa-solid fa-angle-down"></i>
            <span className="hover:underline">Show older</span>
          </button>
        </div>
        <div className={`${showMore ? '' : 'hidden'}`}>
        {/* Studies */}

        <div id="hs-timeline-collapse" className="hs-collapse  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-timeline-collapse-content">
            <h3 className="my-2 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">
              2017 - 2019
            </h3>
      
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>
      
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg className="flex-shrink-0 w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              Studies: Web application development 
              </h3>
              <div className="flex gap-2 mt-1 text-gray-200">
              <div className="flex">
                <i className="fa-brands fa-java mt-1 mr-1 font-bold"></i>
                <span className="max-sm:hidden">Java</span>
              </div>
              <div className="flex">
                <i className="fa-brands fa-js mt-1 mr-1"></i>
                <span className="max-sm:hidden">JavaScript</span>
              </div>
              <div className="flex">
                <i className="fa-brands fa-css3-alt mt-1 mr-1"></i>
                <span className="max-sm:hidden">CSS</span>
              </div>
              <div>
                <i className="fa-brands fa-php mr-1"></i>
                <span className="max-sm:hidden">PHP</span>
              </div>
              <div>
                <i className="fa-solid fa-database mr-1"></i>
                <span className="max-sm:hidden">Databases</span>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* MultiFacuetCoin */}
        <div className="min-w-[50%] max-sm:max-w-[350px] mx-auto mt-2">
        <div className="my-2 first:mt-0">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Jun. 2015
          </h3>
        </div>
        <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <i className="fa-solid fa-globe text-base"></i>
              MultiFaucetco.in
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 ">
              First production functional website using Wordpress as CMS and Bootstrap for styles, when I had 16 years old.
              <br/>This website was giving Cryptocurrencies as exchange for viewing ads (BTC price here 200$)
            </p>
            <div className="flex gap-2 mt-1 text-gray-200">
              <a 
                href="https://web.archive.org/web/20150616151304/http://www.multifaucetco.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 ml-0.5 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer border-gray-500">
                Check it
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
        {/* Hackermania */}
        <div className="min-w-[50%] max-sm:max-w-[350px] mx-auto mt-2">
          <div className="my-2 first:mt-0">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              21 Jan. 2011
            </h3>
          </div>
          <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <i className="fa-solid fa-globe text-base"></i>
                Hackermania Forum
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 ">
                Hacked games related forum, Nintendo DS games, online games, for fun computer virus...
                <br/>With the horrible tacky color style of the time
              </p>

                </div>
            </div>
          </div>
          <div className={`ps-[7px] flex gap-x-3 mt-1 ${showMore ? '' : 'hidden'}`}>
          <button 
            type="button" 
            className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="hs-timeline-collapse-content" data-hs-collapse="#hs-timeline-collapse"
            onClick={() => setShowMore(false)}
            >
            <i className="fa-solid fa-angle-up"></i>
            <span className="hover:underline">Show less</span>
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export {Timeline}