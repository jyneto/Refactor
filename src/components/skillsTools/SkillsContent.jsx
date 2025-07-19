import React from "react";
import MyCv from "../../assets/myData.json";
import "./Skills.css";

export default function SkillsContent() {
  return (
    
      <section className="skillsTools-page">
        <h1 className="header-title">Skills & Tools</h1>

        <div className="skillsTools-grid">
          <div className="skills-cards">
            <h2 className="title">Frontend</h2>
            <ul>
              {MyCv.frontEnd.map((frontEnd, index) => (
                <li key={`${frontEnd}-${index}`}>{frontEnd}</li>
              ))}
            </ul>
          </div>

          <div className="skills-cards">
            <h2 className="title">Backend</h2>
            <ul>
              {MyCv.backEnd.map((backEnd, index) => (
                <li key={`${backEnd}-${index}`}>{backEnd}</li>
              ))}
            </ul>
          </div>

          <div className="skills-cards">
            <h2 className="title">Language</h2>
            <ul>
              {MyCv.languages.map((language, index) => (
                <li key={`${language}-${index}`}>{language}</li>
              ))}
            </ul>
          </div>

          <div className="skills-cards">
            <h2 className="title">Tools</h2>
            <ul>
              {MyCv.tools.map((tools, index) => (
                <li key={`${tools}-${index}`}>{tools}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
}
