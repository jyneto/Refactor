import React from "react";
import "./AboutMe.css";

export default function AboutMeContent() {
  return (
    // <div className="aboutMe-page">
    //   <div className="aboutMe-container">
    //     {/* Left Column: About Me, Education, Interest & Goals */}
    //     <div className="aboutMe-left">
    //       <section className="intro">
    //         <h2 className="aboutMe-title">About Me</h2>
    //         <p>
    //           I’m a future developer, swapping paintbrushes for problem-solving
    //           and pixels. My curiosity? Never-ending. My love for figuring out how
    //           things work? Whether it’s art, tech, or DIY projects—I’m all in.
    //         </p>
    //         <p>
    //           With 17 years of work-life experience, I’ve mastered the art of
    //           juggling projects, meeting deadlines, and working with all kinds of
    //           teams. Paying attention to details and customer needs isn’t just a
    //           skill—it’s second nature.
    //         </p>
    //         <p>
    //           Now, I’m bringing that same focus and drive into the world of
    //           development. Ready to build, break, and learn.
    //         </p>

    //         <h3 className="education-title">Education</h3>
    //         <ul>
    //           <li>
    //             Completed a municipal education (Komvux) course in network
    //             technology and web development in 2023, learning the basics of
    //             networks, databases (MySQL, PHP), and programming with C#.
    //           </li>
    //           <li>
    //             Currently studying Fullstack .NET at Chas Academy, focusing on
    //             OOP, databases (SSMS, ORM, Entity Framework), and frontend
    //             development (HTML5, CSS3, JavaScript, React).
    //           </li>
    //           <li>
    //             Curriculum includes advanced fullstack development, API, and Agile
    //             methodology.
    //           </li>
    //         </ul>

    //         <h3 className="interestGoal-title">Interest & Goals</h3>
    //         <ul>
    //           <li>
    //             Particularly interested in backend development but also value the
    //             frontend.
    //           </li>
    //           <li>
    //             Actively seeking trainee opportunities to apply my knowledge and
    //             further develop as a developer.
    //           </li>
    //           <li>
    //             Determined and eager to learn more, despite lacking extensive
    //             experience.
    //           </li>
    //         </ul>

    //
    //       </section>
    //     </div>

    //     {/* Right Column: Testimonials */}
    //     <div className="aboutMe-right">
    //       <section className="testimonials">
    //         <article className="article-card">
    //         <h2 className="testimonial-title">Testimonials</h2>
    //           <p className="testimonial-text">
    //             "Focused, gets things done within the timeframe, humble and open
    //             to learning from others, responsible, good listener, takes every
    //             opportunity."
    //           </p>
    //           <p>
    //             -{" "}
    //             <a
    //               href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/"
    //               target="_blank"
    //               rel="noopener noreferrer" className="linkedIn-link"
    //             >
    //               Camilla Söderman
    //             </a>{" "}
    //             &{" "}
    //             <a
    //               href="https://www.linkedin.com/in/mj-yen-eng/"
    //               target="_blank"
    //               rel="noopener noreferrer" className="linkedIn-link"
    //             >
    //               MJ Eng
    //             </a>
    //           </p>
    //         </article>
    //       </section>
    //     </div>
    //   </div>
    // </div>

    <section className="aboutMe-page">
      {/* Experience Section (Top) */}

      <h1 className="header-title">About Me</h1>

      <div className="aboutMe-grid">
        <div className="aboutMe-cards">
          <p>
            I’m a future developer, swapping paintbrushes for problem-solving
            and pixels. My curiosity? Never-ending. My love for figuring out how
            things work? Whether it’s tech or DIY projects—I’m all in.
          </p>
          <p>
            With 17 years of work-life experience, I’ve mastered the art of
            juggling projects, meeting deadlines, and working with all kinds of
            teams. Paying attention to details and customer needs isn’t just a
            skill—it’s second nature.
          </p>
          <p>
            Now, I’m bringing that same focus and drive into the world of
            development. Ready to build, break, and learn.
          </p>

          <p>Make me your next project. I promise, it’ll be worth it.</p>
        </div>
      </div>

      <h1 className="header-title">Education</h1>

      <div className="aboutMe-grid">
        <div className="aboutMe-cards">
          <ul>
            <li>
              Completed a municipal education (Komvux) course in network
              technology and web development in 2023, learning the basics of
              networks, databases{" "}
              <span className="text-bold">(MySQL, PHP)</span>, and programming
              with <span className="text-bold">C#</span>.
            </li>
            <li>
              Currently studying{" "}
              <span className="text-bold">Fullstack .NET </span>at Chas Academy,
              focusing on <span className="text-bold">OOP </span>, databases{" "}
              <span className="text-bold">(SSMS, ORM, Entity Framework)</span>,
              and frontend development{" "}
              <span className="text-bold">
                (HTML5, CSS3, JavaScript, React)
              </span>{" "}
              .
            </li>
            <li>
              Curriculum includes advanced fullstack development,{" "}
              <span className="text-bold">REST API</span>,{" "}
              <span className="text-bold">Azure</span> and{" "}
              <span className="text-bold">Agile methodology.</span>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="header-title">Testimonials</h1>

      <div className="aboutMe-grid">
        <div className="aboutMe-cards">
        <article className="testimonial-text">
            <p>
              "Jag hade förmånen att arbeta med Jane när hon var volontär på
              Swetugg i början på februari. Jane är driven, kompetent, social
              och tar egna initiativ, jag skulle gärna arbeta med henne igen."
        
            -{" "}
            <a
              href="https://www.linkedin.com/in/magnustimner/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedIn-link"
            >
              Magnus Timner
            </a>

            </p>
          </article>

          <article className="testimonials">
            <p className="testimonial-text">
              "Focused, gets things done within the timeframe, humble and open
              to learning from others, responsible, good listener, takes every
              opportunity."
              -{" "}
              <a
                href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedIn-link"
              >
                Camilla Söderman
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/mj-yen-eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedIn-link"
              >
                MJ Eng
              </a>

            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
