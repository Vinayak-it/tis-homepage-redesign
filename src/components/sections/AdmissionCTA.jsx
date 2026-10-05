import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function AdmissionCTA() {
  return (
    <section className="admission-section" id="admissions">
      <div className="admission-container">

        <motion.div
          className="admission-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">
            07 — ADMISSIONS
          </p>

          <h2>
            Ready to begin
            <span>the journey?</span>
          </h2>
        </motion.div>

        <motion.div
          className="admission-action"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            Take the next step and discover what Tulas
            International School has to offer.
          </p>

          <a href="#contact">
            Start your application
            <ArrowUpRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default AdmissionCTA;