import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    language: 'En',
                    home: 'Home',
                    experience: 'Experience',
                    skills: 'Skills',
                    portfolio: 'Portfolio',
                    contact: 'Contact',
                    hello: 'Hi',
                    seeMore: 'see more',
                    describtion:
                        'Software engineer with a focus on web, mobile app, and frontend development.',
                    aboutMe:
                        "I have been working with I've been working with Javascript and its ecosystems - React js, React Native, Redux, MobX, and TypeScript for 2+ years.",
                    developer: 'Developer',
                    myExperience: 'My Experience',
                    company2: {
                        type: 'On-site',
                        webSite: 'Company website:',
                        technologies: 'Technologies:',
                        description:
                            'General information about the projects: The projects consist of creating mobile apps and web apps from scratch and delivering them to the user using modern libraries. They also include further improving the performance of the projects in progress, fixing bugs, and adding new features.',
                        contents: {
                            1: "- Fixed major bugs related to design, functionality and performance, speeding up the project's transition to production.",
                            2: '- Introduced a feature with CRUD operations seamlessly integrated with the backend using React Query, Redux and MobX.',
                            3: '- Worked closely with the backend team to make the API more stable, which makes integration with the frontend smoother.',
                            4: '- Conducted thorough intelligence testing, reported issues and made suggestions for improvement.',
                        },
                    },
                    company1: {
                        type: 'On-site',
                        description:
                            'Projects: Very useful online stores. You can easily find anything in these apps. You can use the search system to find what you need.',
                        contents: {
                            1: '- Designed and implemented the project structure with linting configurations to ensure clean and maintainable code.',
                            2: '- Proposed new features and contributed actively to project planning and decision-making.',
                            3: '- Developed reusable components and state management using React and Redux Toolkit.',
                            4: '- I developed a highly efficient online store application for iOS and Android devices using the React Native and Expo platforms.',
                            5: '- Resolved application bugs, ensuring smooth user experiences.',
                        },
                    },
                    skill: 'Skills',
                    myPortfolio: 'My Portfolio',
                    birmakon: {
                        title: 'Online Store for ios and android',
                        description:
                            'I worked as an additional programmer on this project. I performed the tasks assigned to me  excellently.',
                    },
                    birmakonWeb: {
                        title: 'Birmakon - professional services center',
                        description:
                            'I did several pages and API integrations as an additional developer.',
                    },
                    modern: {
                        title: 'A tool for purchasing any type of product',
                        description:
                            'I worked as a lead developer in creating this mobile device. And I made it user-friendly. For iOS and Android.',
                        doWill: 'It will be available on the App Store and Play Market soon.',
                    },
                    polytext: {
                        description:
                            'My job is to fix bugs in the mobile app, update library versions, and improve its performance.',
                    },
                    hayat: {
                        description:
                            'This project is for the hospital. To avoid queues at the hospital and for online registration.',
                    },
                    kiber: {
                        description:
                            'Kiber.uz is similar to Didox.uz, a platform for managing contracts. It allows users to create contracts, sign them digitally using "E-Imzo," cancel, and accept them online.',
                    },
                    lacasa: {
                        description:
                            'This is a modern web application for posting real estate listings and finding potential buyers or renters. The platform allows users to add their listings, sell, or rent out properties.',
                    },
                    banana: {
                        description:
                            'BananaTV is a modern media platform that allows users to watch and share various movies and TV series. The app stands out with high-quality content, a user-friendly interface, and personalized recommendations.',
                    },
                    contactMe: 'Contact me',
                    massage:
                        'If you have seen my potential or want to talk to me, feel free to send me a message',
                },
            },
            uz: {
                translation: {
                    language: 'Uz',
                    home: 'Bosh sahifa',
                    experience: 'Tajriba',
                    skills: "Ko'nikmalar",
                    portfolio: 'Portfolio',
                    contact: 'Aloqa',
                    hello: 'Salom',
                    seeMore: 'batafsil',
                    describtion:
                        "Web, mobil ilovalar va frontend ishlab chiqishga ixtisoslashgan dasturiy ta'minot muhandisi.",
                    aboutMe:
                        'Men 2+ yildan beri JavaScript va uning ekotizimlari – React JS, React Native, Redux, MobX va TypeScript bilan ishlab kelmoqdaman.',
                    developer: 'Dasturchi',
                    myExperience: 'Mening Tajribam',
                    company2: {
                        type: 'Offisda',
                        webSite: 'Kompaniya sayti:',
                        technologies: 'Texnologiyalar:',
                        description:
                            "Loyihalar haqida umumiy ma'lumot: Loyihalar mobil va veb-ilovalarni noldan yaratish va ularni zamonaviy kutubxonalar yordamida foydalanuvchilarga yetkazib berishni o‘z ichiga oladi. Shuningdek, davom etayotgan loyihalarning samaradorligini oshirish, xatolarni tuzatish va yangi funksiyalar qo‘shish ham ushbu jarayonga kiradi.",
                        contents: {
                            1: '- Dizayn, funksionallik va samaradorlik bilan bog‘liq asosiy xatolarni tuzatib, loyiha ishlab chiqarish bosqichiga tezroq o‘tishini ta’minladim.',
                            2: '- React Query, Redux va MobX yordamida backend bilan uzviy bog‘langan CRUD operatsiyalariga ega yangi funksiyani joriy qildim.',
                            3: '- Backend jamoasi bilan yaqindan hamkorlik qilib, API barqarorligini oshirdim va frontend bilan integratsiyani silliqroq qildim.',
                            4: '- Chuqur tahliliy testlar o‘tkazdim, muammolarni aniqladim va yaxshilash bo‘yicha takliflar berdim.',
                        },
                    },
                    company1: {
                        type: 'Offisda',
                        description:
                            'Loyihalar: Juda foydali onlayn do‘konlar. Ushbu ilovalarda istalgan narsani oson topish mumkin. Sizga kerak bo‘lgan narsani topish uchun qidiruv tizimini ishlatishingiz mumkin.',
                        contents: {
                            1: '- Toza va qulay kodni ta’minlash uchun lint sozlamalari bilan loyiha tuzilishini yaxshilab, clean kodni amalga oshirdim.',
                            2: '- Yangi funksiyalar taklif qildim va loyiha rejalashtirish hamda qaror qabul qilish jarayonida faol ishtirok etdim.',
                            3: '- React va Redux Toolkit yordamida qayta foydalanish mumkin bo‘lgan komponentlar va holat boshqaruvini ishlab chiqdim.',
                            4: '- React Native va Expo platformalaridan foydalangan holda iOS va Android qurilmalari uchun yuqori samarali onlayn do‘kon ilovasini ishlab chiqdim.',
                            5: '- Ilovadagi xatolarni bartaraf qildim, foydalanuvchilarga qulay foydalanish imkoniyatini ta’minladim.',
                        },
                    },
                    skill: "Ko'nikmalar",
                    myPortfolio: 'Mening Portfoliom',
                    birmakon: {
                        title: 'Ios va android uchun onlayn do‘kon',
                        description:
                            'Men ushbu loyihada yordamchi dasturchi sifatida ishladim. Menga berilgan vazifalarni muvaffaqiyatli va a’lo darajada bajardim.',
                    },
                    birmakonWeb: {
                        title: 'Birmakon - professional xizmatlar markazi',
                        description:
                            'Men yordamchi dasturchi sifatida bir nechta sahifalar va API integratsiyalarini bajardim.',
                    },
                    modern: {
                        title: 'Har qanday turdagi mahsulotni xarid qilish imkoniyati',
                        description:
                            'Men ushbu mobil qurilmani yaratishda bosh dasturchi sifatida ishladim va uni iOS hamda Android uchun qulay qildim.',
                        doWill: 'Yaqinda App Store va Play Marketda mavjud bo‘ladi.',
                    },
                    polytext: {
                        description:
                            'Mening vazifam mobil ilovadagi xatolarni tuzatish, kutubxona versiyalarini yangilash va uning samaradorligini oshirish.',
                    },
                    hayat: {
                        description:
                            'Ushbu loyiha shifoxona uchun mo‘ljallangan. Navbatlarning oldini olish va onlayn ro‘yxatdan o‘tish uchun.',
                    },
                    kiber: {
                        description:
                            'Kiber.uz - Didox.uz kabi shartnomalar bilan ishlashga mo‘ljallangan saytga o‘xshaydi. Bu platformada shartnomalar yaratish, ularga "E-Imzo" orqali raqamli imzo qo‘yish, bekor qilish va qabul qilish jarayonlari onlayn tarzda amalga oshiriladi.',
                    },
                    lacasa: {
                        description:
                            "Bu ko‘chmas mulk e'lonlarini joylashtirish va potensial xaridorlar yoki ijarachilarni topish uchun mo‘ljallangan zamonaviy veb-ilova. Platforma foydalanuvchilarga e’lon qo‘shish, mulk sotish yoki ijaraga berish imkonini beradi.",
                    },
                    banana: {
                        description:
                            'BananaTV — foydalanuvchilarga turli filmlar va teleseriallarni tomosha qilish hamda ulashish imkonini beruvchi zamonaviy media platforma. Ilova yuqori sifatli kontent, qulay interfeys va shaxsiylashtirilgan tavsiyalar bilan ajralib turadi.',
                    },
                    contactMe: "Men bilan bog'lanish",
                    massage:
                        'Agar mening salohiyatimni ko‘rgan bo‘lsangiz yoki men bilan gaplashmoqchi bo‘lsangiz, bemalol menga xabar yuboring',
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
