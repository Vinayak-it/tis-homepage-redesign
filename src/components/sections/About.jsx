import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "22",
    suffix: " Acres",
    label: "Pollution-free campus",
  },
  {
    value: "16+",
    suffix: "",
    label: "Olympic sports",
  },
  {
    value: "24×7",
    suffix: "",
    label: "Medical assistance",
  },
  {
    value: "6:1",
    suffix: "",
    label: "Student-teacher ratio",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Intro */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">01 — ABOUT TIS</p>

          <h2>
            An environment designed
            <span>to help students grow.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Tulas International School provides an environment where
              students can develop academically, creatively and personally.
              The school combines classroom learning with experiences beyond
              academics to encourage curiosity, confidence and character.
            </p>

            <a href="#academics" className="text-link">
              Discover our approach
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="about-highlight"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>THE TIS APPROACH</span>

            <p>
              Learning extends beyond the classroom through academics,
              sport, creativity, leadership and residential life.
            </p>
          </motion.div>

        </div>

        {/* Statistics */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="stat-number">
                {stat.value}
                <small>{stat.suffix}</small>
              </div>

              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;