import moduleStyle from '../CSS/main.module.css';

const Main = () => {
    return(
        <div id={moduleStyle.main}>
            <section id={moduleStyle.home} className={moduleStyle.intro}>
                <div id={moduleStyle.headline} className={moduleStyle.headline}>
                    <p className={moduleStyle.headline_subtitle}><img src={process.env.PUBLIC_URL + '../img/dot.svg'} alt="dot" /><span>Introduce</span></p>
                    <h1 className={moduleStyle.headline_title}>
                        I'm HyeonGyu.<br/>
                        Studying front-end developer.
                    </h1>
                    <p className={moduleStyle.section_btn}><a href="portfolio">My Portfolio<img src={process.env.PUBLIC_URL + '../img/menu_icon.png'} alt="dot" /></a></p>
                </div>
            </section>
            <section id={moduleStyle.portfolio} className={`${moduleStyle.inner} ${moduleStyle.inner_first} ${moduleStyle.portfolio}`}>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.cont_title}`}>
                    <p className={moduleStyle.headline_subtitle}><img src={process.env.PUBLIC_URL + '../img/dot.svg'} alt="dot" /><span>Portfolio</span></p>
                    <h2 className={moduleStyle.cont_title}>Check out my featured projects</h2>
                </div>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.grid_box}`}>
                    <div className={moduleStyle.section}>
                        <div className={moduleStyle.img}>
                            <img src={process.env.PUBLIC_URL + '../img/mbdb_detail.png'} alt="mbdb_detail" />
                            <img src={process.env.PUBLIC_URL + '../img/mbdb.png'} alt="mbdb" />
                            <img src={process.env.PUBLIC_URL + '../img/mbdb_movie.png'} alt="mbdb_movie" />
                            <img src={process.env.PUBLIC_URL + '../img/mbdb_tv.png'} alt="mbdb_tv" />
                        </div>
                        <div className={moduleStyle.cont_text}>
                            <h3>movie_db</h3>
                            <p>영화와 TV Series 인기목록, 상영작, 해당 영화의 상세정보를 알 수 있는 사이트입니다.</p>
                            <p>React, TMDB Api를 활용하여 작업하였습니다.</p>
                            <a href="https://rafdidas.github.io/movie_db/" target="_blank" rel="noopener noreferrer">https://rafdidas.github.io/movie_db/</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;