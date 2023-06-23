import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../services/api';
import { Wrapper, Author, Title, List, Answer } from './Reviews.stayled';
import Loader from '../Loader/Loader';
const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(data => {
        setReviewsMovie(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  if (!reviewsMovie) {
    return;
  }
  if (!reviewsMovie) {
    return;
  }

  return (
    <Wrapper>
      {reviewsMovie.length > 0 ? (
        <ul>
          {reviewsMovie.map(el => (
            <List key={el.id}>
              <Title>
                <Author>Author: </Author>
                <Author>{el.author}</Author>
              </Title>
              <p>{el.content}</p>
            </List>
          ))}
        </ul>
      ) : (<Answer> WE don't have any reviews for this movie.</Answer>)}
      {isLoading && <Loader />}
    </Wrapper>
  );
};
export default Reviews;
