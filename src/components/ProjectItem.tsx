import Project from "../types/Project";

interface ProjectItemProps {
  project: Project;
  children?: React.ReactNode;
}

const ProjectItem = ({ project, children }: ProjectItemProps) => {
  const { companyName, image, altText, projectName, description, deadline } =
    project;

  return (
    <div className="flex w-9/12 items-center border-solid border-2 border-slate-300 rounded">
      <img className="mr-2 w-24 h-24" src={image} alt={altText}></img>
      <div className="flex flex-col">
        <p className="my-1 text-3xl font-bold">{projectName}</p>
        <p className="my-1 text-xl">{companyName}</p>
        <p className="my-1">Brief: {description}</p>
        <p className="my-1">Deadline: {deadline}</p>
        {children}
      </div>
    </div>
  );
};

export default ProjectItem;
