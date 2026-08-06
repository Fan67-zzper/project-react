import ProjectCard from "./ProjectCard"; 

function ProjectList({ projects }) { 
// Determine if there are any projects we can display.
// If we have projects we will render a card for each project.
return ( 
<div className="project-grid"> 
{projects.length > 0 ? ( 
projects.map((project) => { 
return ( 
<ProjectCard 
key={project.id} 
project={project} 
/> 
); 
}) 
) : ( 
<div className="no-projects"> 
<h3>No projects available</h3> 
<p> 
There are currently no projects to display. Please try 
searching for something else or add a new project.
</p> 
</div> 
)} 

</div> 
); 
} 

export default ProjectList; 