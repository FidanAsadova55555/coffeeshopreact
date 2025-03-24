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

      
    }
  }
};





i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, 
  interpolation: { escapeValue: false },
});

export default i18n;


 



