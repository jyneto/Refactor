import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOwnRepos = fetch("https://api.github.com/users/jyneto/repos").then((res) =>
      res.json()
    );

    const fetchChasChingRepo = fetch(
      "https://api.github.com/repos/CamillaSoderman/Chas-Ching"
    ).then((res) => res.json());

    const fetchChasChingReadme = fetch(
      "https://api.github.com/repos/CamillaSoderman/Chas-Ching/readme"
    )
      .then((res) => res.json())
      .then((data) => atob(data.content)) // Decode base64
      .then((content) => content.split("\n").slice(0, 5).join("\n"))
      .catch(() => "README preview unavailable");

    Promise.all([fetchOwnRepos, fetchChasChingRepo, fetchChasChingReadme])
      .then(([ownRepos, chasChing, readmePreview]) => {
        // Filter own projects
        const filteredOwn = ownRepos.filter((repo) =>
          ["Stack-List", "SchoolDB"].includes(repo.name)
        );

        // Attach README fallback if description is missing
        if (!chasChing.description) {
          chasChing.description = readmePreview;
        }

        // Combine both
        const allProjects = [...filteredOwn, chasChing];

        setTimeout(() => {
          setProjects(allProjects);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  if (loading) {
    return (
      <main className="main-content">
        <section className="git-projects">
          <h1 className="h1-puffloader">Projects</h1>
          <div className="puff-loader">
            <PuffLoader color="#30dbc8" size={50} />
          </div>
          <p className="loading-text">
            Loading projects from GitHub using API...
          </p>
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
            <p className="project-description">
              {repo.description || "No description available"}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
