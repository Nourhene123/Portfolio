import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import SectionReveal from "../shared/SectionReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Open mailto after showing success
    setTimeout(() => {
      window.location.href = `mailto:nourhene.ferchichi2001@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-16 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10" 
        style={{ background: "radial-gradient(circle, #B58169 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" 
        style={{ background: "radial-gradient(circle, #8C4555 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: "rgba(140, 69, 85, 0.1)", 
                color: "#8C4555" 
              }}
            >
              Let's Connect
            </motion.span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2C2A35" }}
            >
              Get in{" "}
              <span style={{ color: "#8C4555" }}>Touch</span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #8C4555, #B58169)" }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#858376" }}>
              Ready to start your next project? Let's discuss how I can contribute to your team.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <SectionReveal delay={0.1}>
            <div className="space-y-4">
              <div 
                className="rounded-xl p-5 shadow-sm"
                style={{ 
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(140, 69, 85, 0.12)"
                }}
              >
                <h3 
                  className="text-lg font-bold mb-3"
                  style={{ color: "#2C2A35" }}
                >
                  Contact Information
                </h3>
                <p className="mb-4 text-sm" style={{ color: "#858376" }}>
                  Available for full-stack AI internships starting January 2026. Open to remote, hybrid, or on-site opportunities.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="mailto:nourhene.ferchichi2001@gmail.com"
                    className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                    style={{ color: "#858376" }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: "rgba(140, 69, 85, 0.08)"
                      }}
                    >
                      <HiOutlineMail className="w-5 h-5" style={{ color: "#8C4555" }} />
                    </div>
                    <span>nourhene.ferchichi2001@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+21621503300"
                    className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                    style={{ color: "#858376" }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: "rgba(140, 69, 85, 0.08)"
                      }}
                    >
                      <BiPhoneCall className="w-5 h-5" style={{ color: "#8C4555" }} />
                    </div>
                    <span>+216 95807707</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/nourhene-ferchichi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{ 
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(140, 69, 85, 0.12)"
                  }}
                >
                  <BsLinkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: "#8C4555" }} />
                  <span style={{ color: "#858376" }}>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Nourhene123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{ 
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(140, 69, 85, 0.12)"
                  }}
                >
                  <BsGithub className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: "#8C4555" }} />
                  <span style={{ color: "#858376" }}>GitHub</span>
                </a>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div 
              className="rounded-xl p-5 shadow-sm"
              style={{ 
                backgroundColor: "#ffffff",
                border: "1px solid rgba(140, 69, 85, 0.12)"
              }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-full flex flex-col items-center justify-center text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(140, 69, 85, 0.1)" }}
                    >
                      <FaCheckCircle className="w-8 h-8" style={{ color: "#8C4555" }} />
                    </motion.div>
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{ color: "#2C2A35" }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "#858376" }}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-3"
                  >
                    <div>
                      <label 
                        className="block text-sm mb-2"
                        style={{ color: "#858376" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ 
                          backgroundColor: "rgba(140, 69, 85, 0.04)",
                          border: "1px solid rgba(140, 69, 85, 0.12)",
                          color: "#2C2A35"
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-sm mb-2"
                        style={{ color: "#858376" }}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ 
                          backgroundColor: "rgba(140, 69, 85, 0.04)",
                          border: "1px solid rgba(140, 69, 85, 0.12)",
                          color: "#2C2A35"
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-sm mb-2"
                        style={{ color: "#858376" }}
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                        style={{ 
                          backgroundColor: "rgba(140, 69, 85, 0.04)",
                          border: "1px solid rgba(140, 69, 85, 0.12)",
                          color: "#2C2A35"
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                      style={{
                        background: "linear-gradient(135deg, #8C4555 0%, #B58169 100%)",
                        color: "#ffffff"
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
