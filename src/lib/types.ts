export type Service = {
  id: number;
  head: string;
  description: string;
};

export type SectionHead = {
  head: string;
  description: string;
};

export type Reason = {
  content: string;
  contentImage?: string;
};

export type Gallary = {
  image: string;
  image_desc?: string;
  description: string;
  additional_info?: string;
};
