import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MoviesList from '../../components/MoviesList/MoviesList';

import s from '../Movies/Movies.module.css';

import {searchSeries} from "../../utils/series.js";
import Container from "../../components/Container/index.js";
import {FiSearch} from "react-icons/fi";

const TvSeries = () => {
    const [series, setSeries] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const seriesSearch = searchParams.get('query');

    const handleChange = e => {
        setQuery(e.target.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({query: query});
        setQuery('');
    };

    useEffect(() => {
        if (!seriesSearch) {
            return;
        }

        async function renderSeries() {
            try {
                const result = await searchSeries(seriesSearch);
                if (result.length === 0) {
                    toast.warn('Oooops. Something went wrong');
                    return;
                }
                setSeries(result);
            } catch (error) {
                console.log(error);
            }
        }

        renderSeries();
    }, [seriesSearch]);

    return (
        <Container>
            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.input} type='text' value={query} onChange={handleChange} placeholder="Enter show title" />
                <button type="submit" className={s.button}>
                    <span className={s.buttonLabel}>Search</span>
                    <FiSearch className={s.icon} />
                </button>
            </form>

            {series && <MoviesList movies={series}/>}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Container>
    )
}

export default TvSeries;
