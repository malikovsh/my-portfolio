import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

import Curriculo from '../../assets/resume.pdf';

export function Header() {
    const [isActive, setActive] = useState(false);
    const { t, i18n } = useTranslation();

    function toggleTheme() {
        let html = document.getElementsByTagName('html')[0];
        html.classList.toggle('light');
    }

    function closeMenu() {
        setActive(false);
    }

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'uz' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <Container className="header-fixed">
            <Router>
                <HashLink smooth to="#home" className="logo">
                    <span>M.</span>
                    <span>Shukhrat</span>
                </HashLink>

                <input
                    onChange={toggleTheme}
                    className="container_toggle"
                    type="checkbox"
                    id="switch"
                    name="mode"
                />
                <label htmlFor="switch">Toggle</label>

                <nav className={isActive ? 'active' : ''}>
                    <NavHashLink smooth to="#home" onClick={closeMenu}>
                        {t('home')}
                    </NavHashLink>
                    <NavHashLink smooth to="#experience" onClick={closeMenu}>
                        {t('experience')}
                    </NavHashLink>
                    <NavHashLink smooth to="#skills" onClick={closeMenu}>
                        {t('skills')}
                    </NavHashLink>
                    <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
                        {t('portfolio')}
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closeMenu}>
                        {t('contact')}
                    </NavHashLink>
                    <button onClick={toggleLanguage} className="langugeButton">
                        <Languages className="w-5 h-5" />
                        {t('language')}
                    </button>
                    <a href={Curriculo} download className="button">
                        CV
                    </a>
                </nav>

                <div
                    aria-expanded={isActive ? 'true' : 'false'}
                    aria-haspopup="true"
                    aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
                    className={isActive ? 'menu active' : 'menu'}
                    onClick={() => {
                        setActive(!isActive);
                    }}
                ></div>
            </Router>
        </Container>
    );
}
