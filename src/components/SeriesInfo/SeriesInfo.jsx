import s from '../SeriesInfo/SeriesInfo.module.css';

import NoImage from '../NoImage/NoImage.jpg';

const SeriesInfo = ({ info }) => {
    const {
        poster_path,
        original_name,
        vote_average,
        overview,
    } = info;

    const baseImagesURL = 'https://image.tmdb.org/t/p/w500';

    const getVotes = () => Math.round(`${vote_average}` * 10);

    return (
        <div className={s.wrapper}>
            <div className={s.pictureThumb}>
                <img src={poster_path ? `${baseImagesURL}${poster_path}` : NoImage}
                     alt={original_name}
                     width="500"
                     className={s.picture}
                />
            </div>

            <div className={s.container}>
                <h1 className={s.title}>{original_name}</h1>
                <p>User Score: {getVotes()}%</p>

                <p className={s.infoTitle}>Overview</p>
                <p>{overview}</p>
            </div>
        </div>
    );
};
export default SeriesInfo;
