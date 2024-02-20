import SelectedTag from "./SelectedTag/SelectedTag";

import styles from "./SelectedTags.module.scss";

type SelectedTagsProps = {
  selectedTags: string[];
  removeTag: (tag: string) => void;
  clearTags: () => void;
};

function SelectedTags({
  selectedTags,
  removeTag,
  clearTags,
}: SelectedTagsProps) {
  return (
    <div className={styles["selected-tags"]}>
      <div className={styles["selected-tags__tags"]}>
        {selectedTags.map((selectedTag) => (
          <SelectedTag
            key={selectedTag}
            selectedTag={selectedTag}
            removeTag={removeTag}
          />
        ))}
      </div>
      <button onClick={clearTags}>Clear</button>
    </div>
  );
}

export default SelectedTags;
