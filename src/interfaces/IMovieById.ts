import { IGenre } from "./IGenres";

export interface IMovieById {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: IBelongsToCollection | null;
    budget:                number;
    genres:                IGenre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    origin_country:        string[];
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  IProductionCompany[];
    production_countries:  IProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      ISpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface IBelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export interface IProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface IProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}