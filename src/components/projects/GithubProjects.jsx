
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/jyneto/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (repo) =>
            repo.name &&
            ["OOP-Basics--Zoo-", "Stack-List", "SchoolDB"].includes(repo.name)
        );

        setTimeout(() => {
          setProjects(filteredData);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <main className="main-content">
        <section className="git-projects">
          <h1 className="h1-puffloader">Projects</h1>
          <div className="puff-loader">
            <PuffLoader color="#30dbc8" size={50} />
          </div>
          <p className="loading-text">Loading projects from Github using API...</p>
        </section>
      </main>
    );
  }
  
  return (
    <div className="git-projects">
      <h1 className="project-h1">Projects</h1>
      <div className="projects-grid">
        {projects.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="cards project-link"
          >
            <h3 className="project-title">{repo.name}</h3>
            <p className="project-description">{repo.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}