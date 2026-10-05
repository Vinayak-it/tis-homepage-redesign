import { ArrowUpRight } from "lucide-react";
import schoolLogo from "../../assets/schoolLogo.png";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Boarding", href: "#boarding" },
  { name: "Sports", href: "#sports" },
  { name: "Admissions", href: "#admissions" },
];

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img
                src={schoolLogo}
                alt="Tulas International School"
              />
            </a>

            <p>
              Nurturing academic excellence, character,
              creativity and confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <p className="footer-heading">EXPLORE</p>

            <nav>
              {footerLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <p className="footer-heading">CONNECT</p>

            <a href="mailto:info@tis.edu.in">
              info@tis.edu.in
            </a>

            <a href="tel:+919837983791">
              +91 98379 83791
            </a>
          </div>

        </div>

        <div className="footer-cta">
          <div>
            <p>HAVE A QUESTION?</p>

            <h2>
              Let's start a
              <span>conversation.</span>
            </h2>
          </div>

          <a href="mailto:info@tis.edu.in">
            Contact TIS
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tulas International School.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#home">Back to top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;