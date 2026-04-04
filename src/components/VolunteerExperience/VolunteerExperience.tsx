import { useState } from "react";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import "./VolunteerExperience.css";

interface VolunteerExperience {
  title: string;
  organization: string;
  date: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
}

const VolunteerExperience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImgIdx, setLightboxImgIdx] = useState(0);

  const volunteerImages: string[] = [];

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
    },
  ];

  const toggleExpand = (i: number) => setExpanded(expanded === i ? null : i);

  const openLightbox = (imgIdx: number) => {
    setLightboxImgIdx(imgIdx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImgIdx(0);
  };

  const navigate = (dir: "prev" | "next") => {
    const newIdx = dir === "prev" ? lightboxImgIdx - 1 : lightboxImgIdx + 1;
    if (newIdx >= 0 && newIdx < volunteerImages.length) {
      setLightboxImgIdx(newIdx);
    }
  };

  const getInitials = (title: string) => {
    const w = title.trim().split(" ");
    return w.length >= 2 ? (w[0][0] + w[1][0]).toUpperCase() : title.slice(0, 2).toUpperCase();
  };

  const isVideo = (url: string) => url.endsWith(".mp4");

  return (
    <>
      <section id="volunteering" className="volunteering-section">
        <h2 className="volunteering-title">Volunteering Experience</h2>

        <div className="volunteering-grid max-w-7xl mx-auto px-6">
          {experiences.map((exp, i) => (
            <article key={i} className="volunteer-card" aria-labelledby={`vol-${i}-title`}>
              {/* CAROUSEL : TOUTES LES IMAGES */}
              {volunteerImages.length > 0 && (
                <div className="media-carousel-container">
                  <div className="media-scroll">
                    {volunteerImages.map((url, idx) => (
                      <button
                        key={idx}
                        className="media-item"
                        onClick={() => openLightbox(idx)}
                        aria-label={`Open media ${idx + 1}`}
                      >
                        {isVideo(url) ? (
                          <video
                            src={url}
                            className="media-thumb"
                            muted
                            loop
                            playsInline
                            onError={() => console.error("Video failed:", url)}
                          />
                        ) : (
                          <img
                            src={url}
                            alt={`${exp.title} ${idx + 1}`}
                            className="media-thumb"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = "/assets/images/fallback.webp";
                              console.error("Image not found:", url);
                            }}
                          />
                        )}
                        <div className="media-overlay">
                          <FaExternalLinkAlt className="media-icon" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}


              <h3 id={`vol-${i}-title`} className="volunteer-title">
                {exp.title}
              </h3>

              <p className="volunteer-short">{exp.short}</p>

              <p className="volunteer-date">
                <FaCalendarAlt className="text-xs" /> {exp.date}
              </p>

              <p className="volunteer-description">{exp.description}</p>

              <button
                className="toggle-details"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(i);
                }}
                aria-expanded={expanded === i}
                aria-controls={`details-${i}`}
              >
                {expanded === i ? (
                  <>Hide Details <FaChevronUp className="chevron-icon" /></>
                ) : (
                  <>Show Details <FaChevronDown className="chevron-icon" /></>
                )}
              </button>

              <div
                id={`details-${i}`}
                className={`details-container ${expanded === i ? "expanded" : ""}`}
              >
                <ul className="volunteer-details">
                  {exp.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="volunteer-techs">
                {exp.technologies.map((t, idx) => (
                  <span key={idx} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="volunteer-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on LinkedIn <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* LIGHTBOX GLOBAL */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>

          <button
            className="lightbox-nav left"
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
            disabled={lightboxImgIdx === 0}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <button
            className="lightbox-nav right"
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
            disabled={lightboxImgIdx >= volunteerImages.length - 1}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          <div className="lightbox-content">
            {isVideo(volunteerImages[lightboxImgIdx]) ? (
              <video
                src={volunteerImages[lightboxImgIdx]}
                className="lightbox-media"
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={volunteerImages[lightboxImgIdx]}
                alt={`Volunteer media ${lightboxImgIdx + 1}`}
                className="lightbox-media"
              />
            )}
          </div>

          <div className="lightbox-counter">
            {lightboxImgIdx + 1} / {volunteerImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerExperience;