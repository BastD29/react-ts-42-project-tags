import ProjectCard from "./ProjectCard/ProjectCard";

import { ProjectType } from "../../types/Project";

import styles from "./ProjectCardList.module.scss";

type ProjectCardListProps = {
  filteredProjects: ProjectType[];
  handleFilter: (tag: string) => void;
};

function ProjectCardList({
  handleFilter,
  filteredProjects,
}: ProjectCardListProps) {
  return (
    <div className={styles["project-card-list"]}>
      {filteredProjects.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          handleFilter={handleFilter}
        />
      ))}
    </div>
  );
}

export default ProjectCardList;
