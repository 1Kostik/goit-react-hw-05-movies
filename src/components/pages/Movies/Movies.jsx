import { useEffect, useState } from 'react';
import SearchMovies from '../../SearchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';
import MoviesList from '../../MoviesList/MoviesList';
import { fetchMovieSearch } from '../../services/api';
import Loader from '../../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('name') ?? '';
  const query = moviesName.toLocaleLowerCase();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    setSearchMovie(null);

    fetchMovieSearch(query)
      .then(data => {
        if (!data.length) {
          setSearchMovie(null);
          toast.error(`There are no movies with name ${query}`);
          setIsLoading(false);
          return;
        }
        setSearchMovie(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [query]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Container>
        <SearchMovies value={moviesName} onChange={updateQueryString} />
        {searchMovie && <MoviesList movies={searchMovie} />}
      </Container>
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};
export default Movies;
