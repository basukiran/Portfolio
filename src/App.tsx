import { useState } from 'react';
import { IntroLoader } from '@/components/IntroLoader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectSection } from '@/components/ProjectSection';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { GitHubSection } from '@/components/GitHubSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <IntroLoader onComplete={() => setLoaded(true)} />}
      <div className="grain" />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <ProjectSection />
        <About />
        <Skills />
        <Timeline />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
