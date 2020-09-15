import { MovieSearchState } from '../routes/Movie/MovieSearch/MovieSearchState';
import { PopularMoviesState } from '../routes/Movie/PopularMovies/PopularMoviesState';
import { MovieDetailState } from '../routes/Movie/MovieDetail/MovieDetailState';

export interface ExplorerState {
    movieSearchRoute: MovieSearchState,
    popularMoviesRoute: PopularMoviesState,
    movieDetailRoute: MovieDetailState
}