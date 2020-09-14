
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

export interface Genres {
    id: number;
    name: string;
}

export interface MovieCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}
export interface ProductionCountry {
    iso_3166_1: number;
    name: string;
}

export interface SpokenLanguage {
    iso_639_1: number;
    name: string;
}

export interface MovieCredit {
    id: number;
    cast_id: number;
    character: String;
    credit_id: string;
    gender: number;
    name: string;
    order: number;
    profile_path: string;
}
export interface MovieDetailResponse {
    id: number;
    imdb_id: string;
    title: string;
    release_date: string;
    overview: string;
    revenue: number;
    runtime: number;
    homepage: string;
    vote_average: string;
    genres: Genres[];
    belongs_to_collection: MovieCollection[];
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    spoken_languages: SpokenLanguage[];
    budget: number;
    original_title: string;
    popularity: string;
    original_language: string;
    poster_path: string;
    backdrop_path: string;
    status: string;
    tagline: string;
    vote_count: number;
}

