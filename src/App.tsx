import Loader from '@/components/Loader'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StatusBar from '@/components/StatusBar'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['home', 'stack', 'projects', 'contact']

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <StatusBar />
    </>
  )
}
