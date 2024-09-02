import { useState } from 'react';
import moduleStyle from '../CSS/header.module.css';
import { useEffect } from 'react';

const Header = ({scrollToSection}) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 50;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={moduleStyle.header}>
            <div className={moduleStyle.hd_navi}>
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? moduleStyle.active : ''} onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('home');
                    }}>Home</a></li>
                    <li><a href="#portfolio" className={activeSection === 'portfolio' ? moduleStyle.active : ''} onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('portfolio');
                    }}>Portfolio</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? moduleStyle.active : ''} onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('about');
                    }}>About</a></li>
                    {/* <li><span>Contact</span></li> */}
                </ul>
            </div>
        </header>
    )
}

export default Header;