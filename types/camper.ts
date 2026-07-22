export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  transmission: string;
  engine: string;
  form: string;
  coverImage?: string;
  length?: string;
  width?: string;
  height?: string;
  tank?: string;
  consumption?: string;
  gallery?: Array<{
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
  }>;
  amenities: string[];
}
