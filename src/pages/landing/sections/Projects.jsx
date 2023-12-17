import { SectionTitle } from "../components/SectionTitle";
import { Project } from "../components/Project";
import ohstudio from '../../../assets/ohstudio.png';
import tailwindSvg from '../../../assets/svg/tailwind-svg.svg';
import framerMotion from '../../../assets/svg/framer-svg.svg';
import astroIcon from '../../../assets/svg/astro-icon-light.svg';
import ableton from '../../../assets/ableton.jpg';
import nike from '../../../assets/nike.png'
import viteSvg from '../../../assets/svg/vite-svg.svg';
import netflix from '../../../assets/netflix1.jpg';
import portfolio from '../../../assets/portfolio.jpg';
import heroes from '../../../assets/heroes.jpg';

function Projects() {
  return (
    <section className="flex flex-col">
      <SectionTitle title="Projects"/>
      <section className="flex items-center gap-5 w-[50%] max-sm:w-full max-sm:px-5 flex-wrap mx-auto mt-5">
        <Project
          img={ohstudio}
          title="oh.studio Clone"
          github="https://github.com/Angel-M-R/frontend-practice/tree/main/ohStudio">
              <span className="flex gap-1">
                <img width={24} height={24} className="invert" src={tailwindSvg} alt="Tailwind logo" />
                Tailwind
                <i className="fa-solid fa-mobile-screen-button mt-1.5 ml-2"></i>
                Responsive
              </span>
        </Project>
        <Project
          img={ableton}
          title="Ableton Clone"
          github="https://github.com/Angel-M-R/frontend-practice/blob/main/Ableton/assets/css/style.css">
              <span className="flex gap-1">
                <i className="fa-brands fa-css3-alt mt-1.5"></i>
                CSS
                <i className="fa-solid fa-mobile-screen-button mt-1.5 ml-2"></i>
                Responsive
              </span>
        </Project>
        <Project
          img={nike}
          title="Nike Website"
          github="https://github.com/Angel-M-R/nike-tailwind/tree/main/src">
              <span className="flex gap-1">
                <i className="fa-brands fa-react mt-1.5"></i>
                React
                <img width={24} height={24} className="invert" src={tailwindSvg} alt="Tailwind logo" />
                Tailwind
                <img width={24} height={24} className="grayscale" src={viteSvg} alt="Tailwind logo" />
                Vite
              </span>
        </Project>
        <Project
          img={netflix}
          title="Netflix Style Website"
          github="https://github.com/Angel-M-R/LC/tree/main/M1/2%20Extra/src">
              <span className="flex gap-1">
                <i className="fa-brands fa-sass mt-1.5"></i>
                SASS
                <i className="fa-solid fa-box-open mt-1.5 ml-1"></i>
                Parcel
              </span>
        </Project>
        <Project
          img={portfolio}
          title="Responsive portfolio website"
          github="https://github.com/Angel-M-R/LC/tree/main/M1/bedimcode/responsive-portfolio-website-rian-main">
              <span className="flex gap-1">
                <i className="fa-brands fa-css3-alt mt-1.5"></i>
                CSS
              </span>
        </Project>
        <Project
          img={heroes}
          title="React login and routing website"
          >
            <span className="flex gap-1">
              <i className="fa-brands fa-react mt-1.5"></i>
              React
              <i className="fa-solid fa-cube mt-1.5 ml-1"></i>
              Webpack
            </span>
        </Project>
        <Project
          img="https://github.com/Angel-M-R/framer-motion-project/assets/16781447/604b878f-af53-4a8b-a337-1111afe1d878"
          title="Framer motion project"
          github="https://github.com/Angel-M-R/framer-motion-project/tree/main"
          deploy="https://framer-motion-project-angel.vercel.app/"
          >
            <span className="flex gap-1 text-[16px]">
            <i className="fa-brands fa-react mt-1.5"></i>
              React
              <i className="fa-brands fa-sass mt-1.5"></i>
              SASS
              <img width={15} height={15} className="invert" src={framerMotion} alt="Tailwind logo" />
              <span>
                Fr. Motion
              </span>
            </span>
        </Project>
        <Project
          img="https://github.com/Angel-M-R/tesla-clone-astro/assets/16781447/119612f5-ab69-42d9-9483-fa86cd10cf69"
          title="Tesla Clone Astro"
          github="https://github.com/Angel-M-R/tesla-clone-astro"
          deploy="https://tesla-astro-clone.netlify.app"
          >
            <span className="flex gap-1 text-[16px]">
              <i className="fa-brands fa-js mt-1.5"></i>
              JS
              <img width={15} height={15} className="ml-1 mt-1.5" src={astroIcon} alt="Astro logo" />
              Astro
            </span>
        </Project>
      </section>

    </section>
  )
}

export {Projects}