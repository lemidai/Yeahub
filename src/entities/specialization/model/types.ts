export type GetSpecializationsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Specialization[];
};

export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: Record<string, string>;
};
