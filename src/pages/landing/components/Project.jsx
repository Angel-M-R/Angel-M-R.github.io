import { string } from 'prop-types';

function Project({img, title, github, deployed, children}) {
  return (
    <div className="w-72 max-sm:w-96 max-2xl:w-[350px] flex flex-col border shadow-sm rounded-xl bg-black border-gray-700 shadow-slate-700/[.7]">
      <img className="w-full h-[190px] rounded-t-xl" src={img} alt="Image Description" />
      <div className="p-4 md:p-5 h-[148px]">
        <p className="mt-1  text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <h3 className="text-lg text-gray-800 dark:text-white mt-2 mb-5">
          {children}
        </h3>
        {github && 
          <a className="bg-slate-800 font-medium tracking-wider px-5 py-2 rounded-full hover:bg-slate-900 mr-3"
          target="_blank"
          href={github} rel="noreferrer">
          <i className="fa-brands fa-github"></i> Github</a>
        }
        {deployed && 
          <a className="bg-slate-800 font-medium tracking-wider px-5 py-2 rounded-full hover:bg-slate-900"
          target="_blank"
          href={github} rel="noreferrer">
          <i className="fa-solid fa-link font-bold
        "></i> Live</a>
        }
      </div>
    </div>
  )
}

Project.propTypes = {
  img: string,
  title: string,
  github: string,
  deployed: string,
}

export {Project}