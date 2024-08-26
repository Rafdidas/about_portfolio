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
                <div className={`${moduleStyle.cont_box} ${moduleStyle.grid_box}`}></div>
            </section>
        </div>
    )
}

export default Main;