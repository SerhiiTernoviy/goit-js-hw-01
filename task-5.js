// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
const countryName = "Индия";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;} else {country = countryName[0].toUpperCase() + countryName.toLowerCase().slice(1); // Write code on this line
  switch (country) {
    // Write code under this line
    case "Китай":
      price = 100;
      break;
    case "Австралия":
      price = 170;
      break;
    case "Индия":
      price = 80;
      break;
    case "Ямайка":
      price = 120;
      break;
    default:
      price = 0;
      message = NO_DELIVERY
  }
}
if (price > 0) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} //  switch (country) {  // Write code under this line  }}  message = `Доставка в ${country} будет стоить ${price} кредитов`;}
 console.log(message);