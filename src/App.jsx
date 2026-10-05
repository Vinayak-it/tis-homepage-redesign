import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Boarding from "./components/sections/Boarding";
import BeyondAcademics from "./components/sections/BeyondAcademics";
import Achievements from "./components/sections/Achievements";
import Testimonials from "./components/sections/Testimonials";
import VirtualTour from "./components/sections/VirtualTour";
import AdmissionCTA from "./components/sections/AdmissionCTA";
import Footer from "./components/layout/Footer";  

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Boarding />
        <BeyondAcademics />
        <Achievements />
        <Testimonials />
        <VirtualTour />
        <AdmissionCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;