import { ProjectType } from "../../types/Project";

import AllProjectTags from "../AllProjectTags/AllProjectTags";

import styles from "./Footer.module.scss";

type FooterProps = {
  projects: ProjectType[];
  handleFilter: (tag: string) => void;
};

function Footer({ projects, handleFilter }: FooterProps) {
  return (
    <div className={styles["footer"]}>
      <AllProjectTags projects={projects} handleFilter={handleFilter} />
      <h1>Designed by Frontend Mentor</h1>
      <h1>Coded by Bastien Daniel</h1>
    </div>
  );
}

export default Footer;
