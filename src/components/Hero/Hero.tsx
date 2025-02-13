import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Me from '../../assets/mee.png';
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();

    return (
        <Container id="home">
            <div className="hero-text">
                <ScrollAnimation animateIn="fadeInUp">
                    <p>{t('hello')} 👋</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={100}>
                    <h1 style={{ fontSize: '50px' }}>Shukhrat Malikov</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={120}>
                    <h3>
                        Front-end developer | JavaScript | React js | React
                        Native | Expo
                    </h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={130}>
                    <p className="small-resume">
                        {t('describtion')} <br /> {t('aboutMe')}
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={150}>
                    <BrowserRouter>
                        <NavHashLink smooth to="#contact" className="button">
                            {t('contact')}
                        </NavHashLink>
                    </BrowserRouter>
                </ScrollAnimation>
            </div>
            <div className="hero-image">
                <ScrollAnimation animateIn="fadeInRight" delay={0}>
                    <img src={Me} alt="Ilustração" />
                </ScrollAnimation>
            </div>
        </Container>
    );
}
