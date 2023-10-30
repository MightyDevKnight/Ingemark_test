export interface QuoteType {
  _id: string;
  content: string;
  length: number;
}

export interface ScoreRequestType {
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}

export interface ScoreResponseType {
  id: number;
  userName: string;
  length: number;
  errors: number;
  uniqueCharacters: number;
  duration: number;
}
