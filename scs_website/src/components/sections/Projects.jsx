import React from 'react';
import Card from '../ui/Card';

const ProjectsSection = ({ projects = [] }) => {
  return (
    <section
        id="projects"
        className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%] py-32 bg-[#0b111a]"
      >
        {projects.map((project, i) => (
           <Card 
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
           />
        ))}
    </section>
  );
};

export default ProjectsSection;
