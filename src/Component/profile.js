import moduleStyle from '../CSS/profile.module.css';

const Profile = () => {
    return(
        <div className={moduleStyle.profile}>
            <div className={moduleStyle.inner}>
                <div className={moduleStyle.name_box}>
                    <span className={moduleStyle.name_img}>
                        <img src={process.env.PUBLIC_URL + '../img/profile_img.png'} alt="profile_img" />
                    </span>
                    <p className={moduleStyle.profile_name}>PARK<br/>HYEON GYU</p>
                </div>
                <div className={moduleStyle.profile_img}><img src={process.env.PUBLIC_URL + '../img/avatar.png'} alt="profile-image" /></div>
                <div className={moduleStyle.info_section}>
                    <h4>About Me:</h4>
                    <p>
                        HELLO, I’M HYEONGYU<br/>
                        The current web publisher,<br/>
                        Studying front-end developers
                    </p>
                </div>
                <div className={moduleStyle.info_section}>
                    <h4>My Skill Stacks:</h4>
                    <div className={moduleStyle.stack_list}>
                        <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/html_b.png'} alt="html" /></span>
                        <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/css_b.png'} alt="css" /></span>
                        <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/js_b.png'} alt="javascript" /></span>
                        <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/jquery.png'} alt="jquery" /></span>
                        <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/react_b.png'} alt="react" /></span>
                    </div>
                </div>
                <div className={moduleStyle.info_section}>
                    <ul className={moduleStyle.socials}>
                        <li><a href="https://github.com/Rafdidas" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '../img/github_b.png'} alt="github" /></a></li>
                    </ul>
                    <span className={moduleStyle.profile_btn}>
                        <a href="https://github.com/Rafdidas" target="_blank" rel="noopener noreferrer">Check My Profile</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile;