import Header from "../Header/Header";
import ProjectCardList from "../ProjectCardList/ProjectCardList";
import SelectedTags from "../SelectedTags/SelectedTags";
import Footer from "../Footer/Footer";

import projects from "../../../data/data.json";

import useFilter from "../../hooks/useFilter";

import { ProjectType } from "../../types/Project";

import styles from "./App.module.scss";

export default function App() {
  const { handleFilter, removeTag, clearTags, selectedTags, filteredProjects } =
    useFilter(projects as ProjectType[]);

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
      <Footer projects={projects} handleFilter={handleFilter} />
    </>
  );
}
