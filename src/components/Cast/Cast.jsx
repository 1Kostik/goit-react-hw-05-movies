import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  List,
  Item,
  Img,
  Name,
  Character,
  Wrapper,
  Answer,
} from './Cast.styled';
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

  return (
    <>

      {cast ? (
        <List>   
          {cast.map(el   => (
          <Item key={el.id}>
            <Img src={IMAGE_URL.concat(el.profile_path)} alt="" />
            <Wrapper>
              <Name>{el.Itemname}</Name>
              <Character>{el.character}</Character>
            </Wrapper>
          </Item>
          ))}
        </List>
      ) : (
        <Answer> Sorry, we don't have any cast on this movie.</Answer>
      )}
      {isLoading && <Loader />}
    </>
  );
};
export default Cast;
