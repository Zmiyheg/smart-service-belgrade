document.addEventListener("DOMContentLoaded", function () {
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
            "contacts-title": "📍 Наши сервисы"
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
            "contacts-title": "📍 Naši servisi"
        }
    };

    function changeLanguage(lang) {
        if (!translations[lang]) return;
        for (let key in translations[lang]) {
            let element = document.getElementById(key);
            if (element) {
                element.textContent = translations[lang][key];
            }
        }
    }

    document.getElementById("lang-ru").addEventListener("click", () => changeLanguage("ru"));
    document.getElementById("lang-sr").addEventListener("click", () => changeLanguage("sr"));
});
