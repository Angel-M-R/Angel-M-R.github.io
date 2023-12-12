import { SectionTitle } from "../components/SectionTitle";
import { Project } from "../components/Project";
import ohstudio from '../../../assets/ohstudio.png';
import tailwindSvg from '../../../assets/svg/tailwind-svg.svg';
import ableton from '../../../assets/ableton.png';
import nike from '../../../assets/nike.png'
import viteSvg from '../../../assets/svg/vite-svg.svg';
import netflix from '../../../assets/netflix1.jpg';
import portfolio from '../../../assets/portfolio.png';
import heroes from '../../../assets/heroes.png';

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
      </section>

    </section>
  )
}

export {Projects}