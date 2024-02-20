import styles from "./ProjectTag.module.scss";

type ProjectTagProps = {
  value: any;
  handleFilter: (tag: string) => void;
};

function ProjectTag({ value, handleFilter }: ProjectTagProps) {
  return (
    <div className={styles["project-tag"]} onClick={() => handleFilter(value)}>
      <span>{value}</span>
    </div>
  );
}

export default ProjectTag;
