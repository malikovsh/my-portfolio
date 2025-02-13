import { useTranslation } from 'react-i18next';
import { Container } from './styles';

export function Contact() {
    const { t } = useTranslation();

    return (
        <Container id="contact">
            <header>
                <h2>{t('contactMe')}</h2>
                <p>{t('massage')}</p>
            </header>
            <div className="contacts">
                <a
                    className="link-tag"
                    target="_blank"
                    href="mailto:malikovsh.developer@gmail.com"
                    rel="noreferrer"
                >
                    <div>
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                        >
                            <path
                                d="M93,19H7c-1.1,0-2,0.9-2,2v58c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2
              c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1c0,0,0,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
              c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1s0.1,0,0.2,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0
              c0,0,0.1,0,0.1,0h86c0.2,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2-0.1,0.2-0.2
              c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2l0.1-0.1c0,0,0,0,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.2
              c0-0.1,0-0.1,0.1-0.2s0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1V21C95,19.9,94.1,19,93,19z M9,32.1l27,21.4
              L9,74.9V32.1z M12.8,77l26.5-21l9.5,7.5c0.4,0.3,0.8,0.4,1.2,0.4s0.9-0.1,1.2-0.4l9.5-7.5l26.5,21H12.8z M91,74.9L64,53.5l27-21.4
              V74.9z M91,27l-1.2,1L50,59.5L10.2,28L9,27v-4h82V27z"
                            />
                        </svg>
                        <span>malikovsh.developer@gmail.com</span>
                    </div>
                </a>
                <a
                    className="link-tag"
                    target="_blank"
                    href="tel:+998770263226"
                    rel="noreferrer"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        <span>(77) 026-32-26</span>
                    </div>
                </a>

                <a
                    className="link-tag"
                    target="_blank"
                    href="https://t.me/malikov_shuxrat"
                    rel="noreferrer"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 16"
                            fill="none"
                        >
                            <path
                                d="M0.896455 6.79637L16.2851 0.145754C17.0088 -0.166999 17.7929 0.441585 17.6695 1.22023L15.5655 14.4962C15.4355 15.3162 14.4206 15.6299 13.8506 15.0262L10.3977 11.3686C9.72058 10.6514 9.66752 9.54749 10.2727 8.76857L12.7107 5.63084C12.8501 5.45146 12.63 5.21549 12.4414 5.34204L7.59406 8.59387C6.77148 9.14569 5.77341 9.37269 4.79309 9.2309L1.15003 8.70401C0.15204 8.55968 -0.0291716 7.1964 0.896455 6.79637Z"
                                fill="#000"
                            />
                        </svg>
                        <span>Shukhrat Malikov</span>
                    </div>
                </a>
            </div>
        </Container>
    );
}
