import { useState, useEffect } from "react";
import IProject from "../types/Project";
import ProjectItem from "./ProjectItem";
import ActionBtns from "./ActionBtns";

interface ProjectsListProps {
  isViewOnly: boolean;
}

const ProjectsList = ({ isViewOnly }: ProjectsListProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data: IProject[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project}>
          {!isViewOnly && <ActionBtns />}
        </ProjectItem>
      ))}
    </div>
  );
};

export default ProjectsList;
