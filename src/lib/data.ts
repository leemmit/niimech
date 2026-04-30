import { IconKey } from "./icons";

export interface ServiceItem {
  icon: IconKey;
  title: string;
  description?: string;
}

export interface SectionData {
  id: string;
  title: string;
  image: string;
  description: string;
  servicesTitle?: string;
  servicesTitle2?: string;
  services?: ServiceItem[];
  services2?: ServiceItem[];
  checklist?: string[];
  buttonText?: string;
  showButton?: boolean;
}

export const sectionsData: SectionData[] = [
  {
    id: "main",
    title: "Проектируем уверенность.\nЦифровая инженерия для критических задач",
    image: "/logo_glow3.png",
    description:
      "Единственная аккредитованная лаборатория виртуальных испытаний в России. С 2015 года — надёжность в каждом расчёте",
    buttonText: "Начать сотрудничество",
    servicesTitle: "Наши направления",
    servicesTitle2: "Ключевые услуги",
    services: [
      {
        icon: "plane",
        title: "Авиакосмическая отрасль",
      },
      {
        icon: "ship",
        title: "Судостроение",
      },
      {
        icon: "road",
        title: "Дорожная инфраструктура",
      },
    ],
    services2: [
      {
        icon: "tvMinimal",
        title: "Цифровые двойники",
      },
      {
        icon: "monitorCheck",
        title: "Виртуальная сертификация",
      },
      {
        icon: "chartNoAxesCombined",
        title: "Предиктивная аналитика",
      },
      {
        icon: "userSearch",
        title: "Инженерный консалтинг",
      },
    ],
    checklist: [],
  },
  {
    id: "services",
    title: "Наши услуги",
    image: "/ship2.png",
    description:
      "Предлагаем полный спектр услуг в области строительства, проектирования и консалтинга. Работаем с объектами любой сложности.",
    services: [
      {
        icon: "hammer",
        title: "Строительство",
        description: "Возведение объектов любой сложности под ключ",
      },
      {
        icon: "rulerDimensionLine",
        title: "Проектирование",
        description: "Разработка проектной документации",
      },
      {
        icon: "chartBarStacked",
        title: "Консалтинг",
        description: "Профессиональные консультации по реализации проектов",
      },
    ],
    checklist: [
      "Комплексный подход к решению задач",
      "Соблюдение сроков и бюджета",
      "Использование современных материалов",
      "Постпроектное сопровождение",
    ],
  },
  {
    id: "road",
    title: "Дорожная инфраструктура",
    image: "/roads2.png",
    description:
      "Строительство и реконструкция автомобильных дорог, мостов и развязок. Используем инновационные материалы и технологии.",
    services: [
      {
        icon: "road",
        title: "Автомагистрали",
        description: "Строительство дорог высшей категории",
      },
      {
        icon: "road",
        title: "Мосты",
        description: "Возведение мостовых сооружений любой сложности",
      },
      {
        icon: "road",
        title: "Развязки",
        description: "Транспортные развязки и пересечения",
      },
    ],
    checklist: [
      "Сейсмостойкие конструкции",
      "Интеллектуальные системы управления",
      "Экологичные материалы",
      "Долговечность и надежность",
    ],
  },
  {
    id: "shipbuilding",
    title: "Судостроение",
    image: "/ship2.png",
    description:
      "Проектирование и строительство гражданских и специальных судов. Современные верфи и передовые технологии.",
    services: [
      {
        icon: "ship",
        title: "Гражданские суда",
        description: "Пассажирские и грузовые суда",
      },
      {
        icon: "ship",
        title: "Спецтехника",
        description: "Специализированные плавсредства",
      },
      {
        icon: "ship",
        title: "Модернизация",
        description: "Ремонт и обновление флота",
      },
    ],
    checklist: [
      "Современные конструкционные материалы",
      "Энергоэффективные решения",
      "Безопасность и надежность",
      "Международные стандарты",
    ],
  },
  {
    id: "aviation",
    title: "Крылья будущего",
    image: "/plane2.png",
    description:
      "Инновационные решения в авиастроении. Разработка и производство современных летательных аппаратов.",
    services: [
      {
        icon: "plane",
        title: "Авиастроение",
        description: "Производство летательных аппаратов",
      },
      {
        icon: "plane",
        title: "Разработки",
        description: "НИОКР в авиационной отрасли",
      },
      {
        icon: "plane",
        title: "Беспилотники",
        description: "БПЛА гражданского назначения",
      },
    ],
    checklist: [
      "Передовые аэродинамические решения",
      "Композитные материалы",
      "Цифровые технологии проектирования",
      "Экологичность и эффективность",
    ],
  },
  {
    id: "projects",
    title: "Наши проекты",
    image: "/logo_glow3.png",
    description:
      "Реализованные проекты, которыми мы гордимся. Каждый проект - это результат командной работы и профессионального подхода.",
    services: [
      {
        icon: "globe",
        title: "500+",
        description: "Успешных проектов",
      },
      {
        icon: "globe",
        title: "10+",
        description: "Стран присутствия",
      },
      {
        icon: "globe",
        title: "1000+",
        description: "Довольных клиентов",
      },
    ],
    checklist: [
      "Международный аэропорт",
      "Современный морской порт",
      "Высотные комплексы",
      "Инновационные мосты",
    ],
  },
  {
    id: "about",
    title: "О нас",
    image: "",
    description:
      "Мы - команда профессионалов с многолетним опытом в реализации сложных инженерных проектов. Наша миссия - создавать будущее сегодня.",
    services: [
      {
        icon: "phone",
        title: "Миссия",
        description: "Создавать инновационные решения для устойчивого развития",
      },
      {
        icon: "phone",
        title: "Видение",
        description: "Быть лидером в области технологического развития",
      },
      {
        icon: "phone",
        title: "Ценности",
        description: "Качество, надежность, инновации, ответственность",
      },
    ],
    checklist: [
      "Профессиональная команда",
      "Современные технологии",
      "Индивидуальный подход",
      "Гарантия качества",
    ],
    showButton: false,
  },
  {
    id: "contacts",
    title: "Контакты",
    image: "",
    description:
      "Свяжитесь с нами любым удобным способом. Наши менеджеры ответят на все ваши вопросы.",
    services: [
      {
        icon: "phone",
        title: "Адрес",
        description: "г. Москва, ул. Инновационная, д. 1",
      },
      {
        icon: "phone",
        title: "Телефон",
        description: "+7 (495) 123-45-67",
      },
      {
        icon: "phone",
        title: "Email",
        description: "info@company.ru",
      },
    ],
    checklist: [
      "Пн-Пт: 9:00 - 18:00",
      "Сб: 10:00 - 15:00",
      "Вс: выходной",
      "Онлайн-консультации 24/7",
    ],
    showButton: false,
  },
];
