import {Link, useLocation} from 'react-router-dom';

import s from './MoviesList.module.css';
import {POSTER_URL} from "../../utils/api.js";

import NoImage from '../NoImage/No-Image-Placeholder.svg.jpg';

const MoviesList = ({movies}) => {
    const location = useLocation();

    const elements = movies.map(({id, poster_path, original_title}) =>
        <li className={s.item} key={id}>
            <Link className={s.link} to={`/movies/${id}`} state={{from: location}}>{<img className={s.img}
                src={poster_path ? `${POSTER_URL}${poster_path}` : NoImage} alt="film's poster"/>}</Link>
            <p className={s.overlay}>{original_title}</p>
        </li>
    )


    return (
        <ul className={s.list}>
            {elements}
        </ul>
    )
}

export default MoviesList;