import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import achievement2023 from "../../assets/tis-achievement-2023.png";
import achievement2017 from "../../assets/tis-achievement-2017.png";
import achievement2018 from "../../assets/tis-achievement-2018.png";
import achievement2019 from "../../assets/tis-achievement-2019.png";
import achievement2022 from "../../assets/tis-achievement-2022.png";
import achievement2016 from "../../assets/tis-achievement-2016.png";
import achievement2014 from "../../assets/tis-achievement-2014.png";
import achievement2015 from "../../assets/tis-achievement-2015.png";

const achievements = [
  {
    year: "2014",
    image: achievement2014,
    points: [
      'Launched CSR initiative "The Tortoise" to raise awareness against child labor.',
      "Kuldeep Singh (Class XI) secured 3rd position in the National Taekwondo Championship held in Nepal.",
    ],
  },
  {
    year: "2015",
    image: achievement2015,
    points: [
      'Chairman Sunil Kumar Jain awarded the "Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar."',
      'Executive Director Silky Jain was recognized as the "Youngest Female Entrepreneur" with leadership certification from Oxford University.',
      "Gold and Silver medals in Indo-Bhutan Taekwondo Championship.",
      "National Basketball Championship (Under-14).",
      "Pema Choedon (Class XII) met President Pranab Mukherjee under the Scout & Guide training program.",
    ],
  },
  {
    year: "2016",
    image: achievement2016,
    points: [
      "Ranked No.1 Boarding School in Uttarakhand for Infrastructure Provisions by Education Today.",
      "Hosted the 2nd International Film Festival, featuring artists like Pooja Bhatt, Jimmy Shergill, Divya Dutta, and Nawab Shah.",
      "Chairman of Tulas Group received the Dr. APJ Abdul Kalam Award.",
      "Students won multiple medals in Equestrian Sports at the Excellentia Horse Show in Delhi.",
      "Students excelled in Olympiad examinations.",
    ],
  },
  {
    year: "2017",
    image: achievement2017,
    points: [
      'Honored as the "Best International Boarding School in Uttarakhand" by Merit Awards, presented by Chetan Bhagat.',
      "Rated 'A' Grade in Evidence of Assessment (EOA) by CBSE.",
    ],
  },
  {
    year: "2018",
    image: achievement2018,
    points: [
      "Ranked No.8 in India, No.2 in Uttarakhand, and No.1 in Dehradun in a survey by Education Today.",
      'Awarded "Best Residential School in Uttarakhand" by Golden Star Awards, presented by Kirron Kher.',
      'Recognized as "Best International Boarding School in Uttarakhand" by TV100.',
    ],
  },
  {
    year: "2019",
    image: achievement2019,
    points: [
      "Ranked No.5 Co-Educational Boarding School in North India by The Times of India.",
      "Ranked No.7 Co-Educational Boarding School in India by Education Today.",
      'Certified as "Great Indian Schools" by Forbes.',
      'Awarded "Best Residential School" by Indian School Awards (ISA).',
      'Recognized as "Best Boarding School in Dehradun" among 25 schools.',
      'Won the "International School Award, India" for Best Residential School.',
      "Students achieved medals in State Inter-School Skating and Inter-School Taekwondo tournaments.",
      "Hosted the 1st Tulas International Shooting Tournament.",
      "Organized the 2nd Tulas 3-on-3 Basketball U-18 Tournament.",
    ],
  },
  {
    year: "2022",
    image: achievement2022,
    points: [
      "Ranked No.4 in India, No.2 in Uttarakhand, and No.1 in Dehradun in a survey conducted by Education Today (2021-22).",
      'Principal of Tulas International School listed under "50 Effective Principals" by Education Today.',
      'Awarded "Best Co-ed Boarding School in Dehradun" and No.5 in North India by The Times of India.',
    ],
  },
  {
    year: "2023",
    image: achievement2023,
    points: [
      'Mr. Raunak Jain was awarded "Educational Reformer of the Year" by Uttarakhand Swarnim Award.',
      'Mr. Raunak Jain was honored with "Uttarakhand Icon Awards" by Satpal Maharaj, Minister of Tourism, Uttarakhand.',
      'Mr. Raman Koushal (Headmaster) was listed among the "Top 50 Best Educators" by Education Today.',
      'Mr. Raman Koushal was awarded "The Top School Educator" for Excellence in Holistic Teaching Practices by Indian School Awards.',
      'Mr. Sangeet Bhardwaj was recognized as one of the "Top 100 Influential Educationists in Indian Education" by Indian Education Awards.',
    ],
  },
];

achievements.reverse();

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAchievement = achievements[activeIndex];

  const previousAchievement = () => {
    setActiveIndex((current) =>
      current === 0 ? achievements.length - 1 : current - 1
    );
  };

  const nextAchievement = () => {
    setActiveIndex((current) =>
      current === achievements.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">

        <motion.div
          className="achievements-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            05 — ACHIEVEMENTS
          </span>

          <h2>
            A history of
            <br />
            <span>excellence.</span>
          </h2>
        </motion.div>

        <div className="achievement-years">
          {achievements.map((achievement, index) => (
            <button
              key={achievement.year}
              className={`achievement-year ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {achievement.year}
            </button>
          ))}
        </div>

        <div className="achievement-content">

          <div className="achievement-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeAchievement.year}
                src={activeAchievement.image}
                alt={`Tulas International School achievement ${activeAchievement.year}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>
          </div>

          <div className="achievement-details">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAchievement.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="achievement-current-year">
                  {activeAchievement.year}
                </span>

                <h3>
                  TIS milestones
                </h3>

                <div className="achievement-list">
                  {activeAchievement.points.map((point, index) => (
                    <div
                      className="achievement-point"
                      key={index}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="achievement-controls">
              <button
                type="button"
                onClick={previousAchievement}
                aria-label="Previous achievement year"
              >
                <ChevronLeft size={18} />
              </button>

              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(achievements.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextAchievement}
                aria-label="Next achievement year"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;