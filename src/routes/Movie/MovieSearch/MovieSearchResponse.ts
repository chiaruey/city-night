
export interface MovieInfo {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    vote_average: number;
    genre_ids: number[];
    popularity: number;
    original_language: string;
    poster_path: string;
    backdrop_path: string;
    original_title: string;
}

export interface MovieSearchResponse {
    page: number;
    query: string;
    total_results: number;
    total_pages: number;
    results: MovieInfo[];
}
  