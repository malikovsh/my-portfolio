import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Me from '../../assets/mee.png';
import { NavHashLink } from 'react-router-hash-link';
export function Hero() {
    return (
        <Container id="home">
            <div className="hero-text">
                <ScrollAnimation animateIn="fadeInUp">
                    <p>Hi 👋</p>
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
                        Software engineer with a focus on web, mobile app, and
                        frontend development. <br /> I have been working with
                        I've been working with Javascript and its ecosystems -
                        React js, React Native, Redux, MobX, and TypeScript for
                        2+ years.
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={150}>
                    <BrowserRouter>
                        <NavHashLink smooth to="#contact" className="button">
                            Contact
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
