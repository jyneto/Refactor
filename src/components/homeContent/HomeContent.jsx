import MyImage from "../../assets/profil1.webp";

export default function HomeContent() {
  return (
    <div className="home-grid">
      <div className="home-text">
        <h5 className="h2home">Hi,my name is</h5>
      
          <span className="text-cursive">Jane Toledo</span>
        
        <p>
          I’m a Full-Stack .NET Developer student, a former painter, a full-time
          mom, a hopeless romantic, and a gym rat who mostly lifts… excuses.
        </p>
        <p>
          My hunger for learning programming? Endless. My determination to
          improve? Unstoppable.
        </p>
        <p>
          Whether you’re looking for an eager intern or scouting for future
          talent, I’m ready to learn, build, and bring fresh energy to your
          team.
        </p>
        <p>
          If you’ve got the time (I promise not to waste it), be my Master Yoda,
          and I’ll be the most dedicated Padawan you’ve ever trained.
        </p>
        <p>
          Still curious? Check out my projects and see what I’ve been up to!
        </p>
        <a href="projects" className="viewProject-button">
          View Projects
        </a>
      </div>
      <div className="home-image">
        <img src={MyImage} alt="Jane Toledo" />
      </div>
    </div>
  );
}
