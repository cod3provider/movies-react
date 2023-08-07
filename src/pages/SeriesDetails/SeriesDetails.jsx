import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import SeriesInfo from "../../components/SeriesInfo/index.js";

import s from '../MovieDetails/MovieDetails.module.css';

import Container from "../../components/Container/index.js";
import {getSeriesDetails} from "../../utils/series.js";

const SeriesDetails = () => {
    const [series, setSeries] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getSeriesDetails(movieId)
            .then(setSeries)
            .catch(error => console.log(error))
    }, [movieId])

    const from = location.state?.from ?? '/';

    return (
        <Container>
            {series && (
                <div className={s.wrapper}>
                    <Link className={s.backButton} to={from}>Go back</Link>
                    <SeriesInfo info={series} />
                    <div className={s.infoWrap}>
                        <div className={s.linksWrap}>
                            <p className={s.title}>Additional information</p>
                            <ul className={s.list}>
                                <li>
                                    <Link className={s.link} to="cast" state={{ from }}>Cast</Link>
                                </li>

                                <li>
                                    <Link className={s.link} to="reviews" state={{ from }}>Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            )
            }
        </Container>
    )
}

export default SeriesDetails;
