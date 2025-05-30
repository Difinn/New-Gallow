const chemicalTerms = [
    "Атом", "Ион", "Протон", "Электрон", "Изотоп", "Валентность", "Орбиталь", "Реакция", "Синтез", "Окисление",
    "Кислота", "Основание", "pH", "Соль", "Электролит", "Моль", "Энтальпия", "Катализатор", "Алкан", "Алкен",
    "Алкин", "Арен", "Эфир", "Амин", "Амид", "Бензол", "Метан", "Этан", "Пропан", "Бутан",
    "Пентан", "Гексан", "Этен", "Пропен", "Бутилен", "Ацетилен", "Толуол", "Ксилол", "Стирол", "Фенол",
    "Этанол", "Метанол", "Глицерин", "Формальдегид", "Ацетон", "Уксусная", "Муравьиная", "Бензойная", "Анилин", "Пиразин",
    "Пиридин", "Фуран", "Тиофен", "Пиррол", "Аммиак", "Карбид", "Нитрид", "Оксид", "Пероксид", "Гидрид",
    "Хлорид", "Фторид", "Бромид", "Иодид", "Сульфат", "Нитрат", "Фосфат", "Карбонат", "Силикат", "Ацетат",
    "Гидроксид", "Хлорат", "Перхлорат", "Перманганат", "Дихромат", "Цианид", "Тиоцианат", "Фосген", "Мочевина", "Глицин",
    "Аланин", "Глюкоза", "Фруктоза", "Сахароза", "Лактоза", "Крахмал", "Целлюлоза", "Гемоглобин", "Фермент", "Аденин",
    "Гуанин", "Тимин", "Цитозин", "Урацил", "Адреналин", "Инсулин", "Коллаген", "Кератин", "Холестерин", "Фосфолипид",
    "Гликоген", "ДНК", "РНК", "АТФ", "НАД", "Аллотроп", "Изомер", "Гомолог", "Радикал", "Гидрат",
    "Кристаллогидрат", "Адсорбция", "Абсорбция", "Диффузия", "Осмос", "Диализ", "Коагуляция", "Пептизация", "Седиментация", "Центрифугирование",
    "Дистилляция", "Сублимация", "Возгонка", "Амальгама", "Сплавы", "Бронза", "Латунь", "Дюралюминий", "Чугун", "Сталь",
    "Инвар", "Пермаллой", "Нихром", "Константан", "Феррит", "Аустенит", "Цементит", "Мартенсит", "Эвтектика", "Криолит",
    "Кварц", "Корунд", "Гематит", "Магнетит", "Боксит", "Малахит", "Азурит", "Галит", "Сильвин", "Карналлит",
    "Апатит", "Фосфорит", "Пирит", "Сфалерит", "Кальцит", "Доломит", "Гипс", "Ангидрит", "Барит", "Флюорит",
    "Каолин", "Асбест", "Слюда", "Цеолит", "Перлит", "Пемза", "Тальк", "Графит", "Алмаз", "Фуллерен",
    "Графен", "Нанотрубка", "Полимер", "Мономер", "Полиэтилен", "Полипропилен", "Полистирол", "ПВХ", "Тефлон", "Нейлон",
    "Лавсан", "Капрон", "Резина", "Каучук", "Синтепон", "Полиуретан", "Силикон", "Эпоксидка", "Полиэфир", "Фенолформальдегид",
    "Карбамид", "Метиламин", "Этиленгликоль", "Пропиленгликоль", "Ацетальдегид", "Бензальдегид", "Ацетофенон", "Бензофенон", "Метилацетат", "Этилацетат"];

// Функция для получения и отображения погоды
async function getWeather() {
    try {
        // Делаем запрос к API Open-Meteo
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=56&longitude=38&current=temperature_2m,precipitation,wind_speed_10m,snowfall,rain,cloud_cover&timezone=Europe/Moscow&forecast_days=1'
        );
        
        const data = await response.json();
        
        // Получаем текущие погодные данные
        const current = data.current;
        
        // Обновляем данные на странице
        document.getElementById("temperature").textContent = `${Math.round(current.temperature_2m)}°C`;
        document.getElementById("cloud-cover").textContent = `Облачность: ${current.cloud_cover}%`;
        document.getElementById("weather-icon").textContent = getWeatherIcon(current.cloud_cover);
        
    } catch (error) {
        console.error('Ошибка при получении погоды:', error);
        document.getElementById("temperature").textContent = 'Ошибка';
    }
}

function ran(){
    let randind = Math.floor(Math.random() * chemicalTerms.length)
    let randel = chemicalTerms[randind]
    return randel
}

function logic(){
    let attempts = Integer.parseInt(document.getElementById("num").textContent); //попытки
    let word = ran();
    var lit = document.getElementById("text-input");
    if (lit in word) {
        document.getElementById("succes").textContent = "Успешно!";
        console.log("Успешно!");
    }

    else {
        document.getElementById("succes").textContent = "Провал!";
        console.log("Провал!");
    }
}


// Вызываем функцию при загрузке страницы
window.addEventListener('DOMContentLoaded', getWeather);

// Обновляем данные каждые 30 минут (1800000 мс)
setInterval(getWeather, 1800000);

// Добавляем обработчики для кнопок (для демонстрации)
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Функция "${button.textContent}" в разработке`);
    });
});

let count_of_tries = 6;
let p = document.getElementById("num");
p.innerHTML = count_of_tries;




function getWeatherIcon(cloudCover) {
    if (cloudCover <= 40) {
        return '☀️'; // Солнце
    } else if (cloudCover >= 70) {
        return '☁️'; // Облака + sun
    } else {
        return '⛅'; //
    }
}
