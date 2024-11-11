export type Painting = {
  id: number;
  name: string;
  authorId: number;
  locationId: number;
  imageUrl: string;
  created: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Location = {
  id: number;
  location: string;
};

export interface PaintingQueryParams {
  q: string;
  page: number;
  limit: number;
}

export interface FetchPaintingsResponse {
  paintings: Painting[];
  totalCount: number;
}

export interface GalleryState {
  paintings: Painting[];
  authors: Author[];
  locations: Location[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}
