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
coffeeGreatness: "This coffee was brewed for greatness.",
coffeeWarning: "Warning: May cause extreme productivity.",
productDetails: "Product Details",
productDescription: "Not all heroes wear capes — some come in beans. This coffee is your trusty sidekick through Monday mornings, Zoom calls, and existential crises. Hand-roasted to perfection and bold enough to wake your soul (and maybe your neighbor), it delivers flavor so smooth you’ll wonder why you ever tolerated instant. Sip responsibly — productivity may skyrocket.",
thingsToKnow: "Things You Need to Know",
moreInfo: "More Information for You",
securityNotice: "We use industry standard SSL encryption to protect your details. Potentially sensitive information such as your name, address and card details are encoded so they can only be read on the secure server.",
paymentList: [
  "Safe Payments",
  "Accept Credit Card",
  "Different Payment Methods",
  "Price Includes VAT",
  "Easy to Order"
],shippingInfo: [
  "Europe & USA within 2-4 days",
  "Rest of the world within 3-7 days",
  "Selected locations"
]
,expressDelivery: "Express Delivery",
needMoreInfo: "Need more information",
helpLinks: [
  "Orders & Shipping",
  "Returns & Refunds",
  "Payments",
  "Your Orders"
]


    }
  },
  ru: {
    translation: {
      helpLinks: [
        "Заказы и доставка",
        "Возвраты и возмещения",
        "Платежи",
        "Ваши заказы"
      ],      
      expressDelivery: "Экспресс-доставка",
      needMoreInfo: "Нужна дополнительная информация",
      shippingInfo: [
        "Доставка по Европе и США в течение 2–4 дней",
        "Доставка в другие страны в течение 3–7 дней",
        "Только в определённые регионы"
      ]
,      
      paymentList: [
        "Безопасные платежи",
        "Принимаем банковские карты",
        "Разные способы оплаты",
        "Цена включает НДС",
        "Легкий процесс заказа"
      ],
      securityNotice: "Мы используем шифрование SSL по отраслевому стандарту для защиты ваших данных. Потенциально конфиденциальная информация, такая как ваше имя, адрес и данные карты, кодируется так, чтобы её можно было прочитать только на защищённом сервере.",
      thingsToKnow: "Что вам нужно знать",
      moreInfo: "Дополнительная информация для вас",
      productDetails: "Описание товара",
      productDescription: "Не все герои носят плащи — некоторые приходят в виде зёрен. Этот кофе — ваш верный напарник по понедельникам, онлайн-встречам и экзистенциальным кризисам. Обжарен вручную до совершенства и достаточно крепкий, чтобы разбудить не только вас, но и, возможно, соседа. Вкус настолько мягкий, что вы задумаетесь, как раньше пили растворимый. Пейте ответственно — продуктивность может зашкалить.",
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
  coffeeGreatness: "Этот кофе заварен для великих дел.",
coffeeWarning: "Внимание: может вызвать чрезмерную продуктивность.",

  
    }
  }
};





i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, 
  interpolation: { escapeValue: false },
});

export default i18n;


 



