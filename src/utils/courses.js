import history from '../images/courses/russia-history.jpg';
import transport from '../images/courses/transport-history.jpg';
import scb from '../images/courses/scb.jpg';
import chkt from '../images/courses/chkt.jpg';
import fedyakin from '../images/authors/fedyakin.png';
import tancevova from '../images/authors/tancevova.png';
import medvedev from '../images/authors/medvedev.png';
import cherepanov from '../images/authors/cherepanov.png';
import antonov from '../images/authors/antonov.png';
import horoshev from '../images/authors/horoshev.png';
import novikov from '../images/authors/novikov.png';
import shumeiko from '../images/authors/shumeiko.png';
import rzd from '../images/authors/rzd.png';
import rut from '../images/authors/rut.png';
import course_history_russia1 from '../images/screenshots/course_history-russia/1.png';
import course_history_russia2 from '../images/screenshots/course_history-russia/2.png';
import course_history_russia3 from '../images/screenshots/course_history-russia/3.png';
import course_history_russia4 from '../images/screenshots/course_history-russia/4.png';
import course_history_russia5 from '../images/screenshots/course_history-russia/5.png';
import course_history_russia6 from '../images/screenshots/course_history-russia/6.png';
import course_history_russia7 from '../images/screenshots/course_history-russia/7.png';
import course_history_russia8 from '../images/screenshots/course_history-russia/8.png';
import course_history_russia9 from '../images/screenshots/course_history-russia/9.png';
import course_history_russia10 from '../images/screenshots/course_history-russia/10.png';
import course_history_transport1 from '../images/screenshots/course_history-transport/1.png';
import course_history_transport2 from '../images/screenshots/course_history-transport/2.png';
import course_history_transport3 from '../images/screenshots/course_history-transport/3.png';
import course_history_transport4 from '../images/screenshots/course_history-transport/4.png';
import course_history_transport5 from '../images/screenshots/course_history-transport/5.png';
import course_history_transport6 from '../images/screenshots/course_history-transport/6.png';
import course_history_transport7 from '../images/screenshots/course_history-transport/7.png';
import course_history_transport8 from '../images/screenshots/course_history-transport/8.png';
import course_history_transport9 from '../images/screenshots/course_history-transport/9.png';
import course_history_transport10 from '../images/screenshots/course_history-transport/10.png';
import course_history_chkt1 from '../images/screenshots/course_history-chkt/1.png';
import course_history_chkt2 from '../images/screenshots/course_history-chkt/2.png';
import course_history_chkt3 from '../images/screenshots/course_history-chkt/3.png';
import course_history_chkt4 from '../images/screenshots/course_history-chkt/4.png';
import course_history_chkt5 from '../images/screenshots/course_history-chkt/5.png';
import course_history_chkt6 from '../images/screenshots/course_history-chkt/6.png';
import course_history_chkt7 from '../images/screenshots/course_history-chkt/7.png';
import course_history_chkt8 from '../images/screenshots/course_history-chkt/8.png';
import course_history_chkt9 from '../images/screenshots/course_history-chkt/9.png';
import course_history_chkt10 from '../images/screenshots/course_history-chkt/10.png';
import course_history_scb1 from '../images/screenshots/course_history-scb/1.png';
import course_history_scb2 from '../images/screenshots/course_history-scb/2.png';
import course_history_scb3 from '../images/screenshots/course_history-scb/3.png';
import course_history_scb4 from '../images/screenshots/course_history-scb/4.png';
import course_history_scb5 from '../images/screenshots/course_history-scb/5.png';
import course_history_scb6 from '../images/screenshots/course_history-scb/6.png';
import course_history_scb7 from '../images/screenshots/course_history-scb/7.png';
import course_history_scb8 from '../images/screenshots/course_history-scb/8.png';
import course_history_scb9 from '../images/screenshots/course_history-scb/9.png';
import course_history_scb10 from '../images/screenshots/course_history-scb/10.png';

export const courses = [
  { 
    name: 'Россия в\u00A0глобальной истории',
    description: 'Онлайн-курс направлен на\u00A0формирование знаний по\u00A0важнейшим закономерностям, событиям, персонам в\u00A0истории России, а\u00A0также их месте в\u00A0истории всемирной. ',
    annotation: 'Этот курс лекций представляет собой новое слово в процессе изучения отечественной истории. При изучении истории важно показывать весь спектр исторических фактов во всей их взаимосвязи с одной стороны, с другой разрушать возникающие и сознательно формируемые исторические штампы и мифы.',
    authors: [
      { 
        name: 'Игорь Николаевич Шумейко',
        degree: 'писатель, сценарист, историк, автор историко-публицистических, научных, художественных книг',
        img: shumeiko,
      },
    ],
    screens: [course_history_russia1, course_history_russia2, course_history_russia3, course_history_russia4, course_history_russia5, course_history_russia6, course_history_russia7, course_history_russia8, course_history_russia9, course_history_russia10,],
    tags: ['history'],
    hours: 108,
    date: '01.01.2023 — 31.12.2023',
    link: '',
    id: 'course_1',
    img: history,
    active: false,
  },
  { 
    name: 'История транспорта',
    description: 'Онлайн-курс направлен на\u00A0формирование знаний в\u00A0области направленности и\u00A0этапов развития основных видов транспорта общего пользования во\u00A0всем их историческом единстве и многообразии.',
    annotation: 'Обучение по онлайн-курсу предполагает, что по его результатам обучающийся будет знать ключевые факторы и предпосылки возникновения основных видов транспорта общего пользования, а также базовые типы новшеств и усовершенствований, определяющих технические, организационные и т.п. прорывы в развитии транспорта в целом и его отдельных видов в частности.',
    authors: [
      { 
        name: 'А.В. Федякин',
        degree: 'профессор, доктор политических наук',
        img: fedyakin,
      },
      { 
        name: 'А.В. Танцевова',
        degree: 'доцент, кандидат исторических наук',
        img: tancevova,
      },
      { 
        name: 'С.В. Медведев',
        degree: 'доцент, кандидат исторических наук',
        img: medvedev,
      },
      { 
        name: 'В.Д. Черепанов',
        degree: 'доцент, кандидат политических наук',
        img: cherepanov,
      },
    ],
    screens: [course_history_transport1, course_history_transport2, course_history_transport3, course_history_transport4, course_history_transport5, course_history_transport6, course_history_transport7, course_history_transport8, course_history_transport9, course_history_transport10,],
    tags: ['transport', 'history'],
    hours: 72,
    date: '01.01.2023 — 31.12.2023',
    link: '',
    id: 'course_2',
    img: transport,
    active: false,
  },
  { 
    name: 'Человеческий капитал транспорта',
    description: 'Онлайн-курс направлен на формирование системного понимания отраслевых особенностей ключевых процессов управления персоналом и социально-трудовых отношений в транспортном комплексе Российской Федерации.',
    annotation: 'Статус общетранспортного университета определяет для РУТ необходимость разработки образовательных продуктов и решений по всем видам транспорта. В настоящее время практически отсутствуют отраслевые комплексные курсы по сфере труда и управлению человеческим капиталом на транспорте.',
    authors: [
      { 
        name: 'Практики из транспортных компаний и организаций',
        degree: 'ОАО «РЖД», Московский метрополитен, ГК Автобан, Ассоциация Росасфальт, Ассоциация международных автоперевозчиков, Консалтинговая компания «Авиаперсонал»',
        img: rzd,
      },
      { 
        name: 'Преподаватели и ученые транспортных вузов',
        degree: 'РУТ (МИИТ), ГМУ им. адм. Ф.Ф. Ушакова',
        img: rut,
      },
    ],
    screens: [course_history_chkt1, course_history_chkt2, course_history_chkt3, course_history_chkt4, course_history_chkt5, course_history_chkt6, course_history_chkt7, course_history_chkt8, course_history_chkt9, course_history_chkt10,],
    tags: ['management', 'economy'],
    hours: 72,
    date: '01.01.2023 — 31.12.2023',
    link: '',
    id: 'course_3',
    img: chkt,
    active: false,
  },
  { 
    name: 'Системы железнодорожной автоматики и телемеханики',
    description: 'Онлайн-курс направлен на\u00A0формирование компетенций в\u00A0области инжиниринга средств автоматизации, телемеханики и\u00A0средств сигнализации на\u00A0железнодорожном транспорте. ',
    annotation: 'Курс охватывает базовые знания по данному предмету и способствует систематизации усвоенного материала этой области.',
    authors: [
      { 
        name: 'А.А. Антонов',
        degree: 'доцент, кандидат технических наук',
        img: antonov,
      },
      { 
        name: 'В.В. Хорошев',
        degree: 'доцент, кандидат технических наук',
        img: horoshev,
      },
      { 
        name: 'В.Г. Новиков',
        degree: 'доцент, кандидат технических наук',
        img: novikov,
      },
    ],
    screens: [course_history_scb1, course_history_scb2, course_history_scb3, course_history_scb4, course_history_scb5, course_history_scb6, course_history_scb7, course_history_scb8, course_history_scb9, course_history_scb10,],
    tags: ['technology', 'transport'],
    hours: 108,
    date: '01.01.2023 — 31.12.2023',
    link: '',
    id: 'course_4',
    img: scb,
    active: false,
  },
]