import { useState } from 'react';
import { Container } from './styles';
import softwhereLogo from '../../assets/companies/Softwhare.png';
import empireLogo from '../../assets/companies/Empire.jpg';

export function About() {
    const [openCollapseIds, setopenCollapseIds] = useState<{
        [id: number]: boolean;
    }>({ 1: true, 2: true, 3: true, 4: true });

    const data = [
        {
            id: 1,
            img: softwhereLogo,
            position: 'React, React Native Develope',
            company: 'Softwhere · Full-time',
            duration: 'Dec 2023 - Present',
            location: 'Tashkent, Uzbekistan',
            type: 'On-site',
            task: 'General information about the projects: The projects consist of creating mobile apps and web apps from scratch and delivering them to the user using modern libraries. They also include further improving the performance of the projects in progress, fixing bugs, and adding new features.',
            technologies:
                ' React Native, Expo,  React js, Javascript, Typescript, React hooks, roots, Redux Tookit, React-query, MUI, Tailwind css, WebSocket Api, Rest Api',
            contents: [
                "- Fixed major bugs related to design, functionality and performance, speeding up the project's transition to production.",
                '- Introduced a feature with CRUD operations seamlessly integrated with the backend using React Query, Redux and MobX.',
                '- Worked closely with the backend team to make the API more stable, which makes integration with the frontend smoother.',
                '- Conducted thorough intelligence testing, reported issues and made suggestions for improvement.',
            ],
            link: 'https://softwhere-uz-86ky.vercel.app/uz',
        },
        {
            id: 2,
            img: empireLogo,
            position: 'React, React Native Developer',
            company: 'Empire Soft · Full-time',
            duration: 'Sep 2022 - Nov 2023 · 1 yr 3 mos',
            location: 'Toshkent, Uzbekistan',
            type: 'On-site',
            task: 'Projects: Very useful online stores. You can easily find anything in these apps.',
            technologies:
                'React Native, Expo, MobX, Redux Tookit, Java-script, Typescript, HTML, CSS, React, Tailwind CSS, Eslint, Axios',
            contents: [
                '- Designed and implemented the project structure with linting configurations to ensure clean and maintainable code.',
                '- Proposed new features and contributed actively to project planning and decision-making.',
                '- Developed reusable components and state management using React and Redux Toolkit.',
                '- I developed a highly efficient online store application for iOS and Android devices using the React Native and Expo platforms.',
                '- Resolved application bugs, ensuring smooth user experiences.',
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
                <h2>My experience</h2>
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
                                ... see more
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
                            Technologies: {item.technologies}
                        </p>
                        <p style={{ marginTop: 15, fontSize: '16px' }}>
                            Company website:{' '}
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
