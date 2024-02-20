type ProjectType = {
  id: number;
  logo: string;
  new: boolean;
  featured: boolean;
  title: string;
  end: string;
  level: string;
  postedAt: string;
  language: any;
  framework: any;
  baas?: string;
  routing?: string;
  stack?: string;
};

type ProjectInfoType = Pick<ProjectType, "new" | "featured" | "title">;

type ProjectTagsType = Omit<
  ProjectType,
  "new" | "featured" | "title" | "id" | "logo" | "postedAt"
>;

export type { ProjectType, ProjectInfoType, ProjectTagsType };
