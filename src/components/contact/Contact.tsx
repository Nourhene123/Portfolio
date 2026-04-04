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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can contribute to your team.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Contact Information
                </h3>
                <p className="text-slate-500 mb-6">
                  Available for full-stack AI internships starting January 2026. Open to remote, hybrid, or on-site opportunities.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:nourhene.ferchichi2001@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-bordeaux-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-bordeaux-900/30 flex items-center justify-center">
                      <HiOutlineMail className="w-5 h-5 text-bordeaux-400" />
                    </div>
                    <span>nourhene.ferchichi2001@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+21621503300"
                    className="flex items-center gap-3 text-gray-300 hover:text-bordeaux-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-bordeaux-900/30 flex items-center justify-center">
                      <BiPhoneCall className="w-5 h-5 text-bordeaux-400" />
                    </div>
                    <span>+216 21 503 300</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nourhene-ferchichi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-bordeaux-500/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <BsLinkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Nourhene123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-bordeaux-500/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <BsGithub className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600">GitHub</span>
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                    >
                      <FaCheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm text-slate-600 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-bordeaux-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-bordeaux-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-bordeaux-500/50 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 hover:from-bordeaux-500 hover:to-bordeaux-600 rounded-lg text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
