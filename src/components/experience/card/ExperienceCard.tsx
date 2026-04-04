import { memo, useRef, useEffect, useState } from "react";
import CustomButton from "../../../tools/buttons/CustomButton";
import type { ExperienceEntry } from "../Data";
import "./ExperienceCard.css";

export const ExperienceCard = memo(
  ({
    exp,
    isOpen,
    onToggle,
  }: {
    exp: ExperienceEntry;
    isOpen: boolean;
    onToggle: () => void;
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    const [opacity, setOpacity] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      if (!contentRef.current) return;

      const el = contentRef.current;
      const fullHeight = el.scrollHeight;

      if (isOpen) {
        // Expand smoothly
        setAnimating(true);
        setMaxHeight(`${fullHeight}px`);
        setOpacity(1);
        const timeout = setTimeout(() => setAnimating(false), 600);
        return () => clearTimeout(timeout);
      } else {
        // Collapse smoothly
        setAnimating(true);
        setMaxHeight(`${el.scrollHeight}px`);
        setOpacity(0);
        const timeout = setTimeout(() => setAnimating(false), 600);
        requestAnimationFrame(() => {
          setMaxHeight("0px");
        });

        // Force a reflow before setting height to 0 (critical for smooth collapse)

        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    return (
      <article
        className={`experience-card ${isOpen ? "expanded" : ""}`}
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggle();
        }}
      >
        <div className="company">{exp.company}</div>
        <div className="role">{exp.role}</div>
        <div className="meta">
          {exp.period}
          <span className="location">{exp.location}</span>
        </div>

        <div
          ref={contentRef}
          className={`exp-details-wrapper ${animating ? "animating" : ""}`}
          style={{ maxHeight, opacity }}
        >
          <div className="exp-details">
            <div className="desc">
              <ul className="bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="tools-container flex gap-2 mt-4 flex-wrap">
          {exp.tools.map((tool, i) => (
            <CustomButton key={i} text={tool} color="blue" />
          ))}
        </div>

        <div className="expand-indicator">{"▾"}</div>
      </article>
    );
  }
);
