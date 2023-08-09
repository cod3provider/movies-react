import {useState, useEffect, Suspense} from 'react';
import {useParams, useLocation, Link, Outlet} from 'react-router-dom';

import { MdOutlineArrowBack } from "react-icons/md";

import MovieInfo from '../../components/MovieInfo/index.js';

import s from './MovieDetails.module.css';

import {getMovieDetails} from "../../utils/films.js";
import Container from "../../components/Container/index.js";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);

    const {movieId} = useParams();
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId)
            .then(setMovie)
            .catch(error => console.log(error))
    }, [movieId])

    const from = location.state?.from ?? '/';

    return (
        <Container>
            {movie && (
                <div className={s.wrapper}>
                    <Link className={s.backButton} to={from}> <MdOutlineArrowBack className={s.icon} /> Go back</Link>
                    <MovieInfo info={movie}/>
                    <div className={s.infoWrap}>
                        <div className={s.linksWrap}>
                            <p className={s.title}>Additional information</p>
                            <ul className={s.list}>
                                <li>
                                    <Link className={s.link} to="cast" state={{from}}>Cast</Link>
                                </li>

                                <li>
                                    <Link className={s.link} to="reviews" state={{from}}>Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                        </Suspense>
                    </div>
                </div>
            )
            }
        </Container>
    )
}

export default MovieDetails;
