export type GetSkillsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Skill[];
};

export type Skill = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: Record<string, string>;
};
