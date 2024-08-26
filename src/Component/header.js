import moduleStyle from '../CSS/header.module.css';

const Header = () => {
    return (
        <header className={moduleStyle.header}>
            <div className={moduleStyle.hd_navi}>
                <ul>
                    <li><span className={moduleStyle.active}>Home</span></li>
                    <li><span>Portfolio</span></li>
                    <li><span>About</span></li>
                    <li><span>Resume</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;