import {Link, useLocation} from 'react-router-dom';

import s from './MoviesList.module.css';
import {POSTER_URL} from "../../utils/films.js";

import NoImage from '../NoImage/placeholder-no-image.jpg';

const MoviesList = ({movies}) => {
    const location = useLocation();

    const elements = movies.map(({id, poster_path, original_title, original_name}) =>
            <li className={s.item} key={id}>
                {original_title
                    ?
                    (<>
                        <Link className={s.link} to={`/movies/${id}`} state={{from: location}}>
                            <img className={s.img}
                                  src={poster_path ? `${POSTER_URL}${poster_path}` : NoImage}
                                  alt="film's poster"/>
                        </Link>
                        <p className={s.overlay}>{original_title}</p>
                    </>)
                    :
                    (<>
                        <Link className={s.link} to={`/series/${id}`} state={{from: location}}>
                            {<img className={s.img}
                              src={poster_path ? `${POSTER_URL}${poster_path}` : NoImage}
                              alt="film's poster"/>}
                        </Link>
                        <p className={s.overlay}>{original_name}</p>
                    </>)}
            < /li>
    )

    return (
        <ul className={s.list}>
            {elements}
        </ul>
    )
}

export default MoviesList;