/* Основные стили */
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
}

/* Переключение языка */
.language-switcher {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
}

.language-switcher button {
    background-color: #0088cc;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.language-switcher button:hover {
    background-color: #006699;
}

/* Главный экран */
.hero {
    background: url('../images/hero.jpg') center/cover no-repeat;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
}

.hero-content {
    position: relative;
    color: white;
    z-index: 1;
}

/* Почему мы */
.why-us {
    text-align: center;
    padding: 60px 20px;
}

.why-grid {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 1100px;
    margin: 0 auto;
}

.why-item {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1;
}

/* Контакты */
.contacts {
    text-align: center;
    padding: 60px 20px;
}

.contact-container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: stretch;
}

.contact-item {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    width: 48%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Карта */
.map {
    margin-top: 15px;
    width: 100%;
    height: 250px;
}

/* Адаптивность для телефонов */
@media (max-width: 900px) {
    .contact-container {
        flex-direction: column;
        align-items: center;
    }
    .contact-item {
        width: 90%;
    }
}
