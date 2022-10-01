export interface GetPostResults{
  posts: Post[]
}

export interface Post {
  id:         number;
  attributes: Attributes;
}

export interface Attributes {
  title:       string;
  content:     string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  description: string;
  category:    string;
}
