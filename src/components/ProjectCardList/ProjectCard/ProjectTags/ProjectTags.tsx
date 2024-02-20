import { ProjectTagsType } from "../../../../types/Project";

import ProjectTag from "./ProjectTag/ProjectTag";

import styles from "./ProjectTags.module.scss";

type ProjectTagsProps = {
  handleFilter: (tag: string) => void;
  projectTags: ProjectTagsType;
};

function ProjectTags({ handleFilter, projectTags }: ProjectTagsProps) {
  const tags = Object.entries(projectTags).map(([key, value]) => {
    if (value) {
      return <ProjectTag key={key} value={value} handleFilter={handleFilter} />;
    }

    return null;
  });

  return <div className={styles["project-tags"]}>{tags}</div>;
}

export default ProjectTags;
