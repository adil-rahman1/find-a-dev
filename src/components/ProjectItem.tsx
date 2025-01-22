import Project from "../types/Project";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { companyName, image, altText, projectName, description, deadline } =
    project;

  return (
    <div className="flex w-9/12 items-center border-solid border-2 border-slate-300 rounded">
      <img className="mr-4 w-24 h-24" src={image} alt={altText}></img>
      <div className="flex flex-col">
        <p className="mb-2 text-3xl font-bold">{projectName}</p>
        <p className="mb-2 text-xl">{companyName}</p>
        <p className="mb-2">Brief: {description}</p>
        <p className="mb-2">Deadline: {deadline}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
