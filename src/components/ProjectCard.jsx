function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.name}
        />
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;