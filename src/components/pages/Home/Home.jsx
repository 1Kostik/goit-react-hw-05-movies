import { useEffect, useState } from 'react';
import { Title, Container } from './Home.styled';
import MoviesList from '../../MoviesList/MoviesList';
import { fetchTrendingMovies } from '../../services/api';
import Loader from '../../Loader/Loader';
const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchTrendingMovies()
      .then(data => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);
  if (!movies) {
    return;
  }

  return (
    <Container>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </Container>
  );
};
export default Home;
