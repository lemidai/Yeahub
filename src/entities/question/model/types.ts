export type GetQuestionsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Question[];
  isLastPage?: boolean;
};

export type Question = {
  id: number;
  title: string;
  slug: string;
  shortAnswer: string;
  description: string;
  rate: number;
  complexity: number;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: Record<string, string>;
};
