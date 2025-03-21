export interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: Text;
  originalText: Text;
  authorAttribution: AuthorAttribution;
  publishTime: Date;
  flagContentUri: string;
  googleMapsUri: string;
}

export interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface Text {
  text: string;
  languageCode: string;
}
