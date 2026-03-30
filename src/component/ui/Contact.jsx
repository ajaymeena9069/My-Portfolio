/* eslint-disable no-undef */
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaCheck, FaSpinner, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus('success');
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setFormStatus(null), 3000);
        },
        (error) => {
          console.error(error);
          setFormStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setFormStatus(null), 3000);
        }
      );
  };

  const contactInfo = [
    { icon: MdEmail, text: "ajaymeena62408@gmail.com", link: "mailto:ajaymeena62408@gmail.com", color: "#61dafb" },
    { icon: MdPhone, text: "+91 9516624030", link: "tel:+919069692406", color: "#4caf50" },
    { icon: MdLocationOn, text: "Indore, Madhya Pradesh, India", link: "#", color: "#ff6b6b" }
  ];

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>
          <p className="contact-subtitle">Let's work together. Send me a message!</p>
          <div className="heading-line"></div>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info Side */}
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="info-title">Get In Touch</h3>
            <p className="info-description">
              I'm always interested in hearing about new opportunities,
              creative projects, or just having a chat. Feel free to reach out!
            </p>

            <div className="info-cards">
              {contactInfo.map(({ icon: Icon, text, link, color }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="info-icon" style={{ background: `${color}15`, color }}>
                    <Icon />
                  </div>
                  <div className="info-text">
                    <span className="info-label">
                      {index === 0 ? "Email" : index === 1 ? "Phone" : "Location"}
                    </span>
                    <p className="info-value">{text}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-connect">
              <h4>Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/ajaymeena9069" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ajay-meena-0719ab28a" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <div className="input-row">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="input-border"></span>
                </div>

                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div className="input-row">
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    pattern="[0-9]{10}"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="input-border"></span>
                </div>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Email Subject"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div className="input-wrapper textarea-wrapper">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                ></textarea>
                <span className="input-border"></span>
              </div>
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <FaCheck />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="error-message">
                  Failed to send message. Please try again.
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}