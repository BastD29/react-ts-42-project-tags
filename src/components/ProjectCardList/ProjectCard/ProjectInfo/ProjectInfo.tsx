import { ProjectInfoType } from "../../../../types/Project";

import styles from "./ProjectInfo.module.scss";

type ProjectInfoProps = {
  projectInfo: ProjectInfoType;
};

function ProjectInfo({ projectInfo }: ProjectInfoProps) {
  const { /* new: isNew, featured, */ title, website, github } = projectInfo;

  return (
    <div className={styles["project-card-info"]}>
      {/* <div className={styles["project-card-info__features"]}>
        {isNew && <span className={styles["project-card-info__new"]}>NEW</span>}
        {featured && (
          <span className={styles["project-card-info__featured"]}>
            FEATURED
          </span>
        )}
      </div> */}
      <div className={styles["project-card-info__features"]}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["project-card-info__github"]}
        >
          Github
        </a>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["project-card-info__website"]}
        >
          Website
        </a>
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectInfo;
