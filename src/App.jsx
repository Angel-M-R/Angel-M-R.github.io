import { StartSection } from "./pages/landing/sections/StartSection"
import { Timeline } from "./pages/landing/sections/Timeline"
import { Separator } from "./pages/landing/components/Separator"
import { Projects } from "./pages/landing/sections/Projects"
import { Contact } from "./pages/landing/sections/Contact"

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
        <Separator/>
        <Contact/>
      </main>
    </>
  )
}

export default App
