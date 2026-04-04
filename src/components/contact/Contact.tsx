import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nourhene.ferchichi2001@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="contact-container">
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Get in Touch
      </p>
      
      <div className="contact-content">
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input message-input"
                rows={5}
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="social-links">
        <a
          href="mailto:nourhene.ferchichi2001@gmail.com"
          className="social-icon"
          aria-label="Email"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/nourhene-ferchichi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Nourhene123"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <BsGithub />
        </a>
        <a
          href="tel:+21621503300"
          className="social-icon"
          aria-label="Phone"
        >
          <BiPhoneCall />
        </a>
      </div>
    </div>
  );
};

export default Contact;
