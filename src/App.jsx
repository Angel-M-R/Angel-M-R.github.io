import { StartSection } from "./pages/landing/sections/StartSection"
import { Timeline } from "./pages/landing/sections/Timeline"
import { Separator } from "./pages/landing/components/Separator"
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
        <Contact/>
      </main>
    </>
  )
}

export default App
