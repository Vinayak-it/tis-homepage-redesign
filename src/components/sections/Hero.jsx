import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import campusImage from "../../assets/tis-campus.webp";

function Hero() {
  return (
    <section
  className="hero"
  id="home"
  style={{ backgroundImage: `url(${campusImage})` }}
>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TULAS INTERNATIONAL SCHOOL · DEHRADUN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          Where Potential
          <span>Becomes Possibility.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >
          A learning environment where academic excellence,
          creativity, character and sport come together.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <a href="#about" className="hero-primary-button">
            Explore TIS
            <ArrowUpRight size={18} />
          </a>

          <a href="#admissions" className="hero-secondary-button">
            Apply Now
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}

export default Hero;