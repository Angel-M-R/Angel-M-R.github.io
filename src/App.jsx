import { StartSection } from "./pages/landing/sections/StartSection"
import { Timeline } from "./pages/landing/sections/Timeline"
import { Separator } from "./pages/landing/components/Separator"
import { Projects } from "./pages/landing/sections/Projects"

function App() {

  return (
    <>
      {/* <header>
        Header
      </header> */}
      <main>
        <StartSection/>
        <Separator/>

        <Timeline/>
        <Separator/>
        <Projects/>

      </main>
      <footer className="footer-section mt-[2344px]">        
      </footer>
    </>
  )
}

export default App
