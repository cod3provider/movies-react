import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NoImage from '../NoImage/NoImage.jpg';

import {getMovieCast} from "../../utils/films.js";

import s from './Cast.module.css'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const baseURL = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    getMovieCast(movieId)
    .then(setCast)
    .catch(error => console.log(error))
  }, [movieId]);

  if (cast.length === 0) {
    return "We don't have any cast information on this movie."
  }

  const castItem = cast.map(({ id, profile_path, name, character }) => (
    <li className={s.item} key={id}>
      <img
        src={profile_path ? `${baseURL}${profile_path}` : NoImage}
        alt=''
        width="200"
        className={s.image}
      />
      <div className={s.thumb}>
          <p className={s.title}>{name}</p>
          <p className={s.text}>Character: {character}</p>
      </div>
    </li>
  ))

  return (
    <div>
      <ul className={s.list}>
        {castItem}
      </ul>
    </div>
  )
}

export default Cast;
