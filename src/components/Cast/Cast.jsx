import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Item, Img, Name, Character, Wrapper } from './Cast.styled';
import { IMAGE_URL, fetchMovieCast } from '../services/api';
import Loader from '../Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (!movieId) {
      return;
    }

    fetchMovieCast(movieId)
      .then(data => {
        if (!data.length) {
          setCast(null);
          setIsLoading(false);
          return;
        }
        setCast(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}

      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <Img src={IMAGE_URL.concat(profile_path)} alt="" />
          <Wrapper>
            <Name>{name}</Name>
            <Character>{character}</Character>
          </Wrapper>
        </Item>
      ))}
      {isLoading && <Loader />}
    </List>
  );
};
export default Cast;
