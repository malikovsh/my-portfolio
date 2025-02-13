import { Container } from './styles';
import birmakon from '../../assets/birmakon.png';
import birmakonWeb from '../../assets/birmakonWeb.png';
import modern from '../../assets/modern.png';
import polytex from '../../assets/polytex.png';
import hayat from '../../assets/hayat.png';
import kiber from '../../assets/kiber.png';
import lacasa from '../../assets/lacasa.png';
import banana1 from '../../assets/banana1.png';
import banana2 from '../../assets/banana2.png';
import { useTranslation } from 'react-i18next';

export function Portfolio() {
    const { t } = useTranslation();

    return (
        <Container id="portfolio">
            <h2>{t('myPortfolio')}</h2>

            <div className="projects">
                <a
                    target="_blank"
                    href="https://www.lacasa.uz/"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <img
                                src={lacasa}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>Lacasa Uz</h3>
                            <p>{t('lacasa.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>Firebase</li>
                            </ul>
                            <ul className="tech-list">
                                <li>TypeScript</li>
                                <li>React js</li>
                                <li>zustand</li>
                                <li>lint</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://apps.apple.com/qa/app/birmakon/id6443904441"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <img
                                src={birmakon}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>{t('birmakon.title')}</h3>
                            <p>{t('birmakon.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>React Native</li>
                                <li>React navigation</li>
                                <li>React hooks</li>
                                <li>MobX</li>
                            </ul>
                            <ul className="tech-list">
                                <li>Rest Api</li>
                                <li>Axios</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Firebase</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://birmakon.com/"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <img
                                src={birmakonWeb}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>{t('birmakonWeb.title')}</h3>
                            <p>{t('birmakonWeb.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>Firebase</li>
                            </ul>
                            <ul className="tech-list">
                                <li>TypeScript</li>
                                <li>React js</li>
                                <li>MobX</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.anonymous.movieapp"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    border: '1px solid #f1f1f1',
                                }}
                            >
                                <img
                                    src={banana2}
                                    style={{
                                        width: '150px',
                                        borderRadius: '8px',
                                    }}
                                    alt=""
                                />
                                <img
                                    src={banana1}
                                    style={{
                                        width: '150px',
                                        borderRadius: '8px',
                                    }}
                                    alt=""
                                />
                            </div>
                            <h3>Banana Tv</h3>
                            <p>{t('banana.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>React Native</li>
                                <li>React navigation</li>
                                <li>React hooks</li>
                                <li>MobX</li>
                            </ul>
                            <ul className="tech-list">
                                <li>Rest Api</li>
                                <li>Axios</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Firebase</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/polytex-admin/id1628773445"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <img
                                src={polytex}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>Polytex Admin</h3>
                            <p>{t('polytext.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Expo</li>
                                <li>React navigation</li>
                                <li>React hooks</li>
                            </ul>
                            <ul className="tech-list">
                                <li>Rest Api</li>
                                <li>Axios</li>
                                <li>JavaScript</li>
                                <li>Redux</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a target="_blank" href="https://kiber.uz/" rel="noreferrer">
                    <div className="project">
                        <div className="body">
                            <img
                                src={kiber}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>Kiber.uz</h3>
                            <p>{t('kiber.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>E-imzo</li>
                            </ul>
                            <ul className="tech-list">
                                <li>TypeScript</li>
                                <li>React js</li>
                                <li>React query</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://hayatmed.uz/en/"
                    rel="noreferrer"
                >
                    <div className="project">
                        <div className="body">
                            <img
                                src={hayat}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>Hayat hospital</h3>
                            <p>{t('hayat.description')}</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>Firebase</li>
                            </ul>
                            <ul className="tech-list">
                                <li>TypeScript</li>
                                <li>React js</li>
                                <li>React query</li>
                                <li>MUI</li>
                            </ul>
                        </footer>
                    </div>
                </a>
                <a href="#">
                    <div className="project">
                        <div className="body">
                            <img
                                src={modern}
                                style={{ width: '100%', borderRadius: '8px' }}
                                alt=""
                            />
                            <h3>
                                Modern Shop <br /> {t('modern.title')}
                            </h3>
                            <p>
                                {t('modern.description')} <br /> <br />
                                <strong>{t('modern.doWill')}</strong>
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Expo</li>
                                <li>React navigation</li>
                                <li>React hooks</li>
                                <li>Web Socket</li>
                            </ul>
                            <ul className="tech-list">
                                <li>Rest Api</li>
                                <li>Axios</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>MobX</li>
                            </ul>
                        </footer>
                    </div>
                </a>
            </div>
        </Container>
    );
}
