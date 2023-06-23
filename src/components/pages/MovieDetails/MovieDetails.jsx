import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../../BackLink';
import {
  WrapperMain,
  WrapperText,
  Wrapper,
  WrapperContainer,
  WrapperAddInfo,
  AddInfo,
  AddInfoName,
  InfoLink,
  OverviewText,
  Title,
  Another,
  TextGenre,
} from './MovieDetails.styled';
import Loader from '../../Loader/Loader';
import { fetchMoviesId, IMAGE_URL } from '../../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    setIsLoading(true);
    fetchMoviesId(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const genres = movie.genres;
  const total = Math.floor(movie.vote_average * 10);
  // const { poster_path, title, release_date, vote_average, overview, genres } =
  //   movie;
  //   const releaseDate = release_date.slice(0, 4);
  //   const voteScore = vote_average.toFixed(1);
  return (
    <main>
      <WrapperContainer>
        <WrapperMain>
          <Wrapper>
            <BackLink to={backLinkHref} state={{ from: location }}>
              Go back
            </BackLink>
            <div>
              <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
            </div>
          </Wrapper>
          <WrapperText>
            <Title>
              {movie.title}
              {movie.name}
              <span> ({movie.release_date.slice(0, 4)})</span>
            </Title>
            <Another>User score: {total}%</Another>
            <Another>Overview:</Another>
            <OverviewText> {movie.overview}</OverviewText>
            <Another>Genres:</Another>
            <p>
              {genres &&
                genres.map(genre => {
                  return <TextGenre key={genre.id}>{genre.name}</TextGenre>;
                })}
            </p>
          </WrapperText>
        </WrapperMain>
        <WrapperAddInfo>
          <h2>Additional information</h2>
          <AddInfo>
            <AddInfoName>
              <InfoLink to="cast">Cast</InfoLink>
            </AddInfoName>
            <AddInfoName>
              <InfoLink to="reviews">Reviews</InfoLink>
            </AddInfoName>
          </AddInfo>
        </WrapperAddInfo>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperContainer>
      {isLoading && <Loader />}
    </main>
  );
};
export default MovieDetails;
