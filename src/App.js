import React from 'react';
import ParticlesBg from 'particles-bg';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Socials from './components/Socials';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="">
      <ParticlesBg color="#ff0000" type="cobweb" bg={true} />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Scroll />
      <Socials />
    </div>
  );
}

export default App;
