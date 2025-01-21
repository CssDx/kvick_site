// Словарь с переводами
const translations = {
    "ENG": {
        "INTERACTIVE BOARD SOLUTIONS": "ИНТЕРАКТИВНЫЕ ДОСКИ",
        "4K UHD Screen": "4K UHD Экран",
        "Up To 20 Point Touch": "До 20 Точек Касания",
        "Dual System": "Двойная Система",
        "Whiteboard": "Доска",
        "Anti-Glare Glass": "Антибликовое Стекло",
        "Image Recognition": "Распознавание Изображений",
        "ANDROID 14.0 8GB+128GB": "ANDROID 14.0 8ГБ+128ГБ",
        "Smooth Performance:": "Плавная Работа:",
        "multitasking and fast response times, even for demanding applications and games.": "мультизадачность и быстрое время отклика, даже для требовательных приложений и игр.",
        "Ample Storage:": "Много Памяти:",
        "128GB storage provides ample space for apps, documents, photos and videos, reducing the need for frequent clean-ups.": "128ГБ памяти обеспечивает достаточно места для приложений, документов, фото и видео, уменьшая необходимость частого очищения.",
        "OS WINDOWS 11": "ОС WINDOWS 11",
        "Optional Setups:": "Дополнительные Настройки:",
        "CPU: i3, i5, i7": "Процессор: i3, i5, i7",
        "Memory: 4GB, 8GB, 16GB": "Память: 4ГБ, 8ГБ, 16ГБ",
        "Hard Disk: 128GB, 256GB, 512GB": "Жесткий Диск: 128ГБ, 256ГБ, 512ГБ",
        "Whiteboard Functions": "Функции Доски",
        "Adjust the pen color and thickness": "Настройка цвета и толщины пера",
        "Multiple erasing methods": "Множество методов стирания",
        "Writing content directly redirects to search": "Написание текста напрямую перенаправляет на поиск",
        "Multiple teaching tool options": "Множество инструментов для обучения",
        "Support adding images, videos, documents, etc": "Поддержка добавления изображений, видео, документов и т.д.",
        "Whiteboard 4-screen writing": "Доска для 4-экранного написания",
        "4K UHD Display": "4K UHD Дисплей",
        "Rich Interfaces": "Множество Интерфейсов",
        "Sizes": "Размеры",
        "Scenarios for": "Сценарии Для",
        "office": "Офиса",
        "education": "Образования"
    },
    "RUS": {
        "ИНТЕРАКТИВНЫЕ ДОСКИ": "INTERACTIVE BOARD SOLUTIONS",
        "4K UHD Экран": "4K UHD Screen",
        "До 20 Точек Касания": "Up To 20 Point Touch",
        "Двойная Система": "Dual System",
        "Доска": "Whiteboard",
        "Антибликовое Стекло": "Anti-Glare Glass",
        "Распознавание Изображений": "Image Recognition",
        "ANDROID 14.0 8ГБ+128ГБ": "ANDROID 14.0 8GB+128GB",
        "Плавная Работа:": "Smooth Performance:",
        "мультизадачность и быстрое время отклика, даже для требовательных приложений и игр.": "multitasking and fast response times, even for demanding applications and games.",
        "Много Памяти:": "Ample Storage:",
        "128ГБ памяти обеспечивает достаточно места для приложений, документов, фото и видео, уменьшая необходимость частого очищения.": "128GB storage provides ample space for apps, documents, photos and videos, reducing the need for frequent clean-ups.",
        "ОС WINDOWS 11": "OS WINDOWS 11",
        "Дополнительные Настройки:": "Optional Setups:",
        "Процессор: i3, i5, i7": "CPU: i3, i5, i7",
        "Память: 4ГБ, 8ГБ, 16ГБ": "Memory: 4GB, 8GB, 16GB",
        "Жесткий Диск: 128ГБ, 256ГБ, 512ГБ": "Hard Disk: 128GB, 256GB, 512GB",
        "Функции Доски": "Whiteboard Functions",
        "Настройка цвета и толщины пера": "Adjust the pen color and thickness",
        "Множество методов стирания": "Multiple erasing methods",
        "Написание текста напрямую перенаправляет на поиск": "Writing content directly redirects to search",
        "Множество инструментов для обучения": "Multiple teaching tool options",
        "Поддержка добавления изображений, видео, документов и т.д.": "Support adding images, videos, documents, etc",
        "Доска для 4-экранного написания": "Whiteboard 4-screen writing",
        "4K UHD Дисплей": "4K UHD Display",
        "Множество Интерфейсов": "Rich Interfaces",
        "Размеры": "Sizes",
        "Сценарии Для": "Scenarios for",
        "Офиса": "office",
        "Образования": "education"
    }
};

// Функция для перевода текста с сохранением стилей
function translatePage(language) {
    const elements = document.querySelectorAll("h1, h2, h3, div, span, li"); // Выбираем элементы
    elements.forEach(element => {
        const text = element.textContent.trim();
        const computedStyles = window.getComputedStyle(element);
        const originalFontSize = computedStyles.fontSize;
        if (translations[language][text]) {
            // Меняем только текст, стили остаются
            element.textContent = translations[language][text];
        }
    });
}

// Обработчик для switch
document.getElementById('languageSwitch').addEventListener('click', function() {
    const label = document.getElementById('languageLabel');
    if (label.textContent === "ENG") {
        label.textContent = "RUS";
        translatePage("ENG"); // Перевод на русский
    } else {
        label.textContent = "ENG";
        translatePage("RUS"); // Перевод на английский
    }
});