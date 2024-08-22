import moduleStyle from '../CSS/profile.module.css';

const Profile = () => {
    return(
        <div className={moduleStyle.profile}>
            <div className={moduleStyle.inner}>
                <div className={moduleStyle.profile_name}>PARK<br/>HYEON GYU</div>
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
                    <span className={moduleStyle.stack_img}><img src={process.env.PUBLIC_URL + '../img/html.png'} alt="html" /></span>
                </div>
            </div>
        </div>
    )
}

export default Profile;