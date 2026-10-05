import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import entranceImage from "../../assets/entrance.png";
import academicImage from "../../assets/academic-building.png";
import libraryImage from "../../assets/library-1.png";
import sportsImage from "../../assets/sports-comp.png";
import boardingImage from "../../assets/boys-hostel.png";
import campusImage from "../../assets/building-1.png";

const tourLocations = [
  {
    name: "Entrance",
    image: entranceImage,
  },
  {
    name: "Academics",
    image: academicImage,
  },
  {
    name: "Library",
    image: libraryImage,
  },
  {
    name: "Sports",
    image: sportsImage,
  },
  {
    name: "Boarding",
    image: boardingImage,
  },
  {
    name: "Campus",
    image: campusImage,
  },
];

function VirtualTour() {
  const [activeLocation, setActiveLocation] = useState(0);

  const activeTour = tourLocations[activeLocation];

  return (
    <section className="tour-section" id="tour">
      <div className="tour-container">

        {/* Section heading */}
        <motion.div
          className="tour-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">07 — EXPERIENCE TIS</p>

          <h2>
            Step inside
            <span>Tulas.</span>
          </h2>

          <p className="tour-intro">
            Explore the spaces where learning, living and growing
            come together at Tulas International School.
          </p>
        </motion.div>

        {/* Main tour visual */}
        <motion.div
          className="tour-visual"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTour.name}
              src={activeTour.image}
              alt={`${activeTour.name} at Tulas International School`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            />
          </AnimatePresence>

          <div className="tour-overlay" />

          <div className="tour-image-content">
            <span>EXPLORE THE CAMPUS</span>

            <h3>
              {activeTour.name}
              <span>at TIS.</span>
            </h3>

            <div className="tour-counter">
              {String(activeLocation + 1).padStart(2, "0")}
              <span>/</span>
              {String(tourLocations.length).padStart(2, "0")}
            </div>
          </div>
        </motion.div>

        {/* Location navigation */}
        <motion.div
          className="tour-locations"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tourLocations.map((location, index) => (
            <button
              key={location.name}
              type="button"
              className={`tour-location ${
                activeLocation === index ? "active" : ""
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              {location.name}

              <ArrowUpRight size={15} />
            </button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="tour-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Discover the campus, learning spaces and environment
            that make life at TIS unique.
          </p>

          <a href="#admissions">
            Explore TIS
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default VirtualTour;