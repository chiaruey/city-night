import { MovieSearchState } from '../routes/Movie/MovieSearch/MovieSearchState';
import { PopularMoviesState } from '../routes/Movie/PopularMovies/PopularMoviesState';
export interface ExplorerState {
    movieSearchRoute: MovieSearchState,
    popularMoviesRoute: PopularMoviesState
}