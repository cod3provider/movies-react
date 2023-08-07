import {useEffect, useState} from "react";

import MoviesList from "../../components/MoviesList/MoviesList.jsx";

import s from './Home.module.css';

import {getTrendingMovies} from "../../utils/films.js";
import Container from "../../components/Container/index.js";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const renderTrendingMovies = async () => {
            try {
                const trendingMovies = await getTrendingMovies();
                console.log(trendingMovies);
                setTrendingMovies(trendingMovies);
            } catch (error) {
                console.log(error);
            }
        }

        renderTrendingMovies();
    }, []);

    return (
        <div className={s.wrapper}>
            <Container>
                <h1 className={s.title}>Trending today</h1>
                <MoviesList movies={trendingMovies} />
            </Container>
        </div>
    )
}

export default Home;