import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
} from "react-icons/fa";
import SectionReveal from "../shared/SectionReveal";

interface VolunteerExperience {
  title: string;
  organization: string;
  date: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  metrics: string[];
}

const VolunteerExperience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences: VolunteerExperience[] = [
    {
      title: "Local Vice President – AIESEC, Outgoing Global Volunteer",
      organization: "AIESEC Bizerte",
      date: "2024 – 2025",
      short: "Led a team to promote global volunteering opportunities.",
      description:
        "Led a team to promote global volunteering opportunities. Increased program participation by 10% through marketing and micro-events. Partnered with international organizations to facilitate cross-cultural exchange.",
      details: [
        "Led a team to promote global volunteering opportunities",
        "Increased program participation by 10% through marketing and micro-events",
        "Partnered with international organizations to facilitate cross-cultural exchange",
        "Conducted training sessions and strategic planning",
      ],
      technologies: ["Leadership", "Marketing", "Event Planning", "Team Management"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "Increased participation by 10%",
        "Led team of 15+ members",
        "Organized 5+ micro-events",
      ],
    },
    {
      title: "Conference Manager",
      organization: "AIESEC Bizerte",
      date: "17, 18 Nov 2024",
      short: "Coordinated a 90+ participant local conference.",
      description:
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics. Adapted real-time schedules to maximize engagement. Managed guest speakers and ensured smooth execution.",
      details: [
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics",
        "Adapted real-time schedules to maximize engagement",
        "Managed guest speakers and ensured smooth execution",
      ],
      technologies: ["Event Management", "Logistics", "Public Speaking", "Coordination"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "Managed 90+ participants",
        "100% on-time execution",
        "95% satisfaction rate",
      ],
    },
    {
      title: "Conference Organizer",
      organization: "AIESEC Bizerte",
      date: "2023 – 2024",
      short: "Directed a 3-day conference with cross-functional team management.",
      description:
        "Directed a 3-day conference with cross-functional team management. Ensured quality delivery and timely execution across all event activities.",
      details: [
        "Directed a 3-day conference with cross-functional team management",
        "Ensured quality delivery and timely execution across all event activities",
      ],
      technologies: ["Project Management", "Agile", "Team Leadership", "Execution"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "3-day conference execution",
        "Led cross-functional team",
        "Zero incidents",
      ],
    },
  ];

  const toggleExpand = (i: number) => setExpanded(expanded === i ? null : i);

  const getInitials = (title: string) => {
    const w = title.trim().split(" ");
    return w.length >= 2 ? (w[0][0] + w[1][0]).toUpperCase() : title.slice(0, 2).toUpperCase();
  };

  return (
    <section id="volunteering" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
            Volunteering Experience
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Leadership and organizational skills demonstrated through impactful community initiatives.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-bordeaux-500/40 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-slate-800 text-xl font-bold">
                    {getInitials(exp.title)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    <FaCalendarAlt className="w-3 h-3" />
                    {exp.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {exp.title}
                </h3>
                <p className="text-purple-300 text-sm font-medium mb-3">
                  {exp.organization}
                </p>

                <p className="text-slate-500 text-sm mb-4 flex-grow">
                  {exp.short}
                </p>

                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrophy className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-purple-300 font-semibold">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.metrics.map((metric, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-1">
                        <span className="text-purple-400">•</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(i);
                  }}
                  className="flex items-center gap-2 text-sm text-bordeaux-400 hover:text-bordeaux-300 transition-colors mb-3"
                >
                  {expanded === i ? (
                    <>
                      Hide Details <FaChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show Details <FaChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 text-sm text-gray-300 mb-4">
                    {exp.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-md border border-purple-700/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on LinkedIn <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperience;
