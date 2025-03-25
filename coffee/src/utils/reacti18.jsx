import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const savedLang = cookies.get("lang") || "en"; 

const resources = {
  en: {
    translation: {
        home: "Home",
        shop: "Shop",
        featured: "Featured",
        pages: "Pages",
        blogs: "Blogs",
        menu: "Menu",
        login: "Login",
        forgotPassword: "Forgot your password?",
        justlogin: "Log in",
or: "or",
close: "Close",
registerNow: "Register now",
password: "Password",
emailAddress: "Email address",
everythingForYou: "Everything for you",
ecoLimitedDesc: "Limited edition. Eco-friendly. Not just for working out",
shopNow: "Shop now",
styleDestination: "Style destination",
lifeBeginsAfterCoffee: "Life begins after coffee",
aboutUs: "About Us",
privacyPolicy: "Privacy Policy",
return: "Products Return",
wholesale: "Wholesale Policy",
pagination: "Pagination",
  terms: "Terms & Conditions",
  contact: "Contact",
  accessories: "Accessories",
  termOfUse: "Term of use",
  help: "Help Center",
  address: "Address Store",
  receivers: "Receivers & Amplifiers",
  clothings: "Clothings",
  newsletterSubscribeText: "Subscribe our newsletter and get discount 30% off",
  customerCare: "Customer Care",
  quickShop: "Quick Shop",
  company: "Company",
  news: "News",
products: "Products",

    }
  },
  ru: {
    translation: {
        home: "Главная",
      shop: "Магазин",
      featured: "Избранное",
      pages: "Страницы",
      blogs: "Блоги",
      menu: "Меню",
      login: "Войти",
      forgotPassword: "Забыли пароль?",
justlogin: "Войти",
or: "или",
close: "Закрыть",
registerNow: "Зарегистрироваться",
password: "Пароль",
emailAddress: "Электронная почта",
everythingForYou: "Всё для вас",
ecoLimitedDesc: "Ограниченная серия. Экологично. Не только для спорта",
shopNow: "Купить сейчас",
styleDestination: "Место стиля",
lifeBeginsAfterCoffee: "Жизнь начинается после кофе",
aboutUs: "О нас",
  return: "Возврат товаров",
  wholesale: "Оптовая политика",
  pagination: "Разбивка на страницы",
  terms: "Условия и положения",
  contact: "Контакт",
  accessories: "Аксессуары",
  termOfUse: "Условия использования",
  help: "Центр помощи",
  address: "Адрес магазина",
  privacyPolicy: "Политика конфиденциальности",
  receivers: "Приёмники и усилители",
  clothings: "Одежда",
  newsletterSubscribeText: "Подпишитесь на нашу рассылку и получите скидку 30%",
  customerCare: "Обслуживание клиентов",
  quickShop: "Быстрая покупка",
  company: "Компания",
  news: "Новости",
  products: "Товары",
  
    }
  }
};





i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, 
  interpolation: { escapeValue: false },
});

export default i18n;


 



