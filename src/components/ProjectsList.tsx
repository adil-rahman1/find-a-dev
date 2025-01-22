import { useState, useEffect } from "react";
import Project from "../types/Project";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
