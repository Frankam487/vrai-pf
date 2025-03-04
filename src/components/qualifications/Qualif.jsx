import { useState } from "react";
import "./qualif.css";

const qualifications = {
  education: [
    {
      title: "Web Design",
      subtitle: "Spain - Institute",
      date: "2021 - Present",
    },
    {
      title: "Art Director",
      subtitle: "Spain - Institute",
      date: "2020 - 2021",
    },
    {
      title: "Développement Web",
      subtitle: "Spain - Institute",
      date: "2018 - 2020",
    },
    {
      title: "UX Expert",
      subtitle: "Spain - Institute",
      date: "2019 - 2023",
    },
  ],
  experience: [
    {
      title: "Product Designer",
      subtitle: "Microsoft - Spain",
      date: "2021 - Present",
    },
    {
      title: "UX Designer",
      subtitle: "Apple Inc - Spain",
      date: "2020 - 2021",
    },
    {
      title: "Web Designer",
      subtitle: "Figma - Spain",
      date: "2018 - 2020",
    },
  ],
};

const Qualif = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualif section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">
        Mon parcours <strong>😉</strong>
      </span>

      <div className="qualif__container container">
        {/* Tabs */}
        <div className="qualif__tabs">
          {["education", "experience"].map((tab) => (
            <div
              key={tab}
              className={`qualif__button ${
                activeTab === tab ? "qualif__active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <i
                className={`uil ${
                  tab === "education"
                    ? "uil-graduation-cap"
                    : "uil-briefcase-alt"
                } qualif__icon`}
              ></i>{" "}
              {tab === "education" ? "Éducation" : "Expérience"}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="qualif__sections">
          <div className="qualif__content qualif__content-active">
            {qualifications[activeTab].map((item, index) => (
              <div className="qualif__data" key={index}>
                {/* Affichage en alternance */}
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualif__title">{item.title}</h3>
                      <span className="qualif__subtitle">{item.subtitle}</span>
                      <div className="qualif__calendar">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                    <div className="qualif__timeline">
                      <span className="qualif__rounder"></span>
                      {index !== qualifications[activeTab].length - 1 && (
                        <span className="qualif__line"></span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="qualif__timeline">
                      <span className="qualif__rounder"></span>
                      {index !== qualifications[activeTab].length - 1 && (
                        <span className="qualif__line"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="qualif__title">{item.title}</h3>
                      <span className="qualif__subtitle">{item.subtitle}</span>
                      <div className="qualif__calendar">
                        <i className="uil uil-calendar-alt"></i> {item.date}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualif;
