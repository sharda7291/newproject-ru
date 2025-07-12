1// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      contact: "Contact Us",
      products: "Products",
      enquire: "Enquire Now",
      slider1_title: "Premium Industrial Tools Exported from India",
      slider1_desc: "Count on us for high-performance pipe, plumbing, and safety tools—engineered in India, trusted across Russia.",
      slider2_title: "Built for Oil & Gas Demands",
      slider2_desc: "Our specialized oil and gas tools deliver rugged durability and precision for Russia’s toughest conditions.",
      explore: "Explore More",
      //about
      about_heading: "Supplying Industrial Tools & Equipment — Globally",
      p1: "We are a trusted B2B exporter specializing in pipe and plumbing tools, safety hand tools, oil and gas hand tools, tool trolleys, complete toolkits, and hotelier equipment—all engineered for durability, safety, and long-term performance.",
      p2: "Serving industries like construction, oil & gas, and hospitality, our tools are built to meet the toughest international standards.",
      p3: "From India to Russia, the Middle East, and Central Asia, we provide a broad product portfolio backed by strong logistics and compliance support.",
    
      about_brief: "Specialize in Tools for Plumbing, Safety, Oil and Gas Operations, Hotelier Maintenance, and Other Industrial Applications.",
    why_work_with_us: "Why Work With Us:",
    point1: "Extensive product range for industrial, hospitality, and energy sectors",
    point2: "Seamless export documentation and logistics",
    point3: "Responsive service in English and Russian",
    about_closing: "Let’s build a supply chain that’s efficient, dependable, and built for long-term success.",
    logo_alt: "Industrial Tools",



       //choose
      choose_heading: "Why Industry Leaders Choose Us!",
      durability_title: "Industrial-Grade Durability",
      durability_desc: "Durable for harsh industrial environments.",
      shipping_title: "Worldwide Shipping",
      shipping_desc: "Fast, reliable tool delivery anywhere.",
      precision_title: "Precision-Engineered Tools",
      precision_desc: "Engineered for precision, speed, reliability.",
      support_title: "24/7 Customer Support",
      support_desc: "Experts ready to assist anytime.",

      //footer
      
      footer_products: "Products",
      footer_productCategories: "Product Categories",
      footer_industries: "Industries",
      footer_contact: "Contact",
        items_insulated: "Insulated Tools",
        items_hotelier: "Hotelier Tools",
        items_pipeWrenches: "Pipe Wrenches",
        items_workstation: "Workstation Toolkits",
        items_pipeTools: "Pipe Tools",
        items_oilGas: "Oil & Gas Equipment",
        items_safety: "Safety Hand Tools",
        items_trolleys: "Toolkits & Trolleys",
        items_construction: "Construction",
        items_oilIndustry: "Oil & Gas",
        items_hospitality: "Hospitality",
        items_industrial: "Industrial Supply",
        items_email: "Email Us",
        items_social: "Social Media",
        items_quote: "Request a Quote",
       items_partner: "Become a Partner",
      footer_copyright: "All Rights Reserved.",

      //form
      form_heading: "Get in touch to discuss your requirements.",
      name: "Name",
      phone: "Phone Number",
      company: "Company Name",
      address: "Address",
      email: "Email",
      enquiry: "Enquiry",
      submit: "Submit",

      //contact
  contact_heading: "Contact us",
  contact_brief: "Specialize in Tools for Plumbing, Safety, Oil and Gas Operations, Hotelier Maintenance, and Other Industrial Applications.",
  get_in_touch: "Get in touch to discuss your requirements in full",
  name_placeholder: "Name",
  phone_placeholder: "Phone Number",
  company_placeholder: "Company Name",
  address_placeholder: "Address",
  email_placeholder: "Email",
  enquiry_placeholder: "Enquiry",
  submit_button: "Submit",
  or_text: "Or",
  direct_contact: "Directly Connect Us at sales@tools4oilandgas.com",

    validation_name: "Name is required",
    validation_phone: "Phone number is required",
    validation_company: "Company name is required",
    validation_address: "Address is required",
    validation_email_required: "Email is required",
    validation_email_invalid: "Email is invalid",
    validation_enquiry: "Enquiry message is required",

  alert_success: "Email sent successfully!",
  alert_failure: "Failed to send email.",


      
      // Product Page
      product_heading: "Product Categories",
      product_subheading: "Industrial hand tools designed for various industries...",
      view_more: "View More →",
      features: [
        {
            title: "Pipe and Plumbing Tools",
            desc: "Our range of pipe and plumbing tools is designed for precision and durability, making pipe cutting, threading, bending, and assembly quick and efficient. Whether you are working with copper, PVC, or steel, these tools ensure secure, leak-free connections in any plumbing system. From professional-grade pipe cutters and threaders to wrenches and benders, we provide everything needed for reliable plumbing installation and maintenance.",
            img: "/pipe_wrench.jpg",
            link: "/products/pipe-and-plumbing"
        },
        {
            title: "Safety Hand Tools",
            desc: "Our safety hand tools are specifically engineered to meet stringent safety standards, ensuring full compliance with industry regulations in oil and gas environments. Designed to minimize risk during high-pressure operations, these tools offer enhanced durability, insulation, and ergonomic handling. From non-sparking tools to insulated screwdrivers and wrenches, each product supports safe, efficient performance in hazardous or explosive atmospheres.",
            img: "/safety_tools.png",
            link: "/products/safety-tools"
        },
        {
            title: "Tool Trolleys and Toolkits",
            desc: "Our robust tool trolleys and comprehensive toolkits are perfect for industrial settings, fieldwork, and workshops. Built for durability and easy mobility, these solutions help organize and transport essential tools efficiently, improving productivity and reducing downtime. Whether you need a compact toolkit for quick repairs or a heavy-duty trolley for a full range of equipment, our products are designed to withstand tough environments and keep your tools accessible and secure.",
            img: "/tools_cabinets.png",
            link: "/products/tools-trolley"
        },
        {
            title: "Precision Tools",
            desc: "Our precision tools are engineered for accurate fastener tightening across mechanical, automotive, and industrial applications. Designed to deliver consistent torque and reduce the risk of over-tightening, these tools ensure safety and reliability in every job. Whether you’re working on delicate machinery or heavy equipment, our precision hand tools help maintain optimal performance and extend the lifespan of your components.",
            img: "/torque_wrenches.png",
            link: "/products/precision-tools"
        },
        {
            title: "Oil and Gas Hand Tools",
            desc: "Our oil and gas hand tools are built to withstand the demanding conditions of drilling, maintenance, and safety operations in the energy sector. Engineered for durability and reliability, these tools ensure safe and efficient performance in harsh environments, helping professionals tackle tough jobs with confidence and precision.",
            img: "/oil_and_gas.png",
            link: "/products/oil-and-gas"
        },
        {
            title: "Hotelier Equipment",
            desc: "Our hotelier tools are specially designed to support maintenance, repair, and installation tasks within hotel facilities. From plumbing fixes to electrical repairs, these durable and easy-to-use tools help keep hotel operations running smoothly and guest environments comfortable. Reliable and efficient, they’re ideal for the fast-paced demands of hospitality maintenance teams.",
            img: "/drain-cleaner.png",
            link: "/products/hotelier"
        }
      ]
      
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      contact: "Связаться с нами",
      products: "Продукты",
      enquire: "Запросить",
      slider1_title: "Промышленные инструменты премиум-класса из Индии",
      slider1_desc: "Надежные трубные, сантехнические и защитные инструменты — произведены в Индии, востребованы в России.",
      slider2_title: "Разработано для нефтегазовой отрасли",
      slider2_desc: "Наши специализированные инструменты обеспечивают прочность и точность в самых суровых условиях России.",
      explore: "Узнать больше",

      //about
      about_heading: "Поставка промышленных инструментов и оборудования по всему миру",
      p1: "Мы — надежный B2B-экспортер, специализирующийся на трубных и сантехнических инструментах, защитных инструментах, инструментах для нефтегазовой отрасли, тележках для инструментов, полных наборах инструментов и оборудовании для гостиниц — всё создано с акцентом на надежность, безопасность и долговечность.",
      p2: "Обслуживая такие отрасли, как строительство, нефтегазовая промышленность и гостиничный бизнес, наши инструменты соответствуют самым строгим международным стандартам.",
      p3: "От Индии до России, Ближнего Востока и Центральной Азии — мы предлагаем широкий ассортимент продукции с надёжной логистикой и поддержкой по вопросам соответствия требованиям.",
    
about_brief: "Специализируемся на инструментах для сантехники, безопасности, нефтегазовых операций, обслуживания гостиниц и других промышленных приложений.",
why_work_with_us: "Почему выбирают нас:",
point1: "Широкий ассортимент продукции для промышленного, гостиничного и энергетического секторов",
point2: "Бесперебойная экспортная документация и логистика",
point3: "Оперативное обслуживание на английском и русском языках",
about_closing: "Давайте построим эффективную, надёжную и долговременную цепочку поставок.",
logo_alt: "Промышленные инструменты",


     //form
      form_heading: "Свяжитесь с нами, чтобы обсудить ваши требования.",
      name: "Имя",
      phone: "Номер телефона",
      company: "Название компании",
      address: "Адрес",
      email: "Электронная почта",
      enquiry: "Запрос",
      submit: "Отправить",

    
      //contact 
contact_heading: "Свяжитесь с нами",
contact_brief: "Специализируемся на инструментах для сантехники, безопасности, нефтегазовых операций, обслуживания гостиниц и других промышленных приложений.",
get_in_touch: "Свяжитесь с нами, чтобы обсудить ваши требования подробно",
name_placeholder: "Имя",
phone_placeholder: "Номер телефона",
company_placeholder: "Название компании",
address_placeholder: "Адрес",
email_placeholder: "Электронная почта",
enquiry_placeholder: "Запрос",
submit_button: "Отправить",
or_text: "Или",
direct_contact: "Свяжитесь с нами напрямую: sales@tools4oilandgas.com",


  validation_name: "Имя обязательно",
  validation_phone: "Номер телефона обязателен",
  validation_company: "Название компании обязательно",
  validation_address: "Адрес обязателен",
  validation_email_required: "Электронная почта обязательна",
  validation_email_invalid: "Недействительный адрес электронной почты",
  validation_enquiry: "Запрос обязателен",
alert_success: "Письмо успешно отправлено!",
alert_failure: "Не удалось отправить письмо.",


      //footer
      footer_products: "Продукция",
      footer_productCategories: "Категории товаров",
      footer_industries: "Отрасли",
      footer_contact: "Контакты",
        items_insulated: "Изолированные инструменты",
        items_hotelier: "Инструменты для отелей",
        items_pipeWrenches: "Трубные ключи",
        items_workstation: "Наборы инструментов",
        items_pipeTools: "Инструменты для труб",
        items_oilGas: "Оборудование для нефти и газа",
        items_safety: "Защитные ручные инструменты",
        items_trolleys: "Наборы и тележки",
        items_construction: "Строительство",
        items_oilIndustry: "Нефтегазовая отрасль",
        items_hospitality: "Гостиничный бизнес",
        items_industrial: "Промышленное снабжение",
        items_email: "Напишите нам",
        items_social: "Соцсети",
        items_quote: "Запросить коммерческое предложение",
        items_partner: "Стать партнером",
        footer_copyright: "Все права защищены.",


      //choose
      choose_heading: "Почему нас выбирают лидеры отрасли",
      durability_title: "Промышленная прочность",
      durability_desc: "Устойчивость к суровым условиям промышленности.",
      shipping_title: "Мировая доставка",
      shipping_desc: "Быстрая и надежная доставка инструментов по всему миру.",
      precision_title: "Инструменты высокой точности",
      precision_desc: "Разработаны для точности, скорости и надежности.",
      support_title: "Круглосуточная поддержка",
      support_desc: "Эксперты готовы помочь в любое время.",
      
      // Product Page
      product_heading: "Категории продуктов",
      product_subheading: "Промышленные ручные инструменты для различных отраслей...",
      view_more: "Подробнее →",
      features: [
        {
            title: "Инструменты для труб и сантехники",
            desc: "Наш ассортимент инструментов для труб и сантехнических работ разработан с учётом точности и долговечности, обеспечивая быстрое и эффективное резание, нарезку резьбы, сгибание и монтаж труб. Независимо от того, работаете ли вы с медью, ПВХ или сталью, эти инструменты гарантируют надёжные, герметичные соединения в любой системе водоснабжения. От профессиональных труборезов и резьбонарезных станков до гаечных ключей и трубогибов — мы предоставляем всё необходимое для надёжного монтажа и обслуживания сантехники.",
            img: "/pipe_wrench.jpg",
            link: "/products/pipe-and-plumbing"
        },
        {
            title: "Защитные ручные инструменты",
            desc: "Наши защитные ручные инструменты специально разработаны в соответствии с жёсткими требованиями безопасности, обеспечивая полное соответствие отраслевым нормам в нефтегазовой сфере. Инструменты спроектированы для снижения рисков при работе под высоким давлением и обладают повышенной прочностью, изоляцией и эргономичностью. От искробезопасных инструментов до изолированных отвёрток и гаечных ключей — каждый продукт обеспечивает безопасную и эффективную работу в опасных или взрывоопасных условиях.",
            img: "/safety_tools.png",
            link: "/products/safety-tools"
        },
        {
            title: "Инструментальные тележки и наборы",
            desc: "Наши прочные инструментальные тележки и универсальные наборы инструментов идеально подходят для промышленных объектов, выездных работ и мастерских. Они обеспечивают долговечность и удобную мобильность, помогая эффективно организовать и транспортировать необходимые инструменты, повышая производительность и снижая время простоя. Независимо от того, нужен ли вам компактный набор для быстрых ремонтов или тяжёлая тележка для полного набора оборудования, наша продукция спроектирована для работы в тяжёлых условиях, обеспечивая надёжный и удобный доступ к инструментам.",
            img: "/tools_cabinets.png",
            link: "/products/tools-trolley"
        },
        {
            title: "Точные инструменты",
            desc: "Наши точные инструменты разработаны для аккуратной и надёжной затяжки крепежа в механических, автомобильных и промышленных приложениях. Они обеспечивают стабильный крутящий момент и снижают риск перетяжки, гарантируя безопасность и надёжность при выполнении любых работ. Независимо от того, работаете ли вы с деликатным оборудованием или тяжёлой техникой, наши точные ручные инструменты помогают поддерживать оптимальную работу систем и продлевают срок службы компонентов.",
            img: "/torque_wrenches.png",
            link: "/products/precision-tools"
        },
        {
            title: "Ручные инструменты для нефтегазовой отрасли",
            desc: "Наши ручные инструменты для нефтегазовой отрасли созданы для работы в суровых условиях буровых, ремонтных и защитных операций в энергетическом секторе. Они разработаны с упором на прочность и надёжность, обеспечивая безопасную и эффективную работу в сложных средах, помогая специалистам уверенно и точно выполнять самые трудные задачи.",
            img: "/oil_and_gas.png",
            link: "/products/oil-and-gas"
        },
        {
            title: "Инструменты для гостиничного сервиса",
            desc: "Наши инструменты для гостиничного сервиса специально разработаны для поддержки задач по техническому обслуживанию, ремонту и установке в отелях. От сантехнических работ до электрических ремонтов — эти прочные и удобные в использовании инструменты помогают обеспечивать бесперебойную работу гостиничного хозяйства и комфорт для гостей. Надёжные и эффективные, они идеально подходят для динамичной работы обслуживающего персонала в сфере гостеприимства.",
            img: "/drain-cleaner.png",
            link: "/products/hotelier"
        }
     ]
      
      
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
