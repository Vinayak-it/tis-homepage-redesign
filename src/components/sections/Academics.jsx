import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Lightbulb,
  Globe2,
} from "lucide-react";

const academicFeatures = [
  {
    number: "01",
    icon: BookOpen,
    title: "Digital Learning",
    description:
      "Technology-enabled classrooms create an engaging environment for modern learning.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Experiential Learning",
    description:
      "Students learn through projects, activities and experiences that extend beyond textbooks.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Global Outlook",
    description:
      "An education designed to encourage curiosity, confidence and a broader perspective.",
  },
];

function Academics() {
  return (
    <section className="academics-section" id="academics">
      <div className="academics-container">

        {/* Heading */}
        <motion.div
          className="academics-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">02 — ACADEMICS</p>

            <h2>
              Learning that goes
              <span>beyond the classroom.</span>
            </h2>
          </div>

          <p className="academics-intro">
            TIS combines academic learning with experiences that encourage
            students to explore, question and develop their individual
            strengths.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="academic-cards">
          {academicFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="academic-card"
                key={feature.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >
                <div className="academic-card-top">
                  <span>{feature.number}</span>

                  <div className="academic-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="academic-card-content">
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                <div className="academic-card-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Academics;