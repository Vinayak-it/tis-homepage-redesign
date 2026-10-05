import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import testimonialAshu from "../../assets/tis-testimonial-ashu.png";
import testimonialGulabdas from "../../assets/tis-testimonial-gulabdas.png";
import testimonialNamita from "../../assets/tis-testimonial-namita.png";
import testimonialSandeep from "../../assets/tis-testimonial-sandeep.png";

const testimonials = [
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    image: testimonialNamita,
    quote:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
  },
  {
    name: "Ashu Arora",
    relation: "M/O Manisha Changrani",
    image: testimonialAshu,
    quote:
      "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    image: testimonialSandeep,
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
  },
  {
    name: "Gulabdas Gupta",
    relation: "F/O Annika Gulabdas Gupta",
    image: testimonialGulabdas,
    quote:
      "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return (prevIndex + 1) % testimonials.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  const changeTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* Heading */}
        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">06 — PARENT EXPERIENCES</p>

          <h2>
            Experiences that
            <span>stay with you.</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              className="testimonial-content"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote */}
              <p className="testimonial-quote">
                “{activeTestimonial.quote}”
              </p>

              {/* Parent Info */}
              <div className="testimonial-person">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                />

                <div>
                  <h3>{activeTestimonial.name}</h3>
                  <p>{activeTestimonial.relation}</p>
                </div>
              </div>

              {/* Counter */}
              <div className="testimonial-counter">
                {String(activeIndex + 1).padStart(2, "0")}
                <span>/</span>
                {String(testimonials.length).padStart(2, "0")}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel Pagination */}
        <div className="testimonial-pagination">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`testimonial-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => changeTestimonial(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;