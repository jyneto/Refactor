import { p } from "framer-motion/client";
import { useState, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { data } from "react-router-dom";
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
        </section>
      </main>
    );
  }
  return (
      <div className="git-projects">
        <h1 className="project-h1">Projects</h1>
        <div className="projects-grid">
          {projects.map((repo) => (
            <div key={repo.id} className="cards">
              <h3 className="project-title">{repo.name}</h3>
              <p className="project-description">{repo.description}</p>
              <a
                href={repo.html_url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more...
              </a>
            </div>
          ))}
        </div>
      </div>
  );

  // useEffect(() =>{
  //     fetch("https://api.github.com/users/jyneto/repos")
  //     .then((response)=> response.json())
  //     .then((data) => {
  //         setTimeout(()=>{
  //             setProjects(filteredData);
  //             setLoading(false);
  //        },3000)
  //         const filteredData = data.filter ((repo) => repo.name && (repo.name === "OOP-Basics--Zoo-") && (repo.name === "Chas-Ching") && (repo.name === "SchoolDB"))

  //     })
  //     .catch((error) => {
  //         console.log(error)
  //     })

  // }, [])

  // if(loading){
  //     return(

  //         <main>
  //             <section className="git-projects">
  //                  <h1>Projects</h1>
  //                     <div className="puff-loader">
  //                         <PuffLoader
  //                         color="#30dbc8"
  //                         size={50}/>
  //                     </div>
  //             </section>
  //         </main>

  //     )
  // }
  // return(

  //     <div className="git-projects">
  //         <div className="project-grid">
  //             {projects.map((repo) => (
  //                 <div key={repo.id}className="cards">
  //                 <h1 className="project-title">{repo.name}</h1>
  //                 <p className="project-description">{repo.description}</p>

  //                 <a href={repo.html_url} className="project-link" target="_blank" rel="noopener noreferrer">read more...</a>
  //                 </div>
  //             ))}
  //         </div>

  //     </div>

  //     <section>

  //             <h1>Project</h1>
  //         <div className='common-section'>
  //             <CardGroup className="card-group">
  //                 {projects.map((p) => (
  //                     <Card className="card"  key={`${projects.map}-${p.id}`}>
  //                         <Card.Body>
  //                             <Card.Title>{p.name}</Card.Title>

  //                                 <p>{p.description}</p>
  //                                 <a href={p.html_url} className="link" target="_blank" rel="noopener noreferrer">read more...</a>

  //                         </Card.Body>
  //                     </Card>
  //                 ))}
  //             </CardGroup>
  //             </div>
  //  </section>

  // )
}
