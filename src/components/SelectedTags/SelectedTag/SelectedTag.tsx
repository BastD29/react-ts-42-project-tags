import styles from "./SelectedTag.module.scss";

type SelectedTagProps = {
  selectedTag: string;
  removeTag: (tag: string) => void;
};

function SelectedTag({ selectedTag, removeTag }: SelectedTagProps) {
  return (
    <div className={styles["selected-tag"]}>
      <span className={styles["selected-tag__tag"]}>{selectedTag}</span>
      <span
        className={styles["selected-tag__remove"]}
        onClick={() => removeTag(selectedTag)}
      >
        X
      </span>
    </div>
  );
}

export default SelectedTag;
