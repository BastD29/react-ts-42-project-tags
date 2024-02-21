import { ProjectType } from "../../types/Project";

import ProjectTag from "../ProjectCardList/ProjectCard/ProjectTags/ProjectTag/ProjectTag";
import TagCount from "./TagCount/TagCount";

import styles from "./AllProjectTags.module.scss";

type AllProjectTagsProps = {
  projects: ProjectType[];
  handleFilter: (tag: string) => void;
};

function AllProjectTags({ projects, handleFilter }: AllProjectTagsProps) {
  const allTags: string[] = [];

  projects.forEach((project) => {
    const projectTags: string[] = [
      project.end,
      project.level,
      project.language,
      project.framework,
      project.baas,
      project.routing,
      project.stack,
    ].filter(Boolean) as string[];

    projectTags.forEach((tag) => {
      if (tag && !allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });

  return (
    <div className={styles["all-project-tags"]}>
      <h1>Tags:</h1>
      {allTags.map((tag) => (
        <div key={tag} className={styles["all-project-tags__tag-wrapper"]}>
          <ProjectTag value={tag} handleFilter={handleFilter} />
          <TagCount tag={tag} projects={projects} />
        </div>
      ))}
    </div>
  );
}

export default AllProjectTags;
