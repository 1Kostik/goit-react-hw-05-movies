import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../services/api';
import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg src={IMAGE_URL.concat(poster_path)} alt="" />
            <MovieName>{title ?? original_name}</MovieName>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array,
};
export default MoviesList;
