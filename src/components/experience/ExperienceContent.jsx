import MyCv from "../../assets/myData.json";

export default function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-section">
        <h1 className="header-title">Experience</h1>
        <div className="experience-part">
          {MyCv.resumé.map((resumé, index) => (
            <article className="article-card" key={`${resumé.company}-${index}`}>
              <div className="card-body">
                <h3 className="h3-title">{resumé.company}</h3>
                <h6>{resumé.jobTitle}</h6>
                <p className="description-text">{resumé.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h1 className="header-title">Education</h1>
        <div className="education-part">
          <div className="education-list">
            {MyCv.education.map((education, index) => (
              <article className="article-card" key={`${education.institution}-${index}`}>
                <div className="card-body">
                  <h3 className="h3-title">{education.institution}</h3>
                  <h6>
                    {education.degree} ({education.year})
                  </h6>
                  <p className="description-text">{education.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
