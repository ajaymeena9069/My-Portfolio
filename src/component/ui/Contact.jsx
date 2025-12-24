/* eslint-disable no-undef */
import React from "react";
import emailjs from "emailjs-com";
export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again!");
        }
      );
  };

  console.log(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  return (
    <section id="contact" className="contact">
      <div className="contact-container container">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        {/* 🔴 ONLY CHANGE: onSubmit added */}
        <form onSubmit={sendEmail}>
          {/* Row 1 */}
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="input-box">
            <div className="input-field">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          {/* Message */}
          <div className="textarea-field">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          {/* Button */}
          <div className="btn-box btns">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
