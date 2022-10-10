export interface GetPostResults {
  posts: Post[]
}

export interface Post {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  cover_photo: Photo;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: string;
  categories: Category;
}

export interface Photo {
  data: photoData;
}

export interface photoData {
  id: number;
  attributes: photoAttributes;
}

export interface photoAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface LinkTypes {
  path: string,
  routeName: string
}

export interface Category {
  data: Categories[];
}

export interface Categories {
  id: number;
  attributes: CategoryAttr;
}

export interface CategoryAttr {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
