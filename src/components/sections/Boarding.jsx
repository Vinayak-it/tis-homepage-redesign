import { motion } from "framer-motion";

import boardingImage from "../../assets/tis-boarding.png";
import boysHostelImage from "../../assets/boys-hostel.png";
import girlsHostelImage from "../../assets/tis-girls-hostel.png";

function Boarding() {
  return (
    <section className="boarding-section" id="boarding">
      <div className="boarding-container">
        <motion.div
          className="boarding-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">03 — BOARDING LIFE</span>

          <h2>
            A place to live.
            <br />
            <span>Learn. Belong.</span>
          </h2>

          <p>
            Boarding life at TIS creates a supportive environment where
            students can learn, grow, build friendships and develop
            independence beyond the classroom.
          </p>
        </motion.div>

        <motion.div
          className="boarding-main-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src={boardingImage}
            alt="Tulas International School residential campus"
          />

          <div className="boarding-image-caption">
            <span>RESIDENTIAL CAMPUS</span>
            <span>TIS · DEHRADUN</span>
          </div>
        </motion.div>

        <div className="boarding-hostels">
          <motion.article
            className="boarding-hostel-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="boarding-hostel-image">
              <img
                src={boysHostelImage}
                alt="Boys hostel at Tulas International School"
              />
            </div>

            <div className="boarding-hostel-content">
              <span>01</span>
              <h3>Boys' Hostel</h3>
              <p>
                A residential space designed to support comfortable and
                structured student life.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="boarding-hostel-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="boarding-hostel-image">
              <img
                src={girlsHostelImage}
                alt="Girls hostel at Tulas International School"
              />
            </div>

            <div className="boarding-hostel-content">
              <span>02</span>
              <h3>Girls' Hostel</h3>
              <p>
                A welcoming residential environment that encourages
                connection, independence and belonging.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Boarding;