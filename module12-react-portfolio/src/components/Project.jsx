// src/components/Project.jsx

function Project({ title, image, repoUrl }) {
  return (
    <div className="project-card">
      <img src={image} alt="This is a frog" className="project-img" />
      <h3>{title}</h3>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        [GitHub Repository] - [Deployed Application]
      </a>
    </div>
  );
}

export default Project;
