import { useState } from 'react';
import { Container } from './styles';
import softwhereLogo from '../../assets/companies/Softwhare.png';
import empireLogo from '../../assets/companies/Empire.jpg';
import { useTranslation } from 'react-i18next';

export function About() {
    const [openCollapseIds, setopenCollapseIds] = useState<{
        [id: number]: boolean;
    }>({ 1: true, 2: true, 3: true, 4: true });
    const { t } = useTranslation();

    const data = [
        {
            id: 1,
            img: softwhereLogo,
            position: `React, React Native Developer`,
            company: 'Softwhere · Full-time',
            duration: 'Dec 2023 - Present',
            location: 'Tashkent, Uzbekistan',
            type: `${t('company2.type')}`,
            task: `${t('company2.description')}`,
            technologies:
                ' React Native, Expo,  React js, Javascript, Typescript, React hooks, roots, Redux Tookit, React-query, MUI, Tailwind css, WebSocket Api, Rest Api',
            contents: [
                `${t('company2.contents.1')}`,
                `${t('company2.contents.2')}`,
                `${t('company2.contents.3')}`,
                `${t('company2.contents.4')}`,
            ],
            link: 'https://softwhere-uz-86ky.vercel.app/uz',
        },
        {
            id: 2,
            img: empireLogo,
            position: `React, React Native Developer`,
            company: 'Empire Soft · Full-time',
            duration: 'Sep 2022 - Nov 2023 · 1 yr 3 mos',
            location: 'Toshkent, Uzbekistan',
            type: `${t('company1.type')}`,
            task: `${t('company1.description')}`,
            technologies:
                'React Native, Expo, MobX, Redux Tookit, Java-script, Typescript, HTML, CSS, React, Tailwind CSS, Eslint, Axios',
            contents: [
                `${t('company1.contents.1')}`,
                `${t('company1.contents.2')}`,
                `${t('company1.contents.3')}`,
                `${t('company1.contents.4')}`,
                `${t('company1.contents.5')}`,
            ],
            link: 'https://empire-soft.net',
        },
    ];

    const seeMore = (id: number) => {
        setopenCollapseIds((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Container id="experience">
            <div className="about-text">
                <h2>{t('myExperience')}</h2>
                {data?.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #fff',
                            borderRadius: 10,
                            padding: 20,
                            marginBottom: 15,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: 10,
                                gap: 10,
                            }}
                        >
                            {item.img ? (
                                <img
                                    style={{ width: 50, background: '#fff' }}
                                    src={item.img}
                                    alt={item?.img}
                                />
                            ) : null}
                            <p>{item?.position}</p>
                        </div>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                opacity: 0.8,
                            }}
                        >
                            {item.company}
                        </p>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                opacity: 0.8,
                            }}
                        >
                            {item.duration}
                        </p>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                opacity: 0.8,
                            }}
                        >
                            {item.location} · {item.type}
                        </p>

                        <div
                            style={{
                                display: openCollapseIds[item.id]
                                    ? 'flex'
                                    : 'none',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <p style={{ fontSize: '14px' }}>...</p>
                            <p
                                className="see-more-link"
                                onClick={() => seeMore(item.id)}
                                style={{
                                    fontSize: '14px',
                                    color: '#fff',
                                    cursor: 'pointer',
                                }}
                            >
                                ... {t('seeMore')}
                            </p>
                        </div>

                        <div
                            style={
                                openCollapseIds[item.id]
                                    ? { display: 'none' }
                                    : { display: 'block' }
                            }
                        >
                            <p
                                style={{
                                    marginBottom: 15,
                                    marginTop: 15,
                                    fontSize: '16px',
                                }}
                            >
                                {item.task}
                            </p>
                            {item?.contents?.map((con, i) => (
                                <p key={con} style={{ fontSize: '16px' }}>
                                    {con}
                                </p>
                            ))}
                        </div>
                        <p style={{ marginTop: 15, fontSize: '16px' }}>
                            {t('company2.technologies')} {item.technologies}
                        </p>
                        <p style={{ marginTop: 15, fontSize: '16px' }}>
                            {t('company2.webSite')}{' '}
                            <a
                                target="_blank"
                                href={item.link}
                                rel="noreferrer"
                                style={{ color: '#23ce6b' }}
                            >
                                {item.link}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    );
}
