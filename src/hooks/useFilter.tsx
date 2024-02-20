import { useState } from "react";

import { ProjectType } from "../types/Project";

function useFilter(projects: ProjectType[]) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectType[]>(projects);
  console.log("filteredProjects:", filteredProjects);

  const handleFilter = (tag: string) => {
    const isSelected = selectedTags.includes(tag);
    const updatedTags = isSelected ? selectedTags : [...selectedTags, tag];

    if (isSelected) return;

    setSelectedTags(updatedTags);

    const filtered = filteredProjects.filter((project) =>
      updatedTags.every((selectedTag) =>
        Object.values(project).includes(selectedTag)
      )
    );
    setFilteredProjects(filtered);
  };

  const removeTag = (tag: string) => {
    const updatedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    setSelectedTags(updatedTags);

    const filtered = projects.filter((project) =>
      updatedTags.every((selectedTag) =>
        Object.values(project).includes(selectedTag)
      )
    ) as ProjectType[];

    setFilteredProjects(filtered);
  };

  const clearTags = () => {
    setSelectedTags([]);
    setFilteredProjects(projects);
  };

  return { handleFilter, removeTag, clearTags, selectedTags, filteredProjects };
}

export default useFilter;
