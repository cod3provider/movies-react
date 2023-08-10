import {NavLink, Outlet} from "react-router-dom";
import {Suspense} from "react";

import s from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={s.link} to="/">Home</NavLink>
                <NavLink className={s.link} to="/movies">Movies</NavLink>
                <NavLink className={s.link} to="/series">Series</NavLink>
            </nav>
            <Suspense fallback={<div className={s.fallback}>...Loading</div>}>
                <Outlet />
            </Suspense>
        </header>
    )
}

export default SharedLayout;