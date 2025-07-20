import React, { useState } from "react";
import "./AccordionSection.css";

function AccordionSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div className={`accordion-item ${isActive ? "active" : ""}`} key={index}>
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${index}`}
            >
              <span className="accordion-title">{item.title}</span>
              <span className={`accordion-icon ${isActive ? "open" : ""}`}>
                {isActive ? <span>−</span> : <span>+</span>}
              </span>
            </button>
            <div
              id={`accordion-content-${index}`}
              className={`accordion-content ${isActive ? "active" : ""}`}
              style={{ display: isActive ? "block" : "none" }}
            >
              {Array.isArray(item.content) && item.content.length > 0 ? (
                item.content.map((section, i) => {
                  switch (section.type) {
                    case "paragraph":
                      return <p key={i}>{section.text}</p>;
                    case "subtitle":
                      return (
                        <h4 key={i} className="accordion-subtitle">
                          {section.text}
                        </h4>
                      );
                    case "image":
                      return (
                        <img
                          key={i}
                          src={section.src}
                          alt={section.alt || ""}
                          className={`accordion-image ${section.align || "left"}`}
                          onError={(e) =>
                            console.log(`Image load failed: ${section.src}`, e)
                          }
                        />
                      );
                    case "list":
                      return section.ordered ? (
                        <ol key={i} className="accordion-list ordered">
                          {section.items.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ol>
                      ) : (
                        <ul key={i} className="accordion-list unordered">
                          {section.items.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      );
                    case "bullet":
                      return (
                        <div key={i} className="accordion-bullet">
                          <span className="bullet-dot">•</span>
                          <span className="bullet-title">{section.title}</span>
                          <p className="bullet-text">{section.text}</p>
                        </div>
                      );
                    default:
                      return null;
                  }
                })
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionSection;
