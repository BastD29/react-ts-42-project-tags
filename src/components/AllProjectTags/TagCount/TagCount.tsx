import { ProjectType } from "../../../types/Project";
import styles from "./TagCount.module.scss";

type TagCountProps = {
  tag: string;
  projects: ProjectType[];
};

function TagCount({ tag, projects }: TagCountProps) {
  const projectsWithTags = projects.filter((project) =>
    Object.values(project).includes(tag)
  );

  return (
    <span className={styles["tag-count"]}>({projectsWithTags.length})</span>
  );
}

export default TagCount;
