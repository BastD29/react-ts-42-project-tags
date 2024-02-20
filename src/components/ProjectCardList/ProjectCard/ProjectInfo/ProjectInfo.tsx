import { ProjectInfoType } from "../../../../types/Project";

import styles from "./ProjectInfo.module.scss";

type ProjectInfoProps = {
  projectInfo: ProjectInfoType;
};

function ProjectInfo({ projectInfo }: ProjectInfoProps) {
  const { /* new: isNew, featured, */ title } = projectInfo;

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
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectInfo;
