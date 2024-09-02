import moduleStyle from '../CSS/background.module.css';

const BackGround = () => {

    return (
        <div className={moduleStyle.main_bg}>
            <div className={moduleStyle.bg_top}>
                <img src={process.env.PUBLIC_URL + `../img/bg_top.svg`} alt="bg_top" />
            </div>
            <div className={moduleStyle.bg_bottom}>
                <img src={process.env.PUBLIC_URL + `../img/bg_bottom.svg`} alt="bg_bottom" />
            </div>
        </div>
    )
}

export default BackGround;