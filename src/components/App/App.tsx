import Header from "../Header/Header";
import ProjectCardList from "../ProjectCardList/ProjectCardList";
import SelectedTags from "../SelectedTags/SelectedTags";

import projects from "../../../data/data.json";

import useFilter from "../../hooks/useFilter";

import styles from "./App.module.scss";

export default function App() {
  const { handleFilter, removeTag, clearTags, selectedTags, filteredProjects } =
    useFilter(projects);

  return (
    <>
      <Header />
      <div className={styles["app"]}>
        {selectedTags.length > 0 && (
          <SelectedTags
            selectedTags={selectedTags}
            removeTag={removeTag}
            clearTags={clearTags}
          />
        )}
        <ProjectCardList
          filteredProjects={filteredProjects}
          handleFilter={handleFilter}
        />
      </div>
    </>
  );
}
