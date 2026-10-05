import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import footballImage from "../../assets/tis-football.png";
import volleyballImage from "../../assets/tis-volleyball.png";
import basketballImage from "../../assets/tis-basketball.png";
import swimmingImage from "../../assets/tis-swimming.png";
import hockeyImage from "../../assets/tis-hockey.png";
import horseRidingImage from "../../assets/tis-horse-riding.png";
import archeryImage from "../../assets/tis-archery.png";

import cricketImage from "../../assets/tis-cricket.png";
import squashImage from "../../assets/tis-squash.png";
import cyclingImage from "../../assets/tis-cycling.png";
import taekwondoImage from "../../assets/tis-taekwando.png";
import shootingImage from "../../assets/tis-shooting.png";
import tableTennisImage from "../../assets/tis-table-tennis.png";

const sports = [
  {
    name: "Volleyball",
    image: volleyballImage,
  },
  {
    name: "Basketball",
    image: basketballImage,
  },
  {
    name: "Swimming",
    image: swimmingImage,
  },
  {
    name: "Hockey",
    image: hockeyImage,
  },
  {
    name: "Horse Riding",
    image: horseRidingImage,
  },
  {
    name: "Archery",
    image: archeryImage,
  },
  {
    name: "Cricket",
    image: cricketImage,
  },
  {
    name: "Squash",
    image: squashImage,
  },
  {
    name: "Cycling",
    image: cyclingImage,
  },
  {
    name: "Taekwondo",
    image: taekwondoImage,
  },
  {
    name: "Shooting",
    image: shootingImage,
  },
  {
    name: "Table Tennis",
    image: tableTennisImage,
  },
];

const sportsSlides = [
  sports.slice(0, 6),
  sports.slice(6, 12),
];

function BeyondAcademics() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sportsSlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sportsSlides.length) % sportsSlides.length
    );
  };

  return (
    <section className="beyond-section" id="sports">
      <div className="beyond-container">

        <motion.div
          className="beyond-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            04 — BEYOND ACADEMICS
          </span>

          <h2>
            More than
            <br />
            <span>the classroom.</span>
          </h2>

          <p>
            At TIS, students discover their strengths beyond academics
            through sport, creativity, teamwork and experiences that
            encourage them to grow with confidence.
          </p>
        </motion.div>

        <motion.div
          className="sports-feature"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={footballImage}
            alt="Students playing football at Tulas International School"
          />

          <div className="sports-feature-overlay">
            <div>
              <span>SPORTS</span>
              <h3>16+ Sports</h3>
            </div>

            <p>
              Discipline. Teamwork. Confidence.
            </p>
          </div>
        </motion.div>

        <div className="sports-gallery-wrapper">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="sports-gallery"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.35 }}
            >
              {sportsSlides[currentSlide].map((sport, index) => (
                <motion.article
                  className="sport-card"
                  key={sport.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >
                  <div className="sport-card-image">
                    <img
                      src={sport.image}
                      alt={`${sport.name} at Tulas International School`}
                    />
                  </div>

                  <div className="sport-card-content">
                    <span>
                      0{index + 1}
                    </span>

                    <h3>{sport.name}</h3>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="sports-controls">

            <button
              type="button"
              className="sports-arrow"
              onClick={previousSlide}
              aria-label="Previous sports"
            >
              <ArrowLeft size={18} />
            </button>

            <span className="sports-page">
              0{currentSlide + 1} / 0{sportsSlides.length}
            </span>

            <button
              type="button"
              className="sports-arrow"
              onClick={nextSlide}
              aria-label="Next sports"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        <div className="beyond-bottom">

          <div className="beyond-bottom-item">
            <span>SPORTS</span>
            <strong>16+</strong>
          </div>

          <div className="beyond-bottom-item">
            <span>TEAMWORK</span>
            <strong>TOGETHER</strong>
          </div>

          <div className="beyond-bottom-item">
            <span>DEVELOPMENT</span>
            <strong>HOLISTIC</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BeyondAcademics;