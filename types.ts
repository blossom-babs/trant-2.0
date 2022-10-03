export interface GetPostResults{
  posts: Post[]
}

export interface Post {
  id:         number;
  attributes: Attributes;
}

export interface Attributes {
	cover_photo: Photo;
  title:       string;
  content:     string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  description: string;
  category:    string;
}

export interface Photo {
  data: photoData;
}

export interface photoData {
  id:         number;
  attributes: photoAttributes;
}

export interface photoAttributes {
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             null;
  height:            null;
  formats:           null;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}
