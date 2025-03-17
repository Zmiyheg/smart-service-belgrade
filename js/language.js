const translations = {
    ru: {
        title: "🚗 Smart Service",
        subtitle: "Сеть автосервисов в Белграде и Новом Саде",
        "btn-contact": "Записаться в Telegram",
        "why-title": "🤔 Почему выбирают нас?",
        "why-1": "Точный анализ",
        "why-1-text": "Используем только официальные инструкции и профессиональную диагностику.",
        "why-2": "Честный ремонт",
        "why-2-text": "Ремонтируем только то, что действительно сломано, без лишних замен.",
        "why-3": "Качество без спешки",
        "why-3-text": "Работаем аккуратно и без лишних затрат для клиента.",
        "why-4": "Доверие клиентов",
        "why-4-text": "Ценим вашу лояльность выше сиюминутной выгоды.",
        "services-title": "📣 Наши услуги",
        "service-1": "Базовое ТО",
        "service-2": "Ремонт подвески и тормозов",
        "service-3": "Замена цепей и ремней ГРМ",
        "service-4": "Ремонт узлов и агрегатов",
        "service-5": "Осмотр авто перед покупкой",
        "service-6": "Компьютерная диагностика",
        "service-7": "Чип-тюнинг (Stage, DSG, Экология)",
        "contacts-title": "📍 Наши сервисы",
        "contact-1-title": "Сервис в Белграде",
        "contact-2-title": "Сервис в Новом Саде"
    },
    sr: {
        title: "🚗 Smart Service",
        subtitle: "Mreža auto-servisa u Beogradu i Novom Sadu",
        "btn-contact": "Rezervišite termin na Telegramu",
        "why-title": "🤔 Zašto nas biraju?",
        "why-1": "Precizna dijagnostika",
        "why-1-text": "Koristimo samo zvanična uputstva i profesionalnu dijagnostiku.",
        "why-2": "Poštena popravka",
        "why-2-text": "Popravljamo samo ono što je zaista pokvareno, bez nepotrebnih zamena.",
        "why-3": "Kvalitet bez žurbe",
        "why-3-text": "Radimo pažljivo i bez nepotrebnih troškova za klijenta.",
        "why-4": "Poverenje klijenata",
        "why-4-text": "Vaše poverenje cenimo više od trenutne dobiti.",
        "services-title": "📣 Naše usluge",
        "service-1": "Osnovno održavanje",
        "service-2": "Popravka oslanjanja i kočnica",
        "service-3": "Zamena lanca i kaiša razvodnog mehanizma",
        "service-4": "Popravka agregata i komponenti",
        "service-5": "Pregled automobila pre kupovine",
        "service-6": "Kompjuterska dijagnostika",
        "service-7": "Čip-tjuning (Stage, DSG, Ekologija)",
        "contacts-title": "📍 Naši servisi",
        "contact-1-title": "Servis u Beogradu",
        "contact-2-title": "Servis u Novom Sadu"
    }
};

function changeLanguage(lang) {
    for (let key in translations[lang]) {
        let element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    }
}

