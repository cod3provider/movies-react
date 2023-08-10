import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getMoviesReviews} from "../../utils/films.js";

import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReviews(movieId)
    .then(setReviews)
    .catch(error => console.log(error))
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={s.noReview}>Sorry. We don't have any reviews for this movie.</p>
  }

  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content}) => (
           <li className={s.item} key={id}>
            <p className={s.author}>Author: {author}</p>
            <p className={s.text}>{content}</p>
          </li>
         ))}
    </ul>
  )
}

export default Reviews;
