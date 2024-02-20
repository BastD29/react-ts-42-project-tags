import { ProjectType } from "../../../types/Project";

import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectTags from "./ProjectTags/ProjectTags";

import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: ProjectType;
  handleFilter: (tag: string) => void;
};

function ProjectCard({ project, handleFilter }: ProjectCardProps) {
  const {
    logo,
    new: isNew,
    featured,
    title,
    end,
    level,
    language,
    framework,
    baas,
    routing,
    stack,
  } = project;

  const projectInfo = { new: isNew, featured, title };
  const projectTags = { end, level, language, framework, baas, routing, stack };

  return (
    <div className={styles["project-card"]}>
      <img src={logo} alt={logo} />
      <ProjectInfo projectInfo={projectInfo} />
      <ProjectTags handleFilter={handleFilter} projectTags={projectTags} />
    </div>
  );
}

export default ProjectCard;
