import { motion } from "framer-motion";
import SectionReveal from "../shared/SectionReveal";
import { FaGraduationCap, FaUniversity, FaCalendar, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Software Engineering Degree",
      school: "TEK-UP University",
      location: "Tunis, Tunisia",
      period: "2021 – 2026",
      description:
        "5-year engineering program specializing in software development, AI, and full-stack technologies.",
      achievements: [
        "Specialized in AI/ML and full-stack development",
        "Completed multiple end-of-study projects with industry partners",
        "Active member of university tech community",
      ],
      gpa: "Strong Academic Standing",
      icon: FaUniversity,
    },
    {
      degree: "Baccalaureate in Mathematics",
      school: "High School",
      location: "Bizerte, Tunisia",
      period: "2020 – 2021",
      description:
        "Mathematics-focused baccalaureate with excellent grades, providing strong analytical foundation.",
      achievements: [
        "Strong foundation in mathematics and problem-solving",
        "Developed analytical thinking skills",
      ],
      gpa: "Honors",
      icon: FaGraduationCap,
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "Oracle Certified Associate",
      issuer: "Oracle",
      date: "2024",
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
            Education
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Academic background and continuous learning journey in software engineering and AI.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, idx) => (
            <SectionReveal key={idx} delay={idx * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-bordeaux-500/40 hover:shadow-xl transition-all duration-500 group h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bordeaux-600 to-bordeaux-800 flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <edu.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-bordeaux-300 font-medium">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-bordeaux-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-bordeaux-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaAward className="text-bordeaux-400" />
                    {edu.gpa}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="text-bordeaux-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-bordeaux-900/40 to-bordeaux-800/30 rounded-full border border-bordeaux-500/30 text-bordeaux-200 text-sm font-medium"
              >
                <span className="font-semibold">{cert.name}</span>
                <span className="text-bordeaux-400 mx-2">•</span>
                <span className="text-slate-500">{cert.issuer}</span>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Education;
