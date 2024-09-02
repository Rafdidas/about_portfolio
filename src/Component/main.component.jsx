import moduleStyle from '../CSS/main.module.css';

const Main = ({scrollToSection}) => {
    window.addEventListener('load', function() {
        function contScroll() {
            var sections = document.querySelectorAll('.animate');
            sections.forEach(function(section) {
                var y = window.scrollY;
                var a = Math.floor(section.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 1.5));
                if (y >= a) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', function() {
            contScroll();
        });

        contScroll();
    });
    
    
    return(
        <div id={moduleStyle.main}>
            <section id={`home`} className={`${moduleStyle.intro} section`}>
                <div id={moduleStyle.headline} className={moduleStyle.headline}>
                    <p className={`${moduleStyle.headline_subtitle} animate`}><img src={process.env.PUBLIC_URL + '../img/dot.svg'} alt="dot" /><span>Introduce</span></p>
                    <h1 className={`${moduleStyle.headline_title} animate more_ani`}>
                        I'm HyeonGyu.<br/>
                        Studying front-end developer.
                    </h1>
                    <p className={`${moduleStyle.section_btn} hover_cont`}><a href="#portfolio" onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('portfolio');
                    }}>My Portfolio<img src={process.env.PUBLIC_URL + '../img/menu_icon.png'} alt="dot" /></a></p>
                </div>
            </section>
            <section id={`portfolio`} className={`${moduleStyle.inner} ${moduleStyle.inner_first} ${moduleStyle.portfolio} section`}>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.cont_title} animate`}>
                    <p className={`${moduleStyle.headline_subtitle} animate`}><img src={process.env.PUBLIC_URL + '../img/dot.svg'} alt="dot" /><span>Portfolio</span></p>
                    <h2 className={`${moduleStyle.cont_title} animate more_ani`}>Check out my featured projects</h2>
                </div>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.grid_box}`}>
                    <div className={moduleStyle.section}>
                        <div className={`${moduleStyle.img} animate more_ani`}>
                            <img className={`hover_cont`} src={process.env.PUBLIC_URL + '../img/mbdb_detail.png'} alt="mbdb_detail" />
                            <img className={`hover_cont`} src={process.env.PUBLIC_URL + '../img/mbdb.png'} alt="mbdb" />
                            <img className={`hover_cont`}src={process.env.PUBLIC_URL + '../img/mbdb_movie.png'} alt="mbdb_movie" />
                            <img className={`hover_cont`}src={process.env.PUBLIC_URL + '../img/mbdb_tv.png'} alt="mbdb_tv" />
                        </div>
                        <div className={`${moduleStyle.cont_text} animate more_ani2`}>
                            <h3>MOVIE_DB</h3>
                            <p>영화와 TV Series 인기목록, 상영작, 해당 영화의 상세정보를 알 수 있는 사이트입니다.</p>
                            <p>
                                Trend 메인 페이지에서 영화와 TV Series 각 트렌드 영화와 TV Series 를,<br/>
                                영화와 TV Series 각 메인에서는 장르별 리스트를 확인 할 수 있습니다.
                            </p>
                            <p>
                                영화의 상세페이지에서는 영화의 포스터 썸네일과 배경을 넣었으며, 영화의 간단한 소개, 개봉 날짜, 수익, 상영 시간, 별점의 정보를 확인 할 수 있습니다.
                            </p>
                            <p>React, TMDB Api를 활용하여 작업하였습니다.</p>
                            <a  className={`hover_cont`} href="https://rafdidas.github.io/movie_db/" target="_blank" rel="noopener noreferrer">View Page</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id={`about`} className={`${moduleStyle.inner} ${moduleStyle.inner_first} ${moduleStyle.about} section`}>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.cont_title}`}>
                    <p className={`${moduleStyle.headline_subtitle} animate `}><img src={process.env.PUBLIC_URL + '../img/dot.svg'} alt="dot" /><span>About Me</span></p>
                    <h2 className={`${moduleStyle.cont_title} animate more_ani`}>Who Am I?<br/>I will tell you about me</h2>
                </div>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.about_box}`}>
                    <div className={moduleStyle.section}>
                        <div className={`${moduleStyle.title_section} animate `}>
                            <h3>Work experience</h3>
                        </div>
                        <p className={`${moduleStyle.now_work} animate more_ani`}>
                            웹에이전시 UX 그룹과 GX 그룹에서 근무하며 웹 퍼블리싱을 담당하고 있으며,<br/>다양한 신규 쇼핑몰을 구축하고, 기존의 쇼핑몰들을 운영관리 및 유지보수를 수행 중
                        </p>
                        <div className={`${moduleStyle.work_list} animate more_ani2`}>
                            <div className={moduleStyle.section_box}>
                                <div className={moduleStyle.year}>2019</div>
                                <div className={moduleStyle.company}>
                                    <p>Web Publisher<span>in the <strong>WISA</strong> agency</span></p>
                                </div>
                                <div className={moduleStyle.project}>
                                    <p>메디플러스 세컨드닥터몰, 생활 공작소 자사몰 및 소규모 쇼핑몰 구축 전담</p>
                                    <p>임블리 쇼핑몰 유지보수 서포트</p>
                                </div>
                            </div>
                            <div className={moduleStyle.section_box}>
                                <div className={moduleStyle.year}>2020</div>
                                <div className={moduleStyle.company}>
                                    <p>Web Publisher<span>in the <strong>WISA</strong> agency</span></p>
                                </div>
                                <div className={moduleStyle.project}>
                                    <p>대현인사이드, 클럽발코니, 크레디아, 밀크코코아 라이즈 등 구축</p>
                                    <p>대현인사이드, 클럽발코니, 안다르, 리바이리, IDF몰, 생활공작소 리뉴얼 및 유지보수</p>
                                </div>
                            </div>
                            <div className={moduleStyle.section_box}>
                                <div className={moduleStyle.year}>2021</div>
                                <div className={moduleStyle.company}>
                                    <p>Web publisher<span>in the <strong>WISA</strong> agency</span></p>
                                </div>
                                <div className={moduleStyle.project}>
                                    <p>액트플러스, 에스더몰 1차 구축 및 오픈</p>
                                    <p>이현 어패럴, 지오다노, 프로라이팅, 로라로라 유지보수</p>
                                </div>
                            </div>
                            <div className={moduleStyle.section_box}>
                                <div className={moduleStyle.year}>2022</div>
                                <div className={moduleStyle.company}>
                                    <p>Web publisher<span>in the <strong>WISA</strong> agency</span></p>
                                </div>
                                <div className={moduleStyle.project}>
                                    <p>나무그림 리뉴얼 및 유지보수</p>
                                    <p>탠디몰, 차홍, 대현인사이드 등 구축 및 유지보수 </p>
                                </div>
                            </div> 
                            <div className={moduleStyle.section_box}>
                                <div className={moduleStyle.year}>2023 - 2024</div>
                                <div className={moduleStyle.company}>
                                    <p>Web publisher<span>in the <strong>WISA</strong> agency</span></p>
                                </div>
                                <div className={moduleStyle.project}>
                                    <p>지속적인 업체 유지관리 진행 중</p>
                                    <p>지오다노, 대현인사이드, 차홍, 탠디몰, 에스더몰, 이현 어패럴, IDF몰, 코스믹, 라펠 등</p>
                                    <p>- 장기적인 고객사 사이트의 운영/유지보수 팀 담당, 퍼블리셔 활동 수행 중</p>
                                </div>
                            </div>  
                        </div>
                        <div className={`${moduleStyle.title_section} animate`}>
                            <h3>My skill stacks</h3>
                        </div>
                        <div className={`${moduleStyle.skill_list} animate ani_more`}>
                            <div className={`${moduleStyle.tool_box} hover_cont`}>
                                <img src={process.env.PUBLIC_URL + '../img/html.png'} alt="html" />
                                <p>HTML5</p>
                            </div>
                            <div className={`${moduleStyle.tool_box} hover_cont`}>
                                <img src={process.env.PUBLIC_URL + '../img/css.png'} alt="CSS" />
                                <p>CSS3</p>
                            </div>
                            <div className={`${moduleStyle.tool_box} hover_cont`}>
                                <img src={process.env.PUBLIC_URL + '../img/js.png'} alt="js" />
                                <p>Java Script</p>
                            </div>
                            <div className={`${moduleStyle.tool_box} hover_cont`}>
                                <img src={process.env.PUBLIC_URL + '../img/jquery_color.png'} alt="Jquery" />
                                <p>Jquery</p>
                            </div>
                            <div className={`${moduleStyle.tool_box} hover_cont`}>
                                <img src={process.env.PUBLIC_URL + '../img/react.png'} alt="React" />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${moduleStyle.cont_box} ${moduleStyle.about_box}`}>
                    <div className={moduleStyle.section}>
                        <div className={`${moduleStyle.title_section} animate`}>
                            <h3>About Me</h3>
                        </div>
                        <div className={`${moduleStyle.about_text} animate`}>
                            <p>
                               안녕하세요. 저는 박현규 입니다. 
                            </p>
                            <p>
                                <strong>“저는 언제나 성실한 자세로 시작한 일은 포기하지 않고 반드시 끝내는 성격을 가지고 있습니다.”</strong>
                            </p>
                            <p>
                                화면이 코드를 통해 하나씩 채워지는 것을 직관적으로 확인할 수 있어, 웹 퍼블리셔에 매력을 느꼈고, 
                            </p>
                            <p>
                                더 나아가 프론트엔드라는 직무로 저를 한 단계 더 발전시키기 위하여 노력하고 있습니다.
                            </p>
                            <p>
                                아직은 서툴고 부족하기에 많이 배워야하고 더 많은 노력이 필요하다는 것을 알고 있습니다. 
                            </p>
                            <p>
                                실패에 두려워하지 않고, 항상 노력하며 끊임없이 공부하고 센스있는 프론트엔드 개발자가 될 수 있도록 노력하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;